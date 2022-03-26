import type { DefaultTheme } from 'styled-components/native';

import palette from './palette';

export default {
  palette: {
    primary: palette.green,
    primaryDark: palette.darkGreen,
    primaryLight: palette.lightGreen,
    secondary: palette.red,
    primaryText: palette.white,
    secondaryText: palette.black,
    captionText: palette.grey,
    divider: palette.lightGrey,
  },
} as DefaultTheme;
