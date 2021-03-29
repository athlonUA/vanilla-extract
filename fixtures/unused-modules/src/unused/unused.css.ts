import { style } from '@vanilla-extract/css';
import { sharedStyle } from '../shared';

const className = style({
  color: 'red',
  backgroundColor: 'blue',
});

export default `${className} ${sharedStyle}`;
