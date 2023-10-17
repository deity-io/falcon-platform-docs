import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  variant: 'contained',
  size: 'large',
  disabled: false
};
