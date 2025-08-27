import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const compat = new FlatCompat({ eslintVersion: "9.34.0", recommendedConfig: js.configs.recommended });

export default [
    ...compat.extends("eslint:recommended"),
    ...compat.extends("plugin:react-hooks/recommended"),
    ...compat.extends("plugin:@typescript-eslint/recommended"),
    prettierConfig,
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: { ecmaVersion: "latest", sourceType: "module" },
        plugins: { react: pluginReact, "react-hooks": reactHooks, "@typescript-eslint": tsPlugin, prettier: prettierPlugin },
        rules: {
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "react/prop-types": "off",
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "prettier/prettier": "error"
        },
        settings: { react: { version: "detect" } }
    }
];
