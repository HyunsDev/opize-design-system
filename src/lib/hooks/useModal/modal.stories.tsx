import React from 'react';

import styled from 'styled-components';
import { Button } from '../../components';
import { useModal } from '.';

export default {
    title: 'Hook/useModal',
    argTypes: {},
};

const Divver = styled.div``;

function Template() {
    const modal = useModal();

    return (
        <Divver>
            <Button
                label="Open Modal"
                onClick={() => {
                    modal.open(
                        <>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maxime ipsum
                            praesentium molestias unde velit quas, sunt nesciunt animi, alias tempora. Totam ab
                            voluptatum facere esse accusantium aut laboriosam dignissimos?
                        </>
                    );
                }}
            />
        </Divver>
    );
}

export const Primary = Template.bind({});

function Template2() {
    const modal = useModal();

    return (
        <Divver>
            <Button
                label="Open Modal"
                onClick={() => {
                    modal.open(
                        <>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maxime ipsum
                            praesentium molestias unde velit quas, sunt nesciunt animi, alias tempora. Totam ab
                            voluptatum facere esse accusantium aut laboriosam dignissimos?
                        </>,
                        {
                            title: 'title',
                        }
                    );
                }}
            />
        </Divver>
    );
}

export const WithTitle = Template2.bind({});
