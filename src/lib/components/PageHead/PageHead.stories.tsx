import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { PageHead, Button } from '..';

const meta: Meta<typeof PageHead> = {
    title: 'Opize Component/PageHead',
    component: PageHead,
    parameters: {
        layout: 'fullscreen',
    },
};
export default meta;

type Story = StoryObj<typeof PageHead>;

export const Primary: Story = {
    args: {
        title: 'Title',
        children: (
            <>
                <Button
                    variant="secondary"
                    size="large"
                    onClick={() => null}
                >
                    Button
                </Button>
                <Button
                    variant="primary"
                    size="large"
                    onClick={() => null}
                >
                    Button
                </Button>
            </>
        ),
    },
};
