import { CodeBlock, Modal, useModal } from '../..';

function CodeModalComponent({
    code,
    title,
    language,
}: {
    code: string;
    title?: string;
    language?: string;
}) {
    return (
        <Modal>
            <Modal.Header>{title}</Modal.Header>
            <Modal.Content>
                <CodeBlock
                    language={language || 'json'}
                    showHeader={false}
                >
                    {code}
                </CodeBlock>
            </Modal.Content>
        </Modal>
    );
}

export function useCodeModal() {
    const modal = useModal();

    const open = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        code: any,
        options?: {
            title?: string;
            language?: string;
            stringify?: boolean;
        }
    ) => {
        modal.open(
            <CodeModalComponent
                code={options?.stringify ? JSON.stringify(code, null, 4) : String(code)}
                title={options?.title}
                language={options?.language}
            />
        );
    };

    return {
        open,
    };
}
