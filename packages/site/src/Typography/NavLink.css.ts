import { style } from '@mattsjones/css-core';
import { themeVars } from '../themes.css';

export const link = style({
  textTransform: 'uppercase',
  color: themeVars.color.strong,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
});

export const strong = style({
  fontWeight: themeVars.weight.strong,
});
