import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import { H1, H2, H3 } from '..';


export default {
  title: 'Component/Title',
  argTypes: {

  },
};

const Titles = styled.div`
    
`

const Template = () => <Titles>
    <H1>H1</H1>
    <H2>H2</H2>
    <H3>H3</H3>
</Titles>;

export const Primary = Template.bind({});