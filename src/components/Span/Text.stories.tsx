import { Meta, StoryObj } from '@storybook/react';

import { Span, Text } from '..';
import { cv } from '../..';

const meta: Meta<typeof Span> = {
    title: 'HTML-Like Component/Span',
    component: Span,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Span>;

export const Primary: Story = {
    args: {
        children: 'Span',
        color: cv.statusRed,
    },
    render: (args) => (
        <Text>
            This is <Span {...args} /> Component
        </Text>
    ),
};
