'use strict';
let MergeTrees = require('broccoli-merge-trees');
//var morecss = require('broccoli-more-css');
let HtmlMin = require('broccoli-htmlmin');
var Jade = require('broccoli-jade');
var Stylus = require('broccoli-stylus');
var Nib = require('nib');

let tree = 'src';

let html = Jade(tree);
html = HtmlMin(html);

let css = Stylus(tree, { use: [Nib]});
//css = morecss(css, {radical: false});

module.exports = MergeTrees([html, css], { overwrite: true });
