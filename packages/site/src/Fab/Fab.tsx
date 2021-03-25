import React from 'react';
import classnames from 'classnames';
import { Box } from '../system';
import * as styles from './Fab.css';

export const Fab = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => {
  return (
    <Box
      onClick={onClick}
      className={classnames(styles.fab, open ? styles.fab_isOpen : null)}
    >
      <Box className={styles.fab__bar} />
      <Box className={styles.fab__bar} />
      <Box className={styles.fab__bar} />
    </Box>
  );
};
