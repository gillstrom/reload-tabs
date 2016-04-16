#!/usr/bin/env node
'use strict';
const meow = require('meow');
const reloadTabs = require('./');

const cli = meow({
	help: [
		'Usage',
		'  $ reload-tabs',
		'',
		'Options',
		'  --no-chrome    Don\'t reload tabs in Chrome',
		'  --no-chromium  Don\'t reload tabs in Chromium'
	]
});

reloadTabs(cli.flags);
