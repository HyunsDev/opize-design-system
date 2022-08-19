import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CodeBlock } from '..';

export default {
    title: 'Opize Component/CodeBlock',
    component: CodeBlock,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CodeBlock>;

const Template: ComponentStory<typeof CodeBlock> = (args) => <CodeBlock {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: JSON.stringify(
        {
            key: 'value',
        },
        null,
        2
    ),
};
