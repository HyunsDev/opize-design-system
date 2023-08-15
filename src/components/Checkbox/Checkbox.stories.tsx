import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '..';

const meta: Meta<typeof Checkbox> = {
    title: 'HTML-Like Component/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
    args: {
        children: 'Checkbox',
    },
};

export const WithLabel: Story = {
    args: {
        children: 'Checkbox',
        label: 'Checkbox Label',
    },
};
