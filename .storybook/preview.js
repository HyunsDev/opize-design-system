import React from 'react';
import { OpizeWrapper } from '../src/lib';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

const Link = React.forwardRef((props, ref) => {
    return (
        <a href={props?.to} ref={ref} {...props}>
            {props.children}
        </a>
    );
});

export const decorators = [
    (Story) => (
        <OpizeWrapper initLink={Link}>
            <Story />
        </OpizeWrapper>
    ),
];
