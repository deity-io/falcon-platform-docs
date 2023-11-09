import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Badge from '../components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => <Badge {...args}>3</Badge>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'green',
  rounded: false
};
