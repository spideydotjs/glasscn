import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import fetch from 'node-fetch';
const REGISTRY_URL = 'https://raw.githubusercontent.com/spideydotjs/glassify/main';
export const addCommand = new Command()
    .name('add')
    .description('Add a component to your project')
    .argument('<component>', 'component name to add')
    .action(async (componentName) => {
    try {
        const configPath = path.join(process.cwd(), 'glasscn.json');
        if (!(await fs.pathExists(configPath))) {
            console.error('Please run "npx glasscn init" first to initialize the configuration.');
            return;
        }
        const config = await fs.readJSON(configPath);
        console.log(`Fetching registry to locate ${componentName}...`);
        const registryRes = await fetch(`${REGISTRY_URL}/registry.json`);
        if (!registryRes.ok) {
            throw new Error('Failed to fetch registry.json from origin.');
        }
        const registry = await registryRes.json();
        // Find the component (allow typing "glass-button" or "button")
        const formattedName = componentName.startsWith('glass-') ? componentName : `glass-${componentName}`;
        const compDef = registry.components.find((c) => c.name === formattedName || c.name === componentName);
        if (!compDef) {
            console.error(`Component "${componentName}" not found in the registry.`);
            return;
        }
        console.log(`Adding ${compDef.name} to your project...`);
        const compDestDir = path.join(config.components, compDef.name);
        await fs.ensureDir(compDestDir);
        for (const file of compDef.files) {
            // file.path is like "components/glass-button/index.tsx"
            const fileUrl = `${REGISTRY_URL}/${file.path}`;
            const fileRes = await fetch(fileUrl);
            if (!fileRes.ok) {
                throw new Error(`Failed to fetch file: ${file.path}`);
            }
            let fileContent = await fileRes.text();
            const baseName = path.basename(file.path);
            const destPath = path.join(compDestDir, baseName);
            if (file.type === 'component') {
                // Resolve relative imports to utils.ts in index.tsx
                // In source file, it has: import { cn } from '../../lib/utils.js';
                // We need to rewrite this relative to the user's config.utils!
                const relativeUtilsPath = path.relative(compDestDir, config.utils);
                // strip extension
                let importPath = relativeUtilsPath.replace(/\.[^/.]+$/, '');
                // replace backslashes for Windows path compatibility
                importPath = importPath.replace(/\\/g, '/');
                // Prefix with ./ if it does not start with . or /
                if (!importPath.startsWith('.')) {
                    importPath = `./${importPath}`;
                }
                // Replace old import path
                fileContent = fileContent.replace(/from\s+['"]\.\.\/\.\.\/lib\/utils\.js['"]/g, `from '${importPath}'`);
                fileContent = fileContent.replace(/from\s+['"]\.\.\/\.\.\/lib\/utils\.ts['"]/g, `from '${importPath}'`);
            }
            await fs.writeFile(destPath, fileContent);
            console.log(`- Created ${path.relative(process.cwd(), destPath)}`);
            // If it's a style file, append import to main css file
            if (file.type === 'style') {
                const styleFilePath = config.style;
                if (await fs.pathExists(styleFilePath)) {
                    const currentStyles = await fs.readFile(styleFilePath, 'utf-8');
                    const relativeImportPath = './' + path.relative(path.dirname(styleFilePath), destPath).replace(/\\/g, '/');
                    const importStatement = `@import "${relativeImportPath}";`;
                    if (!currentStyles.includes(relativeImportPath)) {
                        await fs.appendFile(styleFilePath, `\n${importStatement}`);
                        console.log(`- Registered style in ${path.relative(process.cwd(), styleFilePath)}`);
                    }
                }
            }
        }
        console.log(`Successfully added ${compDef.name}!`);
    }
    catch (error) {
        console.error('Failed to add component:', error.message);
    }
});
