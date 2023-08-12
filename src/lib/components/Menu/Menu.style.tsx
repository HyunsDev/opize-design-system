import { styled } from 'styled-components';
import { MenuOptionProps, cv } from '../..';

interface StyledButtonProps {
    $variant: MenuOptionProps['variant'];
}

const getVariantStyle = ({ $variant }: StyledButtonProps) => {
    switch ($variant) {
        case 'danger':
            return `
                background-color: ${cv.background};
                color: ${cv.red};

                &:hover {
                    background-color: ${cv.red_background};
                }

                &:active {
                    background-color: ${cv.red_background};
                }

                &:disabled {
                    color: ${cv.red_background};
                    --button-spinner-color: ${cv.red_background};
                    background-color: ${cv.background};

                    $:hover {
                        background-color: ${cv.background};
                    }

                    &:active {
                        background-color: ${cv.background};
                    }

                }
            `;
        default:
            return `
                background-color: ${cv.background};
                color: ${cv.foreground};

                &:hover {
                    background-color: ${cv.default100};
                }

                &:active {
                    background-color: ${cv.default200};
                }

                &:disabled {
                    color: ${cv.default400};
                    --button-spinner-color: ${cv.default700};
                    background-color: ${cv.background};

                    $:hover {
                        background-color: ${cv.background};
                    }

                    &:active {
                        background-color: ${cv.background};
                    }
                }
            `;
    }
};

export const StyledOption = styled.button<StyledButtonProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    min-width: 180px;
    width: 100%;
    border-radius: 8px;

    font-size: 14px;
    padding: 6px 12px;
    height: 32px;

    cursor: pointer;
    user-select: none;
    text-decoration: none;

    transition-property: background-color, color, border-color, box-shadow;
    transition: 150ms ease, transform 200ms ease, width 200ms ease;

    border: 0px;

    ${(props) => getVariantStyle(props)};

    &:active {
        transform: scale(0.98);
    }

    &:disabled {
        cursor: not-allowed;
        &:active {
            transform: scale(1);
        }
    }

    & > .button-child {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        display: block;
        text-align: left;
        margin: 0 auto;
        width: 100%;
    }

    & > .button-prefix,
    & > .button-suffix {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
