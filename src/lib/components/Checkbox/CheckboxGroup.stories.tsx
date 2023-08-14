import { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxGroup } from '..';

const meta: Meta<typeof CheckboxGroup> = {
    title: 'Opize Component/CheckboxGroup',
    component: CheckboxGroup,
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Primary: Story = {
    args: {
        children: (
            <>
                <Checkbox value={1}>Checkbox 1</Checkbox>
                <Checkbox value={2}>Checkbox 2</Checkbox>
                <Checkbox value={3}>Checkbox 3</Checkbox>
            </>
        ),
        name: 'checkbox-group',
        label: 'Checkbox Group',
    },
};
