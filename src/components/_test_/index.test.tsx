import { BlueBase } from '@bluebase/core';
import Plugin from '../../index';

test('Plugin should be correctly registered', async () => {

	require('../../components/index.native');
	require('../../components/index');
	require('../../bluerain-plugin-victory-charts');

	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);

	expect(BB.Plugins.has('plugin-victory-charts')).toBeTruthy();
});


