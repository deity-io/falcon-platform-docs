import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => (
  <Card {...args}>
    <img
      alt="img"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABNtJREFUaEPt21kobV8cB/AvrojMQ5lSpkQe8GDIgzmUUiIPSjdTpBQehGRKyYuSukjxwM1wC8mT5EUUGZIrQ0imKK4hQ138+61/x//gDHufvfYx9F8vxz5nn9/6ffZvrbWzW8dgfn7+ydbWFqamptBHe3p60kc3uL+/x9nZGQy2t7ef6A8vLy9YWVnppXO5O7m4uMDW1haocAYHBwdP5ubm7I2vgFTgyHJzc/Mv0NnZGcoffNZKvjYcHR39B6Rh85mRqnJ/A/ysSHWFUQn8bEhNo04t8LMgtU0pjcCPjtSGo/y1Aj8qUghOMPCjIYXiRAE/ClIMTjTwvZFicToB3wupC05noL6RuuIkAfWFlIKTDJQbKRXHBSgXkgeOG5A3kheOK5AXkieOO1AqkjdOFqCuSDlwsgHFIuXCyQoUipQTJztQG1JunF6A6pD6wOkN+BpJx/p6BivoP3pKiEdTVI1i6esB8/9AHpX78kNU1YLyZRYZTRB9IGWdg0IAQs6RMk1kA4pJXMy5YrGyAHVJWJfvCMFyB0pJVMp31WG5AnkkyCOGMpYbkGdiPGNxAfJMSHH1ecWUDOSViKo5xCO2JCCPBLSthFL70BkotWNtMOXPpfSlE1BKh2JgPJCige+Bk7LwiAIKwT08PODPnz8vCmVsbAxLS8vn9/7+/YuFhQV4enrCzs5Oa1GVY15eXmJnZwc+Pj5wdXXVGlMwUAiOeltcXERQUNCLpBMTEzE+Ps7eGxwcRHZ2Nq6urthxfX09qqqqNCJVxQwPD2cxaUeWppiCgEJxlOWvX79QUVGBnp6e56Stra3h6+uL09NTVrXKykoUFRXhx48fKCsrw8nJCRwcHNQiVcU0MjKCoaEhKHZgYKDamFqBYnCUYXNzM5aWltDb2/sm4ZaWFlRXV7Mtjt++fcPj4yO6u7sRFxfHsHNzc+wCWVhYoLOzE319fRgYGGDnqIpJudXV1aGjowPn5+dvYrq5uWneRiIWR6L8/HxMTU2xbYw0d75//46MjAzY2NigoKAAq6urCA4OxuzsLCIjI5GZmQl/f3/s7+/Dz88PWVlZrLpUcbogxcXFGmPScKchHBoayl6VY1I+3LdyRUVF4fDwEA0NDTg+Pmav7u7umJmZQWxsLMOnpqYiOjqaVYaqtrGxAW9vbzaX0tPT2eJBaJpjNAyFxKR4SUlJ6O/vfxGT+2Y82p9J88PExIQNUUJQFdfW1pCTk4PNzU0cHByw4XR9fc2GY2trK6saNYL9/v2brbI0t6gJiUnf2d3dhZOTE1xcXJ5jct1OeXt7y+YezSmqGrWJiQl2TAtJaWkpA1I1qdHtgoZyTU0NSkpKMDQ0hLS0NDg6OiIkJAQjIyO4u7sTHJOm1Pr6OmJiYlBbW8tivgDqMuderyTx8fHsFjA5OcmuKFWGdhOPjo5ibGwMycnJ+PnzJ+jW0dXVxdDLy8uwt7dn866wsBApKSkICwtDe3s78vLyICZmW1sbW1Gnp6dBt5JnIK8tzTS0cnNz2RCj5uHhgeHhYQQEBLBj6ryxsfH5uigQCQkJrLorKyswMzNDeXk5mpqa2CN+uvBiYtLiFBERwZ6esy3NcmxK39vbYwhaMGihUG60pNOqSfdEwghtYmIqRiPblK74WYFiYRDa4Uc/T/Gzgn8Am9t1cBdwnlAAAAAASUVORK5CYII="
    />
    <h4>Getting started</h4>
    <p>Jump right in and get started with Deity Platform.</p>
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {
  isPadding: true,
  variant: 'vertical'
};
