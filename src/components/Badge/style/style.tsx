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
                    `;
            case 'red':
                return `
                        background-color: ${cv.red};
                        color: ${cv.background};
                    `;
            case 'blue':
                return `
                        background-color: ${cv.blue};
                        color: ${cv.background};
                    `;
            case 'green':
                return `
                        background-color: ${cv.green};
                        color: ${cv.background};
                    `;
            case 'yellow':
                return `
                        background-color: ${cv.yellow};
                        color: ${cv.background};
                    `;
            case 'violet':
                return `
                        background-color: ${cv.violet};
                        color: ${cv.background};
                    `;
        }
    }

    switch (props.color) {
        case 'default':
            return `
                background-color: ${cv.default200};
                color: ${cv.default700};
            `;
        case 'red':
            return `
                background-color: ${cv.red_background};
                color: ${cv.red};
            `;
        case 'blue':
            return `
                background-color: ${cv.blue_background};
                color: ${cv.blue};
            `;
        case 'green':
            return `
                background-color: ${cv.green_background};
                color: ${cv.green};
            `;
        case 'yellow':
            return `
                background-color: ${cv.yellow_background};
                color: ${cv.yellow};
            `;
        case 'violet':
            return `
                background-color: ${cv.violet_background};
                color: ${cv.violet};
            `;
    }
};
