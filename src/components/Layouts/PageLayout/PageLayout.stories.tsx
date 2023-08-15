import { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import { PageLayout } from '../..';

const meta: Meta<typeof PageLayout> = {
    title: 'Opize Component/Layout/PageLayout',
    tags: ['autodocs'],
    component: PageLayout,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        gutter: {
            control: {
                type: 'text',
            },
        },
        gap: {
            control: {
                type: 'text',
            },
        },
        width: {
            control: {
                type: 'text',
            },
        },
        minHeight: {
            control: {
                type: 'text',
            },
        },
        backgroundColor: {
            control: {
                type: 'color',
            },
        },
        panePosition: {
            control: {
                type: 'radio',
            },
            options: ['left', 'right'],
        },
    },
    args: {
        width: '1200px',
        panePosition: 'left',
        gap: '20px',
        gutter: '24px',
    },
};
export default meta;

type Story = StoryObj<typeof PageLayout>;

const Blank = styled.div<{ $height: number }>`
    background-color: #363636;
    width: 100%;
    color: #ffffff;
    height: ${(props) => props.$height}px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Primary: Story = {
    args: {},
    render: (args) => (
        <PageLayout {...args}>
            <PageLayout.Pane>
                <Blank $height={500}>PageLayout.Pane</Blank>
            </PageLayout.Pane>
            <PageLayout.Content>
                <Blank $height={500}>PageLayout.Content</Blank>
            </PageLayout.Content>
        </PageLayout>
    ),
};
