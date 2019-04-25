import { BlueBase } from '@bluebase/core';
import Plugin from '../../index';

test('Plugin should be correctly registered', async () => {

	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);
	expect(BB.Plugins.has('plugin-victory-charts')).toBeTruthy();
});


test('Plugin should  return plugin victory charts', async () => {
	const plugin = require('../../bluerain-plugin-victory-charts');
	expect(plugin).toBeDefined();
});
test('Plugin should  return plugin victory charts', async () => {

	require('../../components/index.native');
	const plugin = require('../../components/index.ts');
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);

	expect(plugin).toBeDefined();
});

