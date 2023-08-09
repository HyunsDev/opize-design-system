import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Link } from '..';

const meta: Meta<typeof Link> = {
    title: 'HTML-Like Component/Link',
    component: Link,
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
    args: { to: '/', children: 'This is a Link' },
};
