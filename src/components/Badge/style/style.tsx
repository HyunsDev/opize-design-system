import { StyleBadgeProps } from '.';
import { cv } from '../../..';

export const getSizeStyle = (props: StyleBadgeProps) => {
    switch (props.size) {
        case 'small':
            return `
                font-size: 11px;
                padding: 0px 6px;
                height: 20px;
                gap: 4px;
            `;
        case 'medium':
            return `
                font-size: 12px;
                padding: 0px 8px;
                height: 24px;
                gap: 6px;
            `;
        case 'large':
            return `
                font-size: 1rem;
                padding: 0px 12px;
                height: 32px;
                gap: 10px;
            `;
    }
};

export const getColorStyle = (props: StyleBadgeProps) => {
    if (props.variant === 'primary') {
        switch (props.color) {
            case 'default':
                return `
                        background-color: ${cv.foreground};
                        color: ${cv.background};
                        border-color: ${cv.foreground};
                    `;
            case 'red':
                return `
                        background-color: ${cv.red};
                        color: ${cv.background};
                        border-color: ${cv.red};
                    `;
            case 'blue':
                return `
                        background-color: ${cv.blue};
                        color: ${cv.background};
                        border-color: ${cv.blue};
                    `;
            case 'green':
                return `
                        background-color: ${cv.green};
                        color: ${cv.background};
                        border-color: ${cv.green};
                    `;
            case 'yellow':
                return `
                        background-color: ${cv.yellow};
                        color: ${cv.background};
                        border-color: ${cv.yellow};
                    `;
            case 'violet':
                return `
                        background-color: ${cv.violet};
                        color: ${cv.background};
                        border-color: ${cv.violet};
                    `;
        }
    }

    if (props.variant === 'secondary') {
        switch (props.color) {
            case 'default':
                return `
                    background-color: ${cv.default200};
                    color: ${cv.default600};
                    border-color: ${cv.default200};
                `;
            case 'red':
                return `
                    background-color: ${cv.red_background};
                    color: ${cv.red};
                    border-color: ${cv.red_background};
                `;
            case 'blue':
                return `
                    background-color: ${cv.blue_background};
                    color: ${cv.blue};
                    border-color: ${cv.blue_background};
                `;
            case 'green':
                return `
                    background-color: ${cv.green_background};
                    color: ${cv.green};
                    border-color: ${cv.green_background};
                `;
            case 'yellow':
                return `
                    background-color: ${cv.yellow_background};
                    color: ${cv.yellow};
                    border-color: ${cv.yellow_background};
                `;
            case 'violet':
                return `
                    background-color: ${cv.violet_background};
                    color: ${cv.violet};
                    border-color: ${cv.violet_background};
                `;
        }
    }

    if (props.variant === 'tertiary') {
        switch (props.color) {
            case 'default':
                return `
                    background-color: ${cv.background};
                    color: ${cv.default500};
                    border-color: ${cv.default500};
                `;
            case 'red':
                return `
                    background-color: ${cv.background};
                    color: ${cv.red};
                    border-color: ${cv.red};
                `;
            case 'blue':
                return `
                    background-color: ${cv.background};
                    color: ${cv.blue};
                    border-color: ${cv.blue};
                `;
            case 'green':
                return `
                    background-color: ${cv.background};
                    color: ${cv.green};
                    border-color: ${cv.green};
                `;
            case 'yellow':
                return `
                    background-color: ${cv.background};
                    color: ${cv.yellow};
                    border-color: ${cv.yellow};
                `;
            case 'violet':
                return `
                    background-color: ${cv.background};
                    color: ${cv.violet};
                    border-color: ${cv.violet};
                `;
        }
    }
};
