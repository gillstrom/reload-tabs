'use strict';
const applescript = require('applescript').execString;
const appPath = require('app-path');
const pify = require('pify');

const reload = app => appPath(app)
	.then(() => pify(applescript)(`if application "${app}" is running then tell application "${app}" to reload tab of every window`))
	.catch(err => {
		if (/Couldn't find the app/.test(err.message)) {
			return;
		}

		throw err;
	});

module.exports = opts => {
	opts = opts || {};
	const arr = [];

	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X systems are supported'));
	}

	if (opts.chrome !== false) {
		arr.push('Google Chrome');
	}

	if (opts.chromium !== false) {
		arr.push('Chromium');
	}

	return Promise.all(arr.map(x => reload(x)));
};
