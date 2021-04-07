import React, { Fragment, MouseEvent, ReactNode } from 'react';
import {
  NavLink as ReactRouterNavLink,
  NavLinkProps as ReactRouterNavLinkProps,
} from 'react-router-dom';
import classnames from 'classnames';
import { Box } from '../system';
import docs from '../docs-store';
import Link from '../Typography/Link';
import { useTextStyles } from '../Typography/Text';
import { useActiveHash } from '../useHeadingRoute';
import * as styles from './Navigation.css';

interface NavLinkProps extends ReactRouterNavLinkProps {
  baseline?: boolean;
  size?: 'standard' | 'small' | 'xsmall';
}
const NavLink = ({
  baseline = true,
  size = 'standard',
  children,
  ...restProps
}: NavLinkProps) => {
  return (
    <ReactRouterNavLink
      {...restProps}
      className={classnames(
        styles.sectionLinkTitle,
        styles.underlineOnHover,
        useTextStyles({ size, weight: 'strong', baseline }),
      )}
    >
      {children}
    </ReactRouterNavLink>
  );
};

const NavSection = ({
  href,
  title,
  children,
  onClick,
}: {
  href: string;
  title: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) => (
  <Fragment>
    <Box paddingBottom="medium">
      <NavLink size="small" to={href} exact onClick={onClick}>
        {title}
      </NavLink>
    </Box>
    <Box paddingBottom="xlarge">{children}</Box>
  </Fragment>
);

const SubLink = ({
  children,
  to,
  hash,
  active,
  onClick,
}: {
  children: ReactNode;
  to: string;
  hash?: string;
  active?: boolean;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) => {
  return (
    <Link
      size="small"
      to={`${to}${hash ? `#${hash}` : ''}`}
      onClick={onClick}
      style={
        active
          ? {
              fontWeight: 'bold',
            }
          : undefined
      }
    >
      <Box
        className={styles.subLinkContainer}
        paddingLeft="large"
        paddingY="xsmall"
        key={hash}
      >
        <div
          className={classnames(
            styles.activeIndicator,
            active ? styles.active : '',
          )}
        />
        {children}
      </Box>
    </Link>
  );
};

export default ({ onSelect }: { onSelect: () => void }) => {
  const activeHash = useActiveHash();

  const selectAndScrollToTop = () => {
    window.scrollTo(0, 0);
    onSelect();
  };

  return (
    <>
      {docs.map(({ title, route, sections }) => (
        <NavSection
          key={route}
          title={title}
          href={route}
          onClick={selectAndScrollToTop}
        >
          {sections
            .filter(({ level }) => level === 2)
            .map(({ hash, name }) => (
              <SubLink
                key={name}
                to={route}
                hash={hash}
                active={hash === activeHash}
                onClick={onSelect}
              >
                {name}
              </SubLink>
            ))}
        </NavSection>
      ))}
      <NavSection
        title="Community"
        href="https://github.com/seek-oss/vanilla-extract"
      >
        <SubLink to="https://github.com/seek-oss/vanilla-extract">
          GitHub
        </SubLink>
      </NavSection>
    </>
  );
};
