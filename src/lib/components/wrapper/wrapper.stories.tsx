import React, { ReactFragment, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OpizeWrapper, Button } from '..';

export default {
    title: 'Opize Component/OpizeWrapper',
    component: OpizeWrapper,
    argTypes: {},
} as ComponentMeta<typeof OpizeWrapper>;

const Template: ComponentStory<typeof OpizeWrapper> = (args) => <OpizeWrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

const Link = React.forwardRef<HTMLAnchorElement, { to?: string; children: React.ReactNode }>((props, ref) => {
    return (
        <a href={props?.to} ref={ref} {...props}>
            {props.children}
        </a>
    );
});

const WithInitLinkTemplate: ComponentStory<typeof OpizeWrapper> = (args) => {
    return (
        <OpizeWrapper initLink={Link} {...args}>
            <Button to="/">Link</Button>
        </OpizeWrapper>
    );
};

export const WithInitLink = WithInitLinkTemplate.bind({});
Primary.args = {};
