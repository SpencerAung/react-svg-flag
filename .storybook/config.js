import { configure, addDecorator } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'

addDecorator(checkA11y)

function loadStories() {
  // automatically import all files ending in *.stories.js
  const req = require.context('../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)
