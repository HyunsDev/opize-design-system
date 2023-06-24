import React from 'react';

import styled from 'styled-components';

import { H1, H2, H3 } from '..';

export default {
    title: 'HTML-Like Component/Title',
    argTypes: {},
};

const Titles = styled.div``;

function Template() {
    return (
        <Titles>
            <H1>H1</H1>
            <H2>H2</H2>
            <H3>H3</H3>
        </Titles>
    );
}

export const Primary = Template.bind({});
