import { Meta, StoryObj } from '@storybook/react';

import { Span, Text } from '..';
import { cv } from '../..';

const meta: Meta<typeof Span> = {
    title: 'HTML-Like Component/Span',
    component: Span,
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Span>;

export const Primary: Story = {
    args: {
        children: 'Span',
        color: cv.red,
    },
    render: (args) => (
        <Text>
            This is <Span {...args} /> Component
        </Text>
    ),
};
