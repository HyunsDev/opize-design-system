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
            case 'gray':
                return `
                        background-color: ${cv.foreground};
                        color: ${cv.background};
                        border-color: ${cv.foreground};
                    `;
            case 'red':
                return `
                        background-color: ${cv.statusRed};
                        color: ${cv.background};
                        border-color: ${cv.statusRed};
                    `;
            case 'blue':
                return `
                        background-color: ${cv.statusBlue};
                        color: ${cv.background};
                        border-color: ${cv.statusBlue};
                    `;
            case 'green':
                return `
                        background-color: ${cv.statusGreen};
                        color: ${cv.background};
                        border-color: ${cv.statusGreen};
                    `;
            case 'yellow':
                return `
                        background-color: ${cv.statusYellow};
                        color: ${cv.background};
                        border-color: ${cv.statusYellow};
                    `;
            case 'violet':
                return `
                        background-color: ${cv.statusViolet};
                        color: ${cv.background};
                        border-color: ${cv.statusViolet};
                    `;
        }
    }

    if (props.variant === 'secondary') {
        switch (props.color) {
            case 'gray':
                return `
                    background-color: ${cv.gray200};
                    color: ${cv.gray600};
                    border-color: ${cv.gray200};
                `;
            case 'red':
                return `
                    background-color: ${cv.statusRedBg};
                    color: ${cv.statusRed};
                    border-color: ${cv.statusRedBg};
                `;
            case 'blue':
                return `
                    background-color: ${cv.statusBlueBg};
                    color: ${cv.statusBlue};
                    border-color: ${cv.statusBlueBg};
                `;
            case 'green':
                return `
                    background-color: ${cv.statusGreenBg};
                    color: ${cv.statusGreen};
                    border-color: ${cv.statusGreenBg};
                `;
            case 'yellow':
                return `
                    background-color: ${cv.statusYellowBg};
                    color: ${cv.statusYellow};
                    border-color: ${cv.statusYellowBg};
                `;
            case 'violet':
                return `
                    background-color: ${cv.statusVioletBg};
                    color: ${cv.statusViolet};
                    border-color: ${cv.statusVioletBg};
                `;
        }
    }

    if (props.variant === 'tertiary') {
        switch (props.color) {
            case 'gray':
                return `
                    background-color: ${cv.background};
                    color: ${cv.gray500};
                    border-color: ${cv.gray500};
                `;
            case 'red':
                return `
                    background-color: ${cv.background};
                    color: ${cv.statusRed};
                    border-color: ${cv.statusRed};
                `;
            case 'blue':
                return `
                    background-color: ${cv.background};
                    color: ${cv.statusBlue};
                    border-color: ${cv.statusBlue};
                `;
            case 'green':
                return `
                    background-color: ${cv.background};
                    color: ${cv.statusGreen};
                    border-color: ${cv.statusGreen};
                `;
            case 'yellow':
                return `
                    background-color: ${cv.background};
                    color: ${cv.statusYellow};
                    border-color: ${cv.statusYellow};
                `;
            case 'violet':
                return `
                    background-color: ${cv.background};
                    color: ${cv.statusViolet};
                    border-color: ${cv.statusViolet};
                `;
        }
    }
};
