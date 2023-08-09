import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageHead, Button } from '..';

export default {
    title: 'Opize Component/PageHead',
    component: PageHead,
    argTypes: {},
} as ComponentMeta<typeof PageHead>;

const Template: ComponentStory<typeof PageHead> = (args) => <PageHead {...args} />;

export const Primary = Template.bind({});
Primary.args = {
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
};
