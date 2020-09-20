module.exports = {
  root: true,
  extends: "@react-native-community",

  rules: {
    "prettier/prettier": "error",
    "comma-dangle": 0,
    "react-native/no-inline-styles": 0,
    quotes: [1, "double", "avoid-escape"],
    "consistent-this": 0,
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 0,
    "no-debugger": 0,
    radix: 0,
    "no-var": 1,
  },
};
