'use strict';
var applescript = require('applescript').execString;
var eachAsync = require('each-async');

function reload(app, cb) {
	applescript('if application "' + app + '" is running then tell application "' + app + '" to reload tab of every window', function (err) {
		if (err) {
			cb(err);
			return;
		}

		cb();
	});
}

module.exports = function (opts, cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	if (typeof opts !== 'object') {
		cb = opts;
		opts = {};
	}

	var arr = [
		'chrome',
		'chromium'
	];

	if (opts.chrome === false) {
		arr.splice(arr.indexOf('chrome'), 1);
	}

	if (opts.chromium === false) {
		arr.splice(arr.indexOf('chromium'), 1);
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
