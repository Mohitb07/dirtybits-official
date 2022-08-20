import type { Tuple } from '@mantine/core';
import type { CSSProperties } from 'react';

interface MantineTheme {
  // Defines color scheme for all components, defaults to "light"
  colorScheme: 'light' | 'dark';

  // Controls focus ring styles:
  // auto – display focus ring only when user navigates with keyboard (default)
  // always – display focus ring when user navigates with keyboard and mouse
  // never – focus ring is always hidden (not recommended)
  focusRing: 'auto' | 'always' | 'never';
  // Determines whether elements that do not have pointer cursor by default
  // (checkboxes, radio, native select) should have it
  // Default border-radius used for most elements
  defaultRadius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  // Object of arrays with 10 colors
  colors?: Record<string, Tuple<string, 10>>;

  // Key of theme.colors
  primaryColor: string;
  // font-family and line-height used in most components
  fontFamily?: string;
  // Monospace font-family, used in Code, Kbd and Prism components
  fontFamilyMonospace?: string;
  primaryShade:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | {
        light: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
        dark: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
      };
  // Breakpoints used in some components to add responsive styles
  breakpoints: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number>;
  // h1-h6 styles, used in Title and TypographyStylesProvider components
  headings?: {
    fontFamily: CSSProperties['fontFamily'];
    fontWeight: CSSProperties['fontWeight'];
    sizes: {
      // See heading options below
      h1: Heading;
      h2: Heading;
      h3: Heading;
      h4: Heading;
      h5: Heading;
      h6: Heading;
    };
  };
  // Default loader used in Loader and LoadingOverlay components
  loader: 'oval' | 'bars' | 'dots';
}

interface Heading {
  fontSize: CSSProperties['fontSize'];
  fontWeight: CSSProperties['fontWeight'];
  lineHeight: CSSProperties['lineHeight'];
}

const theme: MantineTheme = {
  colorScheme: 'dark',
  colors: {
    primary: [
      '#EFEBFA',
      '#D3C6F0',
      '#B7A2E7',
      '#9B7DDD',
      '#7F59D4',
      '#6334CB',
      '#4F2AA2',
      '#3B1F7A',
      '#281551',
      '#140A29',
    ],
  },
  primaryColor: 'primary',
  primaryShade: {
    light: 5,
    dark: 5,
  },
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1200,
    xl: 1400,
  },
  loader: 'oval',
  // defaultRadius: 'xl',
  focusRing: 'auto',
};

export default theme;
