const watch = require('watch');
const build = require('build.js');

watch.watchTree('/src',build);
