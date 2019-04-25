import {
	VictoryArea,
	VictoryAxis,
	VictoryBar,
	VictoryBrushContainer,
	VictoryChart,
	VictoryCursorContainer,
	VictoryGroup,
	VictoryLine,
	VictoryStack,
	VictoryTooltip,
	VictoryVoronoiContainer

} from './components';

import { createPlugin } from '@bluebase/core';



export default createPlugin({
	components: {
		VictoryArea,
		VictoryAxis,
		VictoryBar,
		VictoryBrushContainer,
		VictoryChart,
		VictoryCursorContainer,
		VictoryGroup,
		VictoryLine,
		VictoryStack,
		VictoryTooltip,
		VictoryVoronoiContainer
	},
	key: 'plugin-victory-charts',
	name: '@bluebase/plugin-victory-charts',

});

