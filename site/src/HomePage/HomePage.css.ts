import { style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';
import { responsiveStyle } from '../themeUtils';

export const featureKeyLine = style({
  left: 0,
  top: 0,
  background: themeVars.palette.pink[300],
  transform: 'skew(15deg)',
  ...responsiveStyle({
    mobile: { height: themeVars.text.standard.mobile.lineHeight },
    desktop: { height: themeVars.text.standard.desktop.lineHeight },
  }),
});

// linear-gradient(transparent, var(--background-green__6cbmls91) 60%),
// radial-gradient(var(--palette-pink-100__6cbmls106), transparent) 100px 100px / 15px 30px
export const skewedContainer = style({
  background: `linear-gradient(transparent, ${themeVars.background.green} 60%)`,
  ':after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: '100vw',
    height: '170px',
    background: themeVars.background.green,
    clipPath: 'polygon(0 0,100% 0,100% 60%,0 100%)',
  },
});

export const skewedContainerSecondary = style({
  background: themeVars.background.blue,
  ':before': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: '100vw',
    height: '100px',
    top: '-60px',
    background: themeVars.background.blue,
    clipPath: 'polygon(0 0, 100% 60%, 100% 100%, 0 100%)',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: '100vw',
    height: '100px',
    bottom: '-70px',
    background: themeVars.background.blue,
    clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)',
  },
});
