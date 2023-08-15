import { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, Radio } from '../..';

const meta: Meta<typeof RadioGroup> = {
    title: 'HTML-Like Component/Radio',
    component: RadioGroup,
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
    args: {
        children: (
            <>
                <Radio value="1">Radio 1</Radio>
                <Radio value="2">Radio 2</Radio>
            </>
        ),
        name: 'radio',
    },
};
