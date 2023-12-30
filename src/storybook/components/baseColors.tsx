import { styled } from 'styled-components';
import { OpizeWrapper, lightBaseColorPalette } from '../..';

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
    width: 72px;
    font-size: 16px;
    font-weight: 600;
`;

const ColorColorsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const ColorItem = styled.div`
    width: 72px;
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
            <ColorColorsRow>
                <ColorLabel>{label}</ColorLabel>
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

export function BaseColors() {
    const colors = Object.entries(lightBaseColorPalette).map(([key, value]) => ({
        name: key,
        value: value,
    }));

    return (
        <OpizeWrapper>
            <ColorRows>
                <ColorRow
                    label={
                        <>
                            white
                            <br /> black
                        </>
                    }
                    colors={colors.filter((c) => c.name === 'white' || c.name === 'black')}
                />
                <ColorRow
                    label="gray"
                    colors={colors.filter((c) => c.name.startsWith('gray'))}
                />
                <ColorRow
                    label="red"
                    colors={colors.filter((c) => c.name.startsWith('red'))}
                />
                <ColorRow
                    label="yellow"
                    colors={colors.filter((c) => c.name.startsWith('yellow'))}
                />
                <ColorRow
                    label="green"
                    colors={colors.filter((c) => c.name.startsWith('green'))}
                />
                <ColorRow
                    label="blue"
                    colors={colors.filter((c) => c.name.startsWith('blue'))}
                />
                <ColorRow
                    label="violet"
                    colors={colors.filter((c) => c.name.startsWith('violet'))}
                />
            </ColorRows>
        </OpizeWrapper>
    );
}
