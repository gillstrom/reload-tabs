import test from 'ava';
import reloadTabs from './';

test('Reload tabs', t => {
	t.plan(1);

	reloadTabs(err => {
		t.assert(!err, err);
	});
});
