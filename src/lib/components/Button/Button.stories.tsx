import { useRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Check, Download, Upload } from 'phosphor-react';
import { Button, Flex } from '..';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'HTML-Like Component/Button',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        width: {
            control: {
                type: 'text',
            },
        },
        size: {
            control: {
                type: 'radio',
            },
            options: ['small', 'medium', 'large'],
        },
        variant: {
            control: {
                type: 'select',
            },
            options: ['primary', 'secondary', 'tertiary', 'danger', 'warning', 'warning'],
        },
        shape: {
            control: {
                type: 'radio',
            },
            options: ['square', 'round'],
        },
        align: {
            control: {
                type: 'inline-radio',
            },
            options: ['start', 'center', 'end'],
        },
        disabled: {
            control: {
                type: 'boolean',
            },
        },
        isLoading: {
            control: {
                type: 'boolean',
            },
        },
        prefix: {
            control: {
                type: {
                    name: 'React.ReactNode',
                    required: false,
                },
            },
        },
        suffix: {
            control: {
                type: {
                    name: 'React.ReactNode',
                    required: false,
                },
            },
        },
    },
    args: {
        width: 'fit-content',
        size: 'medium',
        variant: 'primary',
        iconOnly: false,
        shape: 'square',
        align: 'center',
        disabled: false,
        isLoading: false,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'hello, World!',
        onClick: () => null,
    },
};

export const PrefixSuffix: Story = {
    args: {
        prefix: <Upload size={16} />,
        suffix: <Download size={16} />,
        children: 'hello, World!',
        onClick: () => null,
    },
};

export const AsA: Story = {
    args: {
        children: 'hello, World!',
        as: 'a',
        href: '/',
        target: '_blank',
    },
};

const LoadingTemplateComponent = (arg: any) => {
    const [loading, setLoading] = useState(false);
    const timer = useRef<NodeJS.Timeout>();

    const onClick = () => {
        setLoading(true);
        clearInterval(timer.current);
        timer.current = setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <Button
            {...arg}
            onClick={onClick}
            isLoading={loading}
        />
    );
};

export const LoadingStory: Story = {
    name: 'Loading',
    render: LoadingTemplateComponent,
    args: {
        icon: <Check />,
        children: 'Click me!',
        prefix: <Upload size={16} />,
        suffix: <Download size={16} />,
        width: '200px',
    },
};

const AllButtonTemplate = (args: any) => {
    const variants = ['primary', 'secondary', 'tertiary', 'danger', 'warning'];
    const sizes = ['small', 'medium', 'large'];

    return (
        <Flex
            direction="row"
            align="start"
            gap="20px"
        >
            {variants.map((variant) => (
                <Flex
                    direction="column"
                    align="start"
                    justify="start"
                    gap="32px"
                >
                    <Flex
                        direction="column"
                        align="start"
                        gap="8px"
                    >
                        <Button
                            {...args}
                            variant={variant}
                            children={`${variant}`}
                        />
                        <Button
                            {...args}
                            variant={variant}
                            children={`${variant}`}
                            disabled
                        />
                        <Button
                            {...args}
                            variant={variant}
                            children={`${variant}`}
                            isLoading
                        />
                    </Flex>
                </Flex>
            ))}
        </Flex>
    );
};

export const AllButton: Story = {
    name: 'All Button',
    render: AllButtonTemplate,
};
