import { styled, keyframes } from 'styled-components';
import { OpizeWrapper } from '../..';
import { colorPalettes } from '../../style/colors/colorPalette';

const fadeIn = keyframes`
    0% {
        transform: translate(0, 12px);
        opacity: 0;
    }
    100% {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`;

const ColorsDiv = styled.div<{ bgColor: string }>`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    margin: 0 auto;
`;

const ColorDiv = styled.div<{ delay: number }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 0;
    animation: ${fadeIn} 1s cubic-bezier(0.08, 0.37, 0, 1.02) forwards;
    animation-delay: ${(props) => props.delay}ms;
`;

const ColorLabel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    div:first-of-type {
        color: var(--text1);
        font-size: 14px;
        font-weight: 600;
    }

    div:last-child {
        color: var(--text2);
        font-size: 14px;
    }
`;

const ColorShow = styled.div<{ color: string }>`
    width: 60%;
    height: 52px;
    background-color: ${(props) => props.color};
    border-radius: 8px;
    border: solid 1px var(--border3);
`;

export function Colors() {
    const isDarkMode = false;

    return (
        <OpizeWrapper>
            <ColorsDiv bgColor={colorPalettes[isDarkMode ? 'dark' : 'light'].background}>
                {Object.entries(colorPalettes[isDarkMode ? 'dark' : 'light']).map(
                    ([key, value], i) => (
                        <ColorDiv
                            key={key}
                            delay={i * 100}
                        >
                            <ColorLabel>
                                <div>{key}</div>
                                <div>{value}</div>
                            </ColorLabel>
                            <ColorShow color={value} />
                        </ColorDiv>
                    )
                )}
            </ColorsDiv>
        </OpizeWrapper>
    );
}
