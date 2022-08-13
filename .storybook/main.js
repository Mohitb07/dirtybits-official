const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
    };
    return config;
  },
}