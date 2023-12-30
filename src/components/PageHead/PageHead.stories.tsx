import { Meta, StoryObj } from '@storybook/react';

import { PageHead, Button } from '..';

const meta: Meta<typeof PageHead> = {
    title: 'Opize Component/PageHead',
    component: PageHead,
    tags: ['autodocs'],
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
                    size="medium"
                    onClick={() => null}
                >
                    Button
                </Button>
                <Button
                    variant="primary"
                    size="medium"
                    onClick={() => null}
                >
                    Button
                </Button>
            </>
        ),
    },
};
