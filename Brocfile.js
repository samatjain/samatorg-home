var mergeTrees = require('broccoli-merge-trees');
var morecss = require('broccoli-more-css');
var htmlmin = require('broccoli-htmlmin');
var uglifyjs = require('broccoli-uglify-js')
var pickFiles = require('broccoli-static-compiler');
var jade = require('broccoli-jade');
var stylus = require('broccoli-stylus');
var nib = require('nib');

tree = 'src';

html = jade(tree);
html = htmlmin(html);

css = stylus(tree, { use: [nib]});

module.exports = mergeTrees([html, css], { overwrite: true });
