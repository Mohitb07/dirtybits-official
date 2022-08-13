import { useDarkMode } from 'storybook-dark-mode';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import "../src/styles/global.css";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

function ThemeWrapper({children}) {
  Object.defineProperty(NextImage, "default", {
    configurable: true,
    value: (props) => <OriginalNextImage {...props} unoptimized />,
  });
  return (
    <ColorSchemeProvider colorScheme="dark" toggleColorScheme={() => {}}>
      <MantineProvider
        theme={{ colorScheme: useDarkMode() ? 'dark' : 'light' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>{children}</NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];