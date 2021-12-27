import {ThemeProvider} from "@emotion/react"

import theme from "../src/styles/Theme"
import reset from "../src/styles/reset"
import { Global } from "@emotion/react"

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global styles={reset}/>
      <Story/>
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}