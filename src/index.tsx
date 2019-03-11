import './typings';
import { createPlugin,BootOptions } from "@bluebase/core";

import {
	VictoryArea, VictoryAxis, VictoryChart, VictoryGroup,
	VictoryTooltip, VictoryCursorContainer, VictoryBar, VictoryStack, VictoryBrushContainer, VictoryLine, VictoryVoronoiContainer
} from './components';


export default createPlugin({
    name:'VictoryChartsPlugin',
    key: 'charts',
    components:{
        VictoryChart,
		VictoryArea,
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
	filters:{
        'bluebase.boot.end': (bootOptions: BootOptions) =>{
            return bootOptions;
        }
    }
})

