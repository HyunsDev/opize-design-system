import React, { useRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Check } from 'phosphor-react';
import styled from 'styled-components';

import { Button, Flex, Text, TextField, Divider } from '..';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'HTML-Like Component/Button',
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
    storyName: 'Loading',
    render: LoadingTemplateComponent,
    args: {
        icon: <Check />,
        children: 'hello, World!',
        width: '200px',
    },
};

export const WithTooltip: Story = {
    storyName: 'With Tooltip',
    args: {
        children: 'hello, World!',
        onClick: () => null,
        tooltip: {
            text: 'ToolTip',
            direction: 'right',
        },
    },
};

// const AllButtonTemplate: ComponentStory<typeof Button> = (args) => {
//     const [text, setText] = useState('Button 버튼');

//     return (
//         <Flex.Column gap="8px">
//             <Flex.Row>
//                 <TextField label="Children" value={text} onChange={(e) => setText(e.target.value)} />
//             </Flex.Row>
//             <Flex.Row gap="8px">
//                 <Text style={{ width: '100px' }}>contained</Text>
//                 <Button variant="contained" color="gray">
//                     {text}
//                 </Button>
//                 <Button variant="contained" color="blue">
//                     {text}
//                 </Button>
//                 <Button variant="contained" color="red">
//                     {text}
//                 </Button>
//                 <Button variant="contained" color="gray" disabled>
//                     {text}
//                 </Button>
//                 <Button variant="contained" color="blue" disabled>
//                     {text}
//                 </Button>
//                 <Button variant="contained" color="red" disabled>
//                     {text}
//                 </Button>
//                 <Button variant="contained" color="gray" isLoading>
//                     {text}
//                 </Button>
//                 <Button variant="contained" color="blue" isLoading>
//                     {text}
//                 </Button>
//                 <Button variant="contained" color="red" isLoading>
//                     {text}
//                 </Button>
//             </Flex.Row>
//             <Flex.Row gap="8px">
//                 <Text style={{ width: '100px' }}>default</Text>
//                 <Button variant="default" color="gray">
//                     {text}
//                 </Button>
//                 <Button variant="default" color="blue">
//                     {text}
//                 </Button>
//                 <Button variant="default" color="red">
//                     {text}
//                 </Button>
//                 <Button variant="default" color="gray" disabled>
//                     {text}
//                 </Button>
//                 <Button variant="default" color="blue" disabled>
//                     {text}
//                 </Button>
//                 <Button variant="default" color="red" disabled>
//                     {text}
//                 </Button>
//                 <Button variant="default" color="gray" isLoading>
//                     {text}
//                 </Button>
//                 <Button variant="default" color="blue" isLoading>
//                     {text}
//                 </Button>
//                 <Button variant="default" color="red" isLoading>
//                     {text}
//                 </Button>
//             </Flex.Row>
//             <Flex.Row gap="8px">
//                 <Text style={{ width: '100px' }}>outlined</Text>
//                 <Button variant="outlined" color="gray">
//                     {text}
//                 </Button>
//                 <Button variant="outlined" color="blue">
//                     {text}
//                 </Button>
//                 <Button variant="outlined" color="red">
//                     {text}
//                 </Button>
//                 <Button variant="outlined" color="gray" disabled>
//                     {text}
//                 </Button>
//                 <Button variant="outlined" color="blue" disabled>
//                     {text}
//                 </Button>
//                 <Button variant="outlined" color="red" disabled>
//                     {text}
//                 </Button>
//                 <Button variant="outlined" color="gray" isLoading>
//                     {text}
//                 </Button>
//                 <Button variant="outlined" color="blue" isLoading>
//                     {text}
//                 </Button>
//                 <Button variant="outlined" color="red" isLoading>
//                     {text}
//                 </Button>
//             </Flex.Row>
//             <Flex.Row gap="8px">
//                 <Text style={{ width: '100px' }}>gray</Text>
//                 <Button variant="text" color="gray">
//                     {text}
//                 </Button>
//                 <Button variant="text" color="blue">
//                     {text}
//                 </Button>
//                 <Button variant="text" color="red">
//                     {text}
//                 </Button>
//                 <Button variant="text" color="gray" disabled>
//                     {text}
//                 </Button>
//                 <Button variant="text" color="blue" disabled>
//                     {text}
//                 </Button>
//                 <Button variant="text" color="red" disabled>
//                     {text}
//                 </Button>
//                 <Button variant="text" color="gray" isLoading>
//                     {text}
//                 </Button>
//                 <Button variant="text" color="blue" isLoading>
//                     {text}
//                 </Button>
//                 <Button variant="text" color="red" isLoading>
//                     {text}
//                 </Button>
//             </Flex.Row>
//         </Flex.Column>
//     );
// };
// export const AllButton = AllButtonTemplate.bind({});
