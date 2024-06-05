import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import Badge from '../components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = args => <Badge {...args}>3</Badge>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'green',
  rounded: false
};
