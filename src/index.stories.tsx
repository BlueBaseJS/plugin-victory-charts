
import * as React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import storiesOf, { BlueRainDecorator, bluerainStory } from '@blueeast/bluerain-storybook-addon';
//import { BlueRain } from '@blueeast/bluerain-os';
// import { boolean, number, text, withKnobs } from '@storybook/addon-knobs/react';
import { VictoryChart, VictoryBar, VictoryTooltip, VictoryStack, VictoryArea, VictoryBrushContainer, VictoryVoronoiContainer, VictoryLine, VictoryAxis } from './components'
// Add BlueRain
// tslint:disable-next-line:no-var-requires
import BR from '@blueeast/bluerain-os';

// const BR = require('../bluerain');
// tslint:disable-next-line:no-var-requires
BR.Plugins.add(require('./index'));


storiesOf(' VictoryChart ', module)
	.add('Victor Chart with tooltip and vector bar', () => {

		return (
			<VictoryChart
				domain={{ x: [0, 11], y: [-10, 10] }}
			>
				<VictoryBar
					labelComponent={<VictoryTooltip />}
					data={[
						{ x: 2, y: 5, label: "right-side-up" },
						{ x: 4, y: -6, label: "upside-down" },
						{ x: 6, y: 4, label: "tiny" },
						{ x: 8, y: -5, label: "or a little \n BIGGER" },
						{ x: 10, y: 7, label: "automatically" }
					]}
					style={{
						data: { fill: "tomato", width: 20 }
					}}
				/>
			</VictoryChart>

		);
	});




storiesOf(' VictoryChart ', module)

	.add('VictoryVoronoiContainer', () => {

		return (
			<VictoryChart domainPadding={{ y: 10 }}
				containerComponent={
					<VictoryVoronoiContainer
						labels={(d) => `${2}, ${3}`}
					/>
				}
			>
				<VictoryLine
					y={(datum) => Math.sin(2 * Math.PI * datum.x)}
				/>
			</VictoryChart>

		);
	});



storiesOf(' VictoryChart ', module)

	.add('VictoryArea', () => {

		return (
			<VictoryStack>
				<VictoryArea
					style={{ data: { fill: "#c43a31" } }}
					data={[{ x: "a", y: 2 }, { x: "b", y: 3 }, { x: "c", y: 5 }]}
				/>
			</VictoryStack>
		);
	});






storiesOf(' VictoryChart ', module)


	.add('VictoryBrushContainer', () => {

		return (
			<VictoryChart
				containerComponent={
					<VictoryBrushContainer
						brushDimension="x"
						brushDomain={{ x: [0.1, 0.3] }}
					/>
				}
			>
				<VictoryLine />
			</VictoryChart>
		);
	});


storiesOf(' VictoryChart ', module)

	.add('VictoryAxis', () => {

		return (
			<VictoryAxis />
		);
	});