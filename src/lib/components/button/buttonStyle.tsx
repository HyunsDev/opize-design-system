import { css, FlattenInterpolation, ThemedStyledProps } from 'styled-components';
import { cv } from '../../style';
import { ButtonColor, ButtonSize, ButtonVariant } from './buttonType';

type StyledCss<Props extends { [key: string]: any } = Record<string, any>> = FlattenInterpolation<
    ThemedStyledProps<Props, any>
>;

type sizeProps = { $width: string; $iconOnly: boolean };
export const sizeMap: Record<ButtonSize, StyledCss<sizeProps>> = {
    small: css<sizeProps>`
        height: 26px;
        padding: 0px 8px;
        width: ${(props) => props.$width};
        ${(props) =>
            props.$iconOnly &&
            css`
                padding: 0;
                width: 26px;
            `}
    `,
    medium: css<sizeProps>`
        height: 32px;
        padding: 0px 12px;
        width: ${(props) => props.$width};
        ${(props) =>
            props.$iconOnly &&
            css`
                padding: 0;
                width: 32px;
            `}
    `,
    large: css<sizeProps>`
        height: 40px;
        padding: 0px 16px;
        width: ${(props) => props.$width};
        ${(props) =>
            props.$iconOnly &&
            css`
                padding: 0;
                width: 40px;
            `}
    `,
};

