import './typings';
import { createPlugin } from '@bluebase/core';

import {
	VictoryArea, VictoryAxis, VictoryChart, VictoryGroup,
	VictoryTooltip, VictoryCursorContainer, VictoryBar, VictoryStack, VictoryBrushContainer, VictoryLine, VictoryVoronoiContainer
} from './components';


export default createPlugin({
	name: '@bluebase/plugin-victory-charts',
	key: 'plugin-victory-charts',
	components: {
		VictoryArea,
		VictoryChart,
		VictoryGroup,
		VictoryTooltip,
		VictoryCursorContainer,
		VictoryBrushContainer,
		VictoryAxis,
		VictoryBar,
		VictoryStack,
		VictoryLine,
		VictoryVoronoiContainer
	},
});

