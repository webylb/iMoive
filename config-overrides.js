const path = require('path')
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true
	}),
	addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
	}),
	addWebpackAlias({
		'@': path.resolve(__dirname, './src'),
		'@components': path.resolve(__dirname, './src/components'),
		'@pages': path.resolve(__dirname, './src/pages'),
		'@utils': path.resolve(__dirname, './src/utils'),
		'@containers': path.resolve(__dirname, './src/containers')
	})
)