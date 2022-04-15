module.exports = {
    "env": {
        "es2021": true
    },
    "globals" : {
      "__DEV__":"readonly",
    },
    "extends": [
        "eslint:recommended",
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks",
        "prettier"
    ],
    "rules": {
       "prettier/prettier": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps":"warn",
      "react/jsx-filename-extension": [1, {"extensions": [".tsx"] }],
      "import/prefer-default-export": "off",
      "import/extensions" : [
         "error",
         "ignorePackages",
         {
            "ts": "never",
            "tsx": "never",
         }
      ]
   },
   "settings": {
      "import/resolver" : {
         "typescript": {}
      }
   }
}
