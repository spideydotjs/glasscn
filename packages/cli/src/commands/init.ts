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

      console.log('Initializing glasscn...');

      // Default configuration
      const defaultConfig = {
        style: 'src/glassify.css',
        components: 'src/components/glassify',
        utils: 'src/lib/utils.ts'
      };

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
      if (!tokensRes.ok) throw new Error('Failed to fetch tokens.css');
      const tokensContent = await tokensRes.text();
      await fs.writeFile(path.join(defaultConfig.components, 'tokens.css'), tokensContent);

      const animRes = await fetch(`${REGISTRY_URL}/lib/animations.css`);
      if (!animRes.ok) throw new Error('Failed to fetch animations.css');
      const animContent = await animRes.text();
      await fs.writeFile(path.join(defaultConfig.components, 'animations.css'), animContent);

      const utilsRes = await fetch(`${REGISTRY_URL}/lib/utils.ts`);
      if (!utilsRes.ok) throw new Error('Failed to fetch utils.ts');
      const utilsContent = await utilsRes.text();
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
    } catch (error: any) {
      console.error('Initialization failed:', error.message);
    }
  });
