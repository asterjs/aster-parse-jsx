'use strict';

var jsx = require('jsx-esprima');

module.exports = function (options) {
	options = options || {};

	var loc = options.loc !== false;
	var attachComment = options.comments !== false;

	return function (files) {
		return files.map(function (file) {
			var ast = jsx.parse(file.contents, {loc: loc, source: file.path, attachComment: attachComment});

			return {
				type: 'File',
				program: jsx.transform(ast),
				loc: {
					source: file.path
				}
			};
		});
	};
};
