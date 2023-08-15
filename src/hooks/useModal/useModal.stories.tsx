import { Meta, StoryObj } from '@storybook/react';

import { Button, Modal, Spacer, Text } from '../../components';

import { useModal } from '..';
import { cv } from '../..';

const meta: Meta = {
    title: 'Hooks/useModal',
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj;

function Template() {
    const modal = useModal();
    const open = () => {
        modal.open(<Text>Modal</Text>);
    };

    return <Button onClick={open}>Open Modal</Button>;
}

export const Primary: Story = {
    render: Template,
};

function ScrollTemplate() {
    const modal = useModal();
    const open = () => {
        modal.open(
            <Spacer
                width="400px"
                height="1200px"
                backgroundColor={cv.foreground}
                color={cv.background}
            >
                Modal
            </Spacer>
        );
    };

    return <Button onClick={open}>Open Modal</Button>;
}

export const Scroll: Story = {
    render: ScrollTemplate,
};

function WithModalTemplate() {
    const modal = useModal();
    const open = () => {
        modal.open(
            <Modal>
                <Modal.Header>Header</Modal.Header>
                <Modal.Content>Content</Modal.Content>
                <Modal.Footer>
                    <Button>Footer</Button>
                </Modal.Footer>
            </Modal>
        );
    };

    return <Button onClick={open}>Open Modal</Button>;
}

export const WithModal: Story = {
    render: WithModalTemplate,
};
