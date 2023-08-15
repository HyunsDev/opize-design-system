import { StoryObj, Meta } from '@storybook/react';
import { Avatar, SimpleHeader, Spacer } from '..';

const meta: Meta<typeof SimpleHeader> = {
    title: 'Opize Component/SimpleHeader',
    component: SimpleHeader,
    parameters: {
        layout: 'fullscreen',
    },
};
export default meta;

type Story = StoryObj<typeof SimpleHeader>;

export const Primary: Story = {
    render: (args) => (
        <>
            <SimpleHeader {...args}>
                <SimpleHeader.Left>
                    <Avatar src={'https://avatars.githubusercontent.com/u/46562466?v=4'} />
                </SimpleHeader.Left>
                <SimpleHeader.Right>
                    <SimpleHeader.A>Button2</SimpleHeader.A>
                    <SimpleHeader.A>Button</SimpleHeader.A>
                </SimpleHeader.Right>
            </SimpleHeader>
            <Spacer
                width="100%"
                height="120vh"
            />
        </>
    ),
};
