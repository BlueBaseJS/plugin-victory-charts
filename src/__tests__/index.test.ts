import { BlueBase } from '@bluebase/core';
import Plugin from '../index';

test('Plugin should be correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);
	// plugin  registered
	expect(BB.Plugins.has('plugin-victorychart')).toBeTruthy();
});
