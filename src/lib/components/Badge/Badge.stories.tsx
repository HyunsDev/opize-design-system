import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { BadgeColor, BadgeVariant, Flex } from '..';

const meta: Meta<typeof Badge> = {
    title: 'Opize Component/Badge',
    component: Badge,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: {
                type: 'inline-radio',
            },
            options: ['small', 'medium', 'large'],
        },
        color: {
            control: {
                type: 'select',
            },
            options: ['default', 'red', 'blue', 'green', 'yellow', 'violet'],
        },
        variant: {
            control: {
                type: 'inline-radio',
            },
            options: ['primary', 'secondary'],
        },
        dot: {
            control: {
                type: 'boolean',
            },
        },
    },
    args: {
        size: 'medium',
        color: 'default',
        variant: 'primary',
        dot: false,
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
    args: {
        children: 'Badge',
    },
};

const dots: boolean[] = [true, false];
const colors: BadgeColor[] = ['default', 'red', 'blue', 'green', 'yellow', 'violet'];
const variants: BadgeVariant[] = ['primary', 'secondary'];

export const AllBadges: Story = {
    render: (args) => (
        <Flex.Row gap="8px">
            {colors.map((color) => (
                <Flex.Column gap="20px">
                    {variants.map((variant) => (
                        <Flex.Column gap="8px">
                            {dots.map((dot) => (
                                <Badge
                                    {...args}
                                    color={color}
                                    variant={variant}
                                    dot={dot}
                                >
                                    {color}
                                </Badge>
                            ))}
                        </Flex.Column>
                    ))}
                </Flex.Column>
            ))}
        </Flex.Row>
    ),
};
