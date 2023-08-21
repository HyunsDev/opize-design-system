import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { PaneList } from '..';

const meta: Meta<typeof PaneList> = {
    title: 'Opize Component/PaneList',
    component: PaneList,
};
export default meta;

type Story = StoryObj<typeof PaneList>;

export const Primary: Story = {
    args: {},
    render: (args) => (
        <PaneList {...args}>
            <PaneList.Item
                selected
                href="/"
            >
                Item
            </PaneList.Item>
            <PaneList.Item href="/">Item</PaneList.Item>
            <PaneList.Item href="/">Item</PaneList.Item>
        </PaneList>
    ),
};

const StickyDiv = styled.div`
    position: relative;
    max-width: 300px;
    margin: 0 auto;
    padding: 16px;
    min-height: 200dvh;
`;

export const Sticky: Story = {
    args: {
        isSticky: true,
    },
    render: (args) => (
        <StickyDiv>
            <PaneList {...args}>
                <PaneList.Item
                    selected
                    href="/"
                >
                    Item
                </PaneList.Item>
                <PaneList.Item href="/">Item</PaneList.Item>
                <PaneList.Item href="/">Item</PaneList.Item>
            </PaneList>
        </StickyDiv>
    ),
};
