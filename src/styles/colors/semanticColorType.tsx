export type ForegroundSemanticColor = 'foreground';
export type BackgroundSemanticColor = 'background';

export type PrimarySemanticColor = 'primary' | 'primaryLg' | 'primaryDk';
export type SecondarySemanticColor = 'secondary' | 'secondaryLg' | 'secondaryDk';

export type StatusBaseSemanticColor =
    | 'statusRed'
    | 'statusYellow'
    | 'statusGreen'
    | 'statusBlue'
    | 'statusViolet';

type StatusColorVariant = 'Lg' | 'Dk' | 'Bg' | 'BgLg' | 'BgDk';
export type StatusSemanticColor =
    | StatusBaseSemanticColor
    | `${StatusBaseSemanticColor}${StatusColorVariant}`;

export type OpizeSemanticColor =
    | 'opizeGreen'
    | 'opizeWhite'
    | 'opizeDimWhite'
    | 'c2nViolet'
    | 'c2nBlue';
export type TextSemanticColor = 'text' | 'link' | 'placeholder' | 'label';

export type LayoutSemanticColor = 'background1' | 'background2' | 'border';

export type SemanticColor =
    | ForegroundSemanticColor
    | BackgroundSemanticColor
    | PrimarySemanticColor
    | SecondarySemanticColor
    | StatusSemanticColor
    | OpizeSemanticColor
    | TextSemanticColor
    | LayoutSemanticColor;

export type SemanticColorPalette = { [key in SemanticColor]: string };
