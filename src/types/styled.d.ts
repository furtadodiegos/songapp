import 'styled-components';

import type { AppPaletteProps } from '../theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: AppPaletteProps;
  }
}
