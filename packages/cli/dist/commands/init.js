import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import fetch from 'node-fetch';
const REGISTRY_URL = 'https://raw.githubusercontent.com/spideydotjs/glassify/main';
export const initCommand = new Command()
    .name('init')
    .description('Initialize glassify in your project')
    .action(async () => {
    try {
        const configPath = path.join(process.cwd(), 'glasscn.json');
        if (await fs.pathExists(configPath)) {
            console.log('Already initialized: glasscn.json exists.');
            return;
        }
        console.log('Detecting project structure...');
        // 1. Detect src/ directory
        const hasSrc = await fs.pathExists(path.join(process.cwd(), 'src'));
        const basePrefix = hasSrc ? 'src/' : '';
        // 2. Detect TS vs JS
        const hasTsconfig = await fs.pathExists(path.join(process.cwd(), 'tsconfig.json'));
        const utilsExt = hasTsconfig ? 'ts' : 'js';
        // 3. Detect Next.js and App Router vs Pages Router
        const packageJsonPath = path.join(process.cwd(), 'package.json');
        let isNext = false;
        if (await fs.pathExists(packageJsonPath)) {
            const pkg = await fs.readJSON(packageJsonPath);
            isNext = !!(pkg.dependencies?.next || pkg.devDependencies?.next);
        }
        const hasAppRouter = await fs.pathExists(path.join(process.cwd(), basePrefix + 'app'));
        const hasPagesRouter = await fs.pathExists(path.join(process.cwd(), basePrefix + 'pages'));
        // Determine default paths
        let stylePath = `${basePrefix}glassify.css`;
        let componentsPath = `${basePrefix}components/glassify`;
        let utilsPath = `${basePrefix}lib/utils.${utilsExt}`;
        let instructions = '';
        if (isNext) {
            if (hasAppRouter) {
                stylePath = `${basePrefix}app/glassify.css`;
                instructions = `To complete setup, import './glassify.css' in ${basePrefix}app/layout.${hasTsconfig ? 'tsx' : 'js'}`;
            }
            else if (hasPagesRouter) {
                stylePath = `${basePrefix}pages/glassify.css`;
                instructions = `To complete setup, import './glassify.css' in ${basePrefix}pages/_app.${hasTsconfig ? 'tsx' : 'js'}`;
            }
            else {
                instructions = `To complete setup, import internal glassify.css stylesheet in your root layout/app file.`;
            }
        }
        else {
            const mainEntry = hasTsconfig ? 'main.tsx' : 'main.jsx';
            instructions = `To complete setup, import './glassify.css' in ${basePrefix}${mainEntry} or ${basePrefix}index.${hasTsconfig ? 'tsx' : 'js'}`;
        }
        const defaultConfig = {
            style: stylePath,
            components: componentsPath,
            utils: utilsPath
        };
        console.log('Initializing glasscn...');
        // Write config file
        await fs.writeJSON(configPath, defaultConfig, { spaces: 2 });
        console.log('Created glasscn.json');
        // Create directories
        await fs.ensureDir(path.dirname(defaultConfig.style));
        await fs.ensureDir(defaultConfig.components);
        await fs.ensureDir(path.dirname(defaultConfig.utils));
        console.log('Fetching core tokens and utils from repository...');
        // Fetch tokens.css, animations.css, utils.ts
        const tokensRes = await fetch(`${REGISTRY_URL}/lib/tokens.css`);
        if (!tokensRes.ok)
            throw new Error('Failed to fetch tokens.css');
        const tokensContent = await tokensRes.text();
        await fs.writeFile(path.join(defaultConfig.components, 'tokens.css'), tokensContent);
        const animRes = await fetch(`${REGISTRY_URL}/lib/animations.css`);
        if (!animRes.ok)
            throw new Error('Failed to fetch animations.css');
        const animContent = await animRes.text();
        await fs.writeFile(path.join(defaultConfig.components, 'animations.css'), animContent);
        const utilsRes = await fetch(`${REGISTRY_URL}/lib/utils.ts`);
        if (!utilsRes.ok)
            throw new Error('Failed to fetch utils.ts');
        let utilsContent = await utilsRes.text();
        // If they are using pure javascript, we can strip basic typescript types if needed or just rename it.
        // Usually next.js / react setups with javascript support modern syntax, but utils.ts is simple.
        // Let's write to target utils.ts or utils.js
        await fs.writeFile(defaultConfig.utils, utilsContent);
        // Create main glassify.css importing tokens and animations dynamically
        const styleDir = path.dirname(defaultConfig.style);
        const relativeTokens = './' + path.relative(styleDir, path.join(defaultConfig.components, 'tokens.css')).replace(/\\/g, '/');
        const relativeAnimations = './' + path.relative(styleDir, path.join(defaultConfig.components, 'animations.css')).replace(/\\/g, '/');
        const mainCssContent = `@import "${relativeTokens}";\n@import "${relativeAnimations}";\n`;
        await fs.writeFile(defaultConfig.style, mainCssContent);
        console.log('Successfully initialized Glassify!');
        console.log('Core files added:');
        console.log(`- Config: glasscn.json`);
        console.log(`- Styles: ${defaultConfig.style}`);
        console.log(`- Tokens: ${path.join(defaultConfig.components, 'tokens.css')}`);
        console.log(`- Animations: ${path.join(defaultConfig.components, 'animations.css')}`);
        console.log(`- Utils: ${defaultConfig.utils}`);
        if (instructions) {
            console.log(`\n👉 ${instructions}`);
        }
    }
    catch (error) {
        console.error('Initialization failed:', error.message);
    }
});