type ButtonColorStyle = Record<ButtonColor, StyledCss>;
export const colorMap: Record<ButtonVariant, ButtonColorStyle> = {
    default: {
        gray: css`
            color: ${cv.text1};
            --local-color: ${cv.text1};
            background-color: ${cv.bg_element2};
            border: solid 1px ${cv.border2};

            &:hover {
                background-color: ${cv.bg_element3};
                --local-border: solid 1px ${cv.border1};
            }

            &:active {
                background-color: ${cv.bg_element4};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.border3};
                color: ${cv.border3};
                --local-color: ${cv.border3};
            }

            &:focus-visible::after {
                outline-color: ${cv.border2};
            }
        `,
        red: css`
            color: ${cv.red1};
            --local-color: ${cv.red1};
            background-color: ${cv.bg_red1};
            border: solid 1px ${cv.red1};

            &:hover {
                background-color: ${cv.bg_red1_hover};
            }

            &:active {
                background-color: ${cv.bg_red1_hover};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.bg_red1};
                color: ${cv.bg_red1};
                --local-color: ${cv.bg_red1};
            }

            &:focus-visible::after {
                outline-color: ${cv.red1};
            }
        `,
        blue: css`
            color: ${cv.blue1};
            --local-color: ${cv.blue1};
            background-color: ${cv.bg_blue1};
            border: solid 1px ${cv.blue1};

            &:hover {
                background-color: ${cv.bg_blue1_hover};
            }

            &:active {
                background-color: ${cv.bg_blue1_hover};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.bg_blue1};
                color: ${cv.bg_blue1};
                --local-color: ${cv.bg_blue1};
            }

            &:focus-visible::after {
                outline-color: ${cv.blue1};
            }
        `,
    },
    contained: {
        gray: css`
            color: ${cv.bg_element1};
            // --local-color은 inherit으로 color를 받기 힘든 컴포넌트를 위한 CSS 변수입니다.
            // 스타일 추가시 color 속성을 사용하신다면 --local-color 속성도 추가해주셔야 합니다.
            // 현재는 isLoading 때 표시하는 Spinner의 색상 지정을 위해 사용중입니다.
            --local-color: ${cv.bg_element1};
            background-color: ${cv.bg_element5};
            border: solid 1px ${cv.bg_element5};

            &:hover {
                color: ${cv.bg_element5};
                --local-color: ${cv.bg_element5};
                background-color: ${cv.bg_element1};
            }

            &:active {
                background-color: ${cv.bg_element3};
            }

            &:disabled {
                background-color: ${cv.bg_element3};
                border: solid 1px ${cv.bg_element3};
                color: ${cv.bg_element1};
                --local-color: ${cv.bg_element1};
            }

            &:focus-visible::after {
                outline-color: ${cv.bg_element5};
            }
        `,
        red: css`
            color: ${cv.bg_element1};
            --local-color: ${cv.bg_element1};
            background-color: ${cv.red1};
            border: solid 1px ${cv.red1};

            &:hover {
                color: ${cv.red1};
                --local-color: ${cv.red1};
                background-color: ${cv.bg_element1};
            }

            &:active {
                background-color: ${cv.bg_element3};
            }

            &:disabled {
                background-color: ${cv.bg_red1};
                border: solid 1px ${cv.bg_red1};
                color: ${cv.bg_element1};
                --local-color: ${cv.bg_element1};
            }

            &:focus-visible::after {
                outline-color: ${cv.red1};
            }
        `,
        blue: css`
            color: ${cv.bg_element1};
            --local-color: ${cv.bg_element1};
            background-color: ${cv.blue1};
            border: solid 1px ${cv.blue1};

            &:hover {
                color: ${cv.blue1};
                --local-color: ${cv.blue1};
                background-color: ${cv.bg_element1};
            }

            &:active {
                background-color: ${cv.bg_element3};
            }

            &:disabled {
                background-color: ${cv.bg_blue1};
                border: solid 1px ${cv.bg_blue1};
                color: ${cv.bg_element1};
                --local-color: ${cv.bg_element1};
            }

            &:focus-visible::after {
                outline-color: ${cv.blue1};
            }
        `,
    },
    outlined: {
        gray: css`
            color: ${cv.text1};
            --local-color: ${cv.text1};
            background-color: ${cv.bg_element1};
            border: solid 1px ${cv.border2};

            &:hover {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.border1};
                --local-border: solid 1px ${cv.border1};
            }

            &:active {
                background-color: ${cv.bg_element2};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.border3};
                color: ${cv.border3};
                --local-color: ${cv.border3};
            }

            &:focus-visible::after {
                outline-color: ${cv.border2};
            }
        `,
        red: css`
            color: ${cv.red1};
            --local-color: ${cv.red1};
            background-color: ${cv.bg_red1};
            border: solid 1px ${cv.red1};

            &:hover {
                background-color: ${cv.bg_red1_hover};
            }

            &:active {
                background-color: ${cv.bg_red1_hover};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.bg_red1};
                color: ${cv.bg_red1};
                --local-color: ${cv.bg_red1};
            }

            &:focus-visible::after {
                outline-color: ${cv.red1};
            }
        `,
        blue: css`
            color: ${cv.blue1};
            --local-color: ${cv.blue1};
            background-color: ${cv.bg_blue1};
            border: solid 1px ${cv.blue1};

            &:hover {
                background-color: ${cv.bg_blue1_hover};
            }

            &:active {
                background-color: ${cv.bg_blue1_hover};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                border: solid 1px ${cv.bg_blue1};
                color: ${cv.bg_blue1};
                --local-color: ${cv.bg_blue1};
            }

            &:focus-visible::after {
                outline-color: ${cv.blue1};
            }
        `,
    },
    text: {
        gray: css`
            color: ${cv.text1};
            --local-color: ${cv.text1};
            background-color: ${cv.bg_element1};
            border: solid 1px ${cv.bg_element1};

            &:hover {
                background-color: ${cv.bg_element2};
            }

            &:active {
                background-color: ${cv.bg_element3};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                color: ${cv.text3};
                --local-color: ${cv.text3};
            }

            &:focus-visible::after {
                outline-color: ${cv.text1};
            }
        `,
        red: css`
            color: ${cv.red1};
            --local-color: ${cv.red1};
            background-color: ${cv.bg_element1};
            border: solid 1px ${cv.bg_element1};

            &:hover {
                background-color: ${cv.bg_red1_hover};
            }

            &:active {
                background-color: ${cv.bg_red1_hover};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                color: ${cv.bg_red1};
                --local-color: ${cv.bg_red1};
            }

            &:focus-visible::after {
                outline-color: ${cv.red1};
            }
        `,
        blue: css`
            color: ${cv.blue1};
            --local-color: ${cv.blue1};
            background-color: ${cv.bg_element1};
            border: solid 1px ${cv.bg_element1};

            &:hover {
                background-color: ${cv.bg_blue1_hover};
            }

            &:active {
                background-color: ${cv.bg_blue1_hover};
            }

            &:disabled {
                background-color: ${cv.bg_element1};
                color: ${cv.bg_blue1};
                --local-color: ${cv.bg_blue1};
            }

            &:focus-visible::after {
                outline-color: ${cv.blue1};
            }
        `,
    },
};
