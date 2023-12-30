import { buildCssVariables } from '../../utils';

import { lightBaseColorPalette } from './baseColorPalette';
import { lightSemanticColorPalette } from './semanticColorPalette';

export { lightBaseColorPalette, lightSemanticColorPalette };

export const lightColorPalette = {
    ...lightSemanticColorPalette,
    ...lightBaseColorPalette,
};

export const colorCSSVariable = buildCssVariables({
    ...lightSemanticColorPalette,
    ...lightBaseColorPalette,
});
