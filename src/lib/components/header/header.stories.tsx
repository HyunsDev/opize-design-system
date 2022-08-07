import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';

import { HeaderNav } from './headerNav';
import styled from 'styled-components';
import { ActionMenu } from '../actionMenu';

import Logo from '../../../assets/opize.png'
import { HeaderSubMenu } from './headerSubMenu';

export default {
  title: 'Component/Header',
  argTypes: {
  },
  fullscreen: true
};

const ProfileImg = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 28px;
`

const Void = styled.div`
  height: 2000px;
  width: 100%;
`

const Template = () => (<>
  <HeaderNav>
    <HeaderNav.Left>
      <HeaderNav.Logo src={Logo} to='/' />
    </HeaderNav.Left>

    <HeaderNav.Right>
    <HeaderNav.Button onClick={() => null}>Button2</HeaderNav.Button>
      <HeaderNav.Button onClick={() => null}>Button</HeaderNav.Button>
      <ActionMenu icon={<ProfileImg src={Logo} alt='' />} actions={[
        [
          {
            label: 'label',
            onClick: () => null
          }
        ]
      ]}  />
    </HeaderNav.Right>
  </HeaderNav>
  <HeaderSubMenu selected='a' menu={{
    a: {
      text: 'Tab A',
      onClick: () => null
    }, 
    b: {
      text: 'Tab B',
      onClick: () => null
    }
  }} />
  <Void />
</>);

export const Primary: Story = Template.bind({});
Primary.parameters = {
  layout: 'fullscreen'
}