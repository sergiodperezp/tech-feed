module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{html,css,js,ico,json,txt,png,jpg,svg}"
  ],
  "swDest": "sw.js",
  "globIgnores": [
    "workbox-cli-config.js",
    "package.json",
    ".babelrc",
    "assets/babel/**",
    "assets/sass/**/*",
    "node_modules/**/**/*"
  ]
};
