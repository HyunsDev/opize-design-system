import React, { useRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Check } from 'phosphor-react';
import { Button } from '..';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'HTML-Like Component/Button',
    argTypes: {
        width: {
            control: {
                type: 'text',
            },
        },
        size: {
            control: {
                type: 'select',
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
                type: 'select',
            },
            options: ['square', 'round'],
        },
        align: {
            control: {
                type: 'select',
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
        width: 'auto',
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

export const WithIcon: Story = {
    args: {
        icon: <Check />,
        children: 'hello, World!',
        onClick: () => null,
    },
};

export const AsA: Story = {
    args: {
        children: 'hello, World!',
        as: 'a',
        href: '/',
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
        children: 'hello, World!',
        width: '200px',
    },
};

export const WithTooltip: Story = {
    name: 'With Tooltip',
    args: {
        children: 'hello, World!',
        onClick: () => null,
        tooltip: {
            text: 'ToolTip',
            direction: 'right',
        },
    },
};
