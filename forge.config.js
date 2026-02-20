const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './src/main-page/index.html',
              js: './src/main-page/renderer.ts',
              name: 'main_window',
              preload: {
                js: './src/main-page/preload.ts',
              },
            },
            {
              html: './src/form-page/form.html',
              js: './src/form-page/renderer.ts',
              name: 'form_window',
              preload: {
                js: './src/form-page/preload.ts',
              },
            },
            {
              html: './src/info-page/info.html',
              js: './src/info-page/renderer.ts',
              name: 'info_window',
              preload: {
                js: './src/info-page/preload.ts',
              },
            },
            {
              html: './src/posts-page/posts.html',
              js: './src/posts-page/renderer.ts',
              name: 'posts_window',
              preload: {
                js: './src/posts-page/preload.ts',
              },
            },
            {
              html: './src/message-page/messages.html',
              js: './src/message-page/renderer.ts',
              name: 'messages_window',
              preload: {
                js: './src/message-page/preload.ts',
              },
            },
            {
              html: './src/pop-up/pop-up.html',
              js: './src/pop-up/renderer.ts',
              name: 'add_posts_pop_up',
              preload: {
                js: './src/pop-up/preload.ts',
              },
            }
          ],
        },
      },
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
