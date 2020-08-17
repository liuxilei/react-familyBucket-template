module.exports = {
	parser: "babel-eslint",
	env: {
		browser: true,
		es6: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/prop-types": 0,
		"react/display-name": 1,
		"no-unused-vars": 1,
		"no-undef": 0,
	},
};
