import { styled } from 'styled-components';
import { OpizeWrapper, lightSemanticColorPalette } from '../..';

function rgbToHex(rgbString: string): string {
    const rgbMatch = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!rgbMatch) {
        return 'wrongRGB';
    }
    const toHex = (n: string): string => {
        const hex = parseInt(n, 10).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return '#' + toHex(rgbMatch[1]) + toHex(rgbMatch[2]) + toHex(rgbMatch[3]);
}

const ColorRows = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const StyledColorRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const ColorLabel = styled.div`
    width: 120px;
    font-size: 16px;
    font-weight: 600;
`;

const ColorColorsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const ColorItem = styled.div`
    width: 120px;
`;

const ColorPlate = styled.div<{ color: string }>`
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.color};
    border-radius: 8px;
    margin-bottom: 4px !important;
`;

const ColorName = styled.div`
    font-size: 12px !important;
    font-weight: 600 !important;
`;

const ColorValue = styled.div`
    font-size: 10px !important;
    color: rgba(0, 0, 0, 0.4) !important;
`;

function ColorRow({
    label,
    colors,
}: {
    label: React.ReactNode;
    colors: { name: string; value: string }[];
}) {
    return (
        <StyledColorRow>
            <ColorLabel>{label}</ColorLabel>
            <ColorColorsRow>
                {colors.map((color) => {
                    return (
                        <ColorItem>
                            <ColorPlate color={color.value} />
                            <ColorName>{color.name}</ColorName>
                            <ColorValue>{rgbToHex(color.value)}</ColorValue>
                        </ColorItem>
                    );
                })}
            </ColorColorsRow>
        </StyledColorRow>
    );
}

export function SemanticColors() {
    const colors = Object.entries(lightSemanticColorPalette).map(([key, value]) => ({
        name: key,
        value: value,
    }));

    return (
        <OpizeWrapper>
            <ColorRows>
                <ColorRow
                    label={'ground'}
                    colors={colors.filter(
                        (c) => c.name === 'foreground' || c.name === 'background'
                    )}
                />
                <ColorRow
                    label="primary"
                    colors={colors.filter(
                        (c) => c.name.startsWith('primary') || c.name.startsWith('secondary')
                    )}
                />
                <ColorRow
                    label="statusGray"
                    colors={colors.filter((c) => c.name.startsWith('statusGray'))}
                />
                <ColorRow
                    label="statusRed"
                    colors={colors.filter((c) => c.name.startsWith('statusRed'))}
                />
                <ColorRow
                    label="statusYellow"
                    colors={colors.filter((c) => c.name.startsWith('statusYellow'))}
                />
                <ColorRow
                    label="statusGreen"
                    colors={colors.filter((c) => c.name.startsWith('statusGreen'))}
                />
                <ColorRow
                    label="statusBlue"
                    colors={colors.filter((c) => c.name.startsWith('statusBlue'))}
                />
                <ColorRow
                    label="statusViolet"
                    colors={colors.filter((c) => c.name.startsWith('statusViolet'))}
                />
                <ColorRow
                    label="text"
                    colors={colors.filter((c) =>
                        ['text', 'link', 'placeholder', 'label'].includes(c.name)
                    )}
                />
                <ColorRow
                    label="layout"
                    colors={colors.filter((c) =>
                        ['border', 'background', 'background1'].includes(c.name)
                    )}
                />
                <ColorRow
                    label="opize"
                    colors={colors.filter((c) =>
                        [
                            'opizeGreen',
                            'opizeWhite',
                            'opizeDimWhite',
                            'c2nViolet',
                            'c2nBlue',
                        ].includes(c.name)
                    )}
                />
            </ColorRows>
        </OpizeWrapper>
    );
}
