import { DotsThreeVertical } from 'phosphor-react';
import {
    A,
    Avatar,
    Box,
    Button,
    CodeBlock,
    Flex,
    H2,
    ItemsTable,
    Menu,
    PageLayout,
    PaneList,
    Table,
    Text,
} from '../../../..';
import OpizeLogo from '../../assets/opize-logo.png';

export const PageContent = () => {
    return (
        <PageLayout panePosition="left">
            <PageLayout.Pane>
                <PaneList>
                    <PaneList.Item selected>Item 1</PaneList.Item>
                    <PaneList.Item>Item 2</PaneList.Item>
                    <PaneList.Item>Item 3</PaneList.Item>
                    <PaneList.Item>Item 4</PaneList.Item>
                    <PaneList.Item>Item 5</PaneList.Item>
                </PaneList>
            </PageLayout.Pane>
            <PageLayout.Content>
                <Flex.Column gap="32px">
                    <ItemsTable>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <ItemsTable.Row key={index}>
                                <ItemsTable.Row.Avatar
                                    icon={
                                        <Avatar
                                            src={OpizeLogo}
                                            size="32px"
                                        />
                                    }
                                    name={`Opize User ${index}`}
                                    label="hello@opize.me"
                                />
                                <ItemsTable.Row.Menu>
                                    <Menu.Option>Option 1</Menu.Option>
                                    <Menu.Option>Option 2</Menu.Option>
                                    <Menu.Option>Option 3</Menu.Option>
                                </ItemsTable.Row.Menu>
                            </ItemsTable.Row>
                        ))}
                    </ItemsTable>
                    <Flex.Column>
                        <Box
                            title="Box Title"
                            footer={
                                <>
                                    <Text>
                                        Box Footer Components <A>Link</A>
                                    </Text>
                                    <Button>Button</Button>
                                </>
                            }
                        >
                            Box Content
                        </Box>
                    </Flex.Column>
                    <Flex.Column gap="8px">
                        <H2>Table</H2>
                        <Table>
                            <Table.Head>
                                <Table.Row>
                                    <Table.Column>Column 1</Table.Column>
                                    <Table.Column>Column 2</Table.Column>
                                    <Table.Column align="right">Column 3</Table.Column>
                                </Table.Row>
                            </Table.Head>
                            <Table.Body>
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>Cell {index}</Table.Cell>
                                        <Table.Cell>Cell {index}</Table.Cell>
                                        <Table.Cell align="right">
                                            <Menu>
                                                <Menu.Trigger
                                                    variant="tertiary"
                                                    size="small"
                                                    shape="round"
                                                    iconOnly
                                                >
                                                    <DotsThreeVertical />
                                                </Menu.Trigger>
                                                <Menu.Content>
                                                    <Menu.Option>Option 1</Menu.Option>
                                                    <Menu.Option>Option 1</Menu.Option>
                                                    <Menu.Option>Option 1</Menu.Option>
                                                </Menu.Content>
                                            </Menu>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Flex.Column>
                    <CodeBlock>{'a'.repeat(200)}</CodeBlock>
                </Flex.Column>
            </PageLayout.Content>
        </PageLayout>
    );
};
