import React, { useRef, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Check } from 'phosphor-react';
import { Button, Flex, Text, TextField } from '..';

export default {
    title: 'HTML-Like Component/Button',
    component: Button,
    argTypes: {
        children: {},
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

export const AsA = Template.bind({});
AsA.args = {
    children: 'hello, World!',
    as: 'a',
    href: '/',
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

const AllButtonTemplate: ComponentStory<typeof Button> = (args) => {
    const [text, setText] = useState('Button 버튼');

    return (
        <Flex.Column gap="8px">
            <Flex.Row>
                <TextField label="Children" value={text} onChange={(e) => setText(e.target.value)} />
            </Flex.Row>
            <Flex.Row gap="8px">
                <Text style={{ width: '100px' }}>"contained"</Text>
                <Button variant="contained" color="gray">
                    {text}
                </Button>
                <Button variant="contained" color="blue">
                    {text}
                </Button>
                <Button variant="contained" color="red">
                    {text}
                </Button>
                <Button variant="contained" color="gray" disabled>
                    {text}
                </Button>
                <Button variant="contained" color="blue" disabled>
                    {text}
                </Button>
                <Button variant="contained" color="red" disabled>
                    {text}
                </Button>
                <Button variant="contained" color="gray" isLoading>
                    {text}
                </Button>
                <Button variant="contained" color="blue" isLoading>
                    {text}
                </Button>
                <Button variant="contained" color="red" isLoading>
                    {text}
                </Button>
            </Flex.Row>
            <Flex.Row gap="8px">
                <Text style={{ width: '100px' }}>"default"</Text>
                <Button variant="default" color="gray">
                    {text}
                </Button>
                <Button variant="default" color="blue">
                    {text}
                </Button>
                <Button variant="default" color="red">
                    {text}
                </Button>
                <Button variant="default" color="gray" disabled>
                    {text}
                </Button>
                <Button variant="default" color="blue" disabled>
                    {text}
                </Button>
                <Button variant="default" color="red" disabled>
                    {text}
                </Button>
                <Button variant="default" color="gray" isLoading>
                    {text}
                </Button>
                <Button variant="default" color="blue" isLoading>
                    {text}
                </Button>
                <Button variant="default" color="red" isLoading>
                    {text}
                </Button>
            </Flex.Row>
            <Flex.Row gap="8px">
                <Text style={{ width: '100px' }}>"outlined"</Text>
                <Button variant="outlined" color="gray">
                    {text}
                </Button>
                <Button variant="outlined" color="blue">
                    {text}
                </Button>
                <Button variant="outlined" color="red">
                    {text}
                </Button>
                <Button variant="outlined" color="gray" disabled>
                    {text}
                </Button>
                <Button variant="outlined" color="blue" disabled>
                    {text}
                </Button>
                <Button variant="outlined" color="red" disabled>
                    {text}
                </Button>
                <Button variant="outlined" color="gray" isLoading>
                    {text}
                </Button>
                <Button variant="outlined" color="blue" isLoading>
                    {text}
                </Button>
                <Button variant="outlined" color="red" isLoading>
                    {text}
                </Button>
            </Flex.Row>
            <Flex.Row gap="8px">
                <Text style={{ width: '100px' }}>"gray"</Text>
                <Button variant="text" color="gray">
                    {text}
                </Button>
                <Button variant="text" color="blue">
                    {text}
                </Button>
                <Button variant="text" color="red">
                    {text}
                </Button>
                <Button variant="text" color="gray" disabled>
                    {text}
                </Button>
                <Button variant="text" color="blue" disabled>
                    {text}
                </Button>
                <Button variant="text" color="red" disabled>
                    {text}
                </Button>
                <Button variant="text" color="gray" isLoading>
                    {text}
                </Button>
                <Button variant="text" color="blue" isLoading>
                    {text}
                </Button>
                <Button variant="text" color="red" isLoading>
                    {text}
                </Button>
            </Flex.Row>
        </Flex.Column>
    );
};
export const AllButton = AllButtonTemplate.bind({});
