const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.mdx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links',
  {
    name: '@storybook/addon-docs',
    options: {
      vueDocgenOptions: {
        alias: {
          '@': path.resolve(__dirname, '../'),
        },
      },
    },
  }],
};