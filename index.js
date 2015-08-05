'use strict';
var applescript = require('applescript').execString;
var eachAsync = require('each-async');
var appPath = require('app-path');

function reload(app, cb) {
	appPath(app, function (err) {
		if (err) {
			cb();
			return;
		}

		applescript('if application "' + app + '" is running then tell application "' + app + '" to reload tab of every window', function (err) {
			if (err) {
				cb(err);
				return;
			}

			cb();
		});
	});
}

module.exports = function (opts, cb) {
	var arr = [];

	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	if (typeof opts !== 'object') {
		cb = opts;
		opts = {};
	}

	if (opts.chrome !== false) {
		arr.push('Google Chrome');
	}

	if (opts.chromium !== false) {
		arr.push('Chromium');
	}

	eachAsync(arr, function (item, index, done) {
		reload(item, function (err) {
			if (err) {
				done(err);
				return;
			}

			done();
		});
	}, function (err) {
		if (err) {
			cb(err);
			return;
		}

		cb();
	});
};
