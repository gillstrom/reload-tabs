'use strict';
var test = require('ava');
var reloadTabs = require('./');

test('Reload tabs', function (t) {
	t.plan(1);

	reloadTabs(function (err) {
		t.assert(!err, err);
	});
});
