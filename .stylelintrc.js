module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  extends: ["stylelint-config-recommended"],
  // 監視を除外するファイル
  ignoreFiles: ["**/*.svg", "dist/**/*", ".dist/**/*"],
  defaultSeverity: "warning",
  // defaultSeverity: "Error",
  rules: {
    "declaration-empty-line-before": null,
    "no-descending-specificity": null
  }
};
