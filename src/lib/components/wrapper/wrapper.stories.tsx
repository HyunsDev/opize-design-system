import React, { ReactFragment, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { OpizeWrapper } from '..';

const meta: Meta<typeof OpizeWrapper> = {
    title: 'Opize Component/OpizeWrapper',
    component: OpizeWrapper,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof OpizeWrapper>;
export const Primary: Story = {
    args: {},
};
