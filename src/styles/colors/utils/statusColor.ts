import { StatusColor, StatusColorVariant, StatusSemanticColor } from '..';

const colorNameMap = {
    gray: 'statusGray',
    yellow: 'statusYellow',
    red: 'statusRed',
    green: 'statusGreen',
    blue: 'statusBlue',
    violet: 'statusViolet',
};

export const getStatusColorName = (
    color: StatusColor,
    variant?: StatusColorVariant
): StatusSemanticColor => {
    return `${colorNameMap[color]}${variant ? variant : ''}` as StatusSemanticColor;
};
