import { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './components/header';
import { PagePageHead } from './components/head';
import { PageContent } from './components/Content';
import { PageFooter } from './components/footer';

const meta: Meta = {
    title: 'Example/page2',
    parameters: {
        layout: 'fullscreen',
    },
};
export default meta;

type Story = StoryObj;

const Page = () => {
    return (
        <>
            <PageHeader />
            <PagePageHead />
            <PageContent />
            <PageFooter />
        </>
    );
};

export const Primary: Story = {
    args: {},
    render: Page,
};
