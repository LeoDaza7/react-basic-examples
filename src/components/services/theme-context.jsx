import { createContext } from 'react'

export const themes = {
  dark: {
    background: '#000000',
    color: '#ffffff'
  },
  light : {
    background: '#ffffff',
    color: '#000000'
  }
}

const ThemeContext = createContext({
  theme: themes.dark,
  handleToggleTheme: () => {}
})

export default ThemeContext
