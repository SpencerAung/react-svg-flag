import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { Flag } from './Flag';

const stories = storiesOf('Test', module);

stories.addDecorator(withKnobs)

stories.add('base', () => {
  const code = text('Country Code', 'US');
  const height = number('Height', 20);
  const width = number('Width', 28);
  const radius = number('Border Radius', 3);
  return (
    <Flag code={ code.toLowerCase() } height={height} width={width} radius={radius} />
  )
})