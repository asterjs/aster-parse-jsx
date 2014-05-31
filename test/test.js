/* global describe, it */

'use strict';

var assert = require('chai').assert,
	Rx = require('rx'),
	parseJSX = require('..'),
	compile = require('jsx-esprima').compile,
	generate = require('escodegen').generate;

it('test', function (done) {
	var input = [{path: 'file.jsx', contents: 'a = <A attr="value">text</A>;'}],
		expected = ['a = A({ attr: \'value\' }, \'text\');'];

	// simulating file sequence and applying transformation
	parseJSX({loc: false})(Rx.Observable.fromArray(input))
	// generate JS from each transpiled AST
	.pluck('program')
	.map(generate)
	// and compare with expected
	.zip(expected, assert.equal)
	// subscribing to check results
	.subscribe(function () {}, done, done);
});
