const withTypescript = require('@zeit/next-typescript');
/* eslint-disable */
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');

// // Where your antd-custom.less file lives
// const themeVariables = lessToJS(
// 	fs.readFileSync(
// 		path.resolve(__dirname, './assets/antd-custom.less'),
// 		'utf8',
// 	),
// );

// // fix: prevents error when .less files are required by node
// if (typeof require !== 'undefined') {
// 	require.extensions['.less'] = file => {};
// }

// module.exports = withTypescript(
// 	withLess({
// 		useFileSystemPublicRoutes: false,
// 		lessLoaderOptions: {
// 			javascriptEnabled: true,
// 			modifyVars: themeVariables, // make your antd custom effective
// 		},
// 	}),
// );

const withCSS = require('@zeit/next-css');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
	// eslint-disable-next-line
	require.extensions['.css'] = file => {};
}

module.exports = withCSS(
	withTypescript({
		useFileSystemPublicRoutes: false,
	})
);
