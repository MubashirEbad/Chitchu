const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const __DEV__ = process.env.CUSTOM_NODE_ENV === "development";
const __PROD__ = true;
// const __PROD__ = process.env.CUSTOM_NODE_ENV === "production";
const __STAGING__ = process.env.CUSTOM_NODE_ENV === "staging";

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const appIncludes = [
  resolveApp("src"),
  resolveApp("./src/components"),
  resolveApp("./src/assets"),
  resolveApp("./src/utils"),
];

module.exports = function override(config, env) {
  config.mode = "production";
  // console.log(env);
  // console.log(process.env.CUSTOM_NODE_ENV);
  // console.log(config);
  config.module.rules[0].include = appIncludes;
  config.module.rules = config.module.rules.filter(Boolean);
  config.plugins = [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(__DEV__),
      __STAGING__: JSON.stringify(__STAGING__),
      __PROD__: JSON.stringify(__PROD__),
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        CUSTOM_ENV: JSON.stringify("production"),
        API_URL: JSON.stringify("http://10.10.10.10:8080/bands"),
      },
      env: {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        CUSTOM_ENV: JSON.stringify("production"),
      },
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.CUSTOM_NODE_ENV || "development"
      ),
    }),
    ...config.plugins,
  ];

  return config;
};
