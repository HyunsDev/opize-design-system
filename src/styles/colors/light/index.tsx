import { buildCssVariables } from '../../utils';

import { lightBaseColorPalette } from './baseColorPalette';
import { lightSemanticColorPalette } from './semanticColorPalette';

export { lightBaseColorPalette, lightSemanticColorPalette };

export const colorCSSVariable = buildCssVariables({
    ...lightSemanticColorPalette,
});
