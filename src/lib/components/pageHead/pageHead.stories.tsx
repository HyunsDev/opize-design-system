import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { PageHead, Button } from '..';

const meta: Meta<typeof PageHead> = {
    title: 'Opize Component/PageHead',
    component: PageHead,
};
export default meta;

type Story = StoryObj<typeof PageHead>;

export const Primary: Story = {
    args: {
        title: 'Title',
        children: (
            <>
                <Button
                    variant="outlined"
                    size="large"
                    onClick={() => null}
                >
                    Button
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => null}
                >
                    Button
                </Button>
            </>
        ),
    },
};
