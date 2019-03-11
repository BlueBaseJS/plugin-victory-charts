<p align="center">
  <h1 style="text-align:center;">BlueBase Storybook Addon</h1>
</p>

## Getting started

### Installation:
```sh
npm i --save-dev @bluebase/storybook-addon
```

### Configuration

```javascript
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { BlueBaseDecorator } from '@bluebase/storybook-addon';

const BRConfigs = require('../bluerain');
addDecorator(BlueBaseDecorator(BRConfigs));

const req = require.context('../src', true, /.stories.tsx$/);
function loadStories() {
	req.keys().forEach((filename) => req(filename));
}
configure(loadStories, module);
```

### Usage

In your story, test a BlueBase component like this:

```typescript
import { BlueBase, BlueBaseConsumer } from '@blueeast/bluerain-os';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';


storiesOf('Some Story', module)
	.add('story', () => (
		<BlueBaseConsumer>
			{(BB: BlueBase) => <BB.Components.SomeComponent title="A nice component" />}
		</BlueBaseConsumer>
	));
```