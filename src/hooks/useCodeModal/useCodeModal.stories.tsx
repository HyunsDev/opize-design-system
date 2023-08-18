import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../components';

import { useCodeModal } from '..';

const meta: Meta = {
    title: 'Hooks/useCodeModal',
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj;

function Template() {
    const codeModal = useCodeModal();
    const open = () => {
        codeModal.open(`<Text>Modal</Text>`, {
            title: 'Modal',
            language: 'jsx',
            stringify: false,
        });
    };

    return <Button onClick={open}>Open Modal</Button>;
}

export const Primary: Story = {
    render: Template,
};
