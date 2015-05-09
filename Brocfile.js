var mergeTrees = require('broccoli-merge-trees');
var morecss = require('broccoli-more-css');
var htmlmin = require('broccoli-htmlmin');
var uglifyjs = require('broccoli-uglify-js')
var pickFiles = require('broccoli-static-compiler');
var jade = require('broccoli-jade');

tree = 'src';

tree = jade(tree);

html = htmlmin(tree);


module.exports = mergeTrees([html], { overwrite: true });
