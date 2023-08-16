import { StoryObj, Meta } from '@storybook/react';
import { Avatar, Header, Spacer } from '..';

const meta: Meta<typeof Header> = {
    title: 'Opize Component/Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    render: (args) => (
        <>
            <Header {...args}>
                <Header.Nav>
                    <Header.Nav.Left>
                        <Avatar src={'https://avatars.githubusercontent.com/u/46562466?v=4'} />
                    </Header.Nav.Left>
                    <Header.Nav.Right>
                        <Header.Nav.A>Button2</Header.Nav.A>
                        <Header.Nav.A>Button</Header.Nav.A>
                    </Header.Nav.Right>
                </Header.Nav>
                <Header.Menu
                    tabs={[
                        {
                            title: 'Tab1',
                            onClick: () => null,
                            value: 'Tab1',
                        },
                        {
                            title: 'Tab2',
                            onClick: () => null,
                            value: 'Tab2',
                        },
                        {
                            title: 'Tab3',
                            onClick: () => null,
                            value: 'Tab3',
                        },
                    ]}
                    selected="Tab1"
                />
            </Header>
            <Spacer
                width="100%"
                height="100vh"
            />
        </>
    ),
};
