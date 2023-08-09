import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Button } from '../../components';

import { useModal } from '.';

const meta: Meta = {
    title: 'Hook/useModal',
};
export default meta;

type Story = StoryObj;

function Template() {
    const modal = useModal();

    return (
        <div>
            <Button
                onClick={() => {
                    modal.open(
                        <>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maxime ipsum praesentium molestias unde velit quas, sunt nesciunt animi,
                            alias tempora. Totam ab voluptatum facere esse accusantium aut
                            laboriosam dignissimos?
                        </>
                    );
                }}
            >
                Open Modal
            </Button>
        </div>
    );
}

export const Primary: Story = {
    render: Template,
};

function Template2() {
    const modal = useModal();

    return (
        <div>
            <Button
                onClick={() => {
                    modal.open(
                        <>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
                            maxime ipsum praesentium molestias unde velit quas, sunt nesciunt animi,
                            alias tempora. Totam ab voluptatum facere esse accusantium aut
                            laboriosam dignissimos?
                        </>,
                        {
                            title: 'title',
                        }
                    );
                }}
            >
                Open Modal
            </Button>
        </div>
    );
}

export const WithTitle: Story = {
    render: Template2,
};
