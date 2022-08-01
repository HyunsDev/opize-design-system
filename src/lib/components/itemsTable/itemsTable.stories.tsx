import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ItemsTable } from '.';
import { Gear, UserCircle, X } from 'phosphor-react';


export default {
  title: 'Library/ItemsTable',
  component: ItemsTable,
  argTypes: {
  },
} as ComponentMeta<typeof ItemsTable>;

const Template: ComponentStory<typeof ItemsTable> = (args) => <ItemsTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [
    [
      {
        type: 'avatar',
        icon: <UserCircle />,
        name: 'name',
        label: 'label'
      }, {
        type: 'text',
        text: 'text',
        subText: 'subText'
      }, {
        type: 'status',
        status: 'good',
        label: 'label'
      }, {
        type: 'buttons',
        button: [
          [
            {
              label: 'label',
              icon: <Gear />,
              onClick: () => null
            }
          ], [
            {
              label: 'delete',
              icon: <X />,
              onClick: () => null,
              color: 'red'
            }
          ]
        ]
      }
    ], [
      {
        type: 'avatar',
        icon: <UserCircle />,
        name: 'name',
        label: 'label'
      }, {
        type: 'text',
        text: 'https://design.opize.me',
        subText: 'subText'
      }, {
        type: 'status',
        status: 'good',
        label: 'label'
      }, {
        type: 'buttons',
        button: [
          [
            {
              label: 'label',
              icon: <Gear />,
              onClick: () => null
            }
          ], [
            {
              label: 'delete',
              icon: <X />,
              onClick: () => null,
              color: 'red'
            }
          ]
        ]
      }
    ]
  ]
};