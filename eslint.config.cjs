/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	plugins: ['sonarjs'],
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'plugin:sonarjs/recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
}
