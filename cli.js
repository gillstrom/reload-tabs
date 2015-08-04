#!/usr/bin/env node
'use strict';
var meow = require('meow');
var reloadTabs = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ reload-tabs',
		'',
		'Options',
		'  --no-chrome    Don\'t reload tabs in Chrome',
		'  --no-chromium  Don\'t reload tabs in Chromium'
	]
});

reloadTabs(cli.flags, function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}
});
