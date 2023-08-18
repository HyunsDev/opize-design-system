import { Meta, StoryObj } from '@storybook/react';

import { Flex, KBD } from '..';

const meta: Meta<typeof KBD> = {
    title: 'HTML-Like Component/KBD',
    component: KBD,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof KBD>;

export const Primary: Story = {
    args: {
        children: 'A',
        ctrl: true,
    },
};

export const AllSubKeys: Story = {
    render: (args) => (
        <Flex.Row gap="8px">
            <KBD
                {...args}
                meta
            />
            <KBD
                {...args}
                shift
            />
            <KBD
                {...args}
                alt
            />
            <KBD
                {...args}
                ctrl
            />
        </Flex.Row>
    ),
};
