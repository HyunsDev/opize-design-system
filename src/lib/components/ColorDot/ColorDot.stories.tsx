import { Meta, StoryObj } from '@storybook/react';

import { ColorDot, Flex } from '..';
import { cv } from '../..';

const meta: Meta<typeof ColorDot> = {
    title: 'Opize Component/ColorDot',
    component: ColorDot,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: {
                type: 'text',
            },
        },
        color: {
            control: {
                type: 'select',
            },
            options: [
                'default',
                'background',
                'foreground',
                'red',
                'yellow',
                'green',
                'blue',
                'violet',
            ],
            description:
                '원 색상을 지정합니다. 원하는 색을 입력하거나 Theme 색상 중 하나를 선택할 수 있습니다.',
        },
    },
    args: {
        size: '12px',
        color: 'default',
    },
};
export default meta;

type Story = StoryObj<typeof ColorDot>;

export const Primary: Story = {};

export const Colors: Story = {
    args: {
        size: '12px',
        color: 'default',
    },
    render: (args) => (
        <Flex.Row
            gap="8px"
            style={{
                backgroundColor: cv.default100,
                padding: '8px',
                borderRadius: '999px',
            }}
        >
            <ColorDot {...args} />

            <Flex width="8px" />

            <ColorDot
                {...args}
                color="background"
            />
            <ColorDot
                {...args}
                color="foreground"
            />
            <ColorDot
                {...args}
                color="red"
            />
            <ColorDot
                {...args}
                color="yellow"
            />
            <ColorDot
                {...args}
                color="green"
            />
            <ColorDot
                {...args}
                color="blue"
            />
            <ColorDot
                {...args}
                color="violet"
            />
        </Flex.Row>
    ),
};
