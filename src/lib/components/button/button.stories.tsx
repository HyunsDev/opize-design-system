import React, { useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Check } from 'phosphor-react';

import { Button } from '..';

export default {
    title: 'Component/Button',
    component: Button,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'hello, World!',
    onClick: () => null,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
    icon: <Check />,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: <Check />,
    children: 'hello, World!',
};

const LoadingTemplate: ComponentStory<typeof Button> = (args) => {
    const [loading, setLoading] = useState(false);
    const timer = useRef<NodeJS.Timeout>();

    const onClick = () => {
        setLoading(true);
        clearInterval(timer.current);
        timer.current = setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return <Button {...args} onClick={onClick} isLoading={loading} />;
};
export const Loading = LoadingTemplate.bind({});
Loading.args = {
    icon: <Check />,
    children: 'hello, World!',
};
