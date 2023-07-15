'use client'
import { deepmerge } from '@mui/utils'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Colors from './options/colors'
import { CustomTheme, RootThemes } from './root'
import { updateTheme } from '@/store/user'

type Mode = 'light' | 'dark'

export interface IThemeModeContext {
  toggleThemeMode: () => void
}

const ThemeModeContext = createContext<IThemeModeContext | null>(null)
export const useVibeThemes = () => {
  const dispatch = useDispatch()
  const [mode, setMode] = useState<Mode>('dark')
  const dark = useSelector((state: { user: { dark: boolean } }) => state.user.dark)

  const toggleThemeMode = useCallback(() => {
    setMode(mode === 'light' ? 'dark' : 'light')
    dispatch(updateTheme())
  }, [mode])

  const themes = useMemo(() => {
    const colors = Colors[dark ? 'dark' : 'light']
    const theme = CustomTheme(colors, { mode, common: { ...colors } })
    return createTheme(deepmerge(theme, RootThemes))
  }, [dark])

  return {
    mode,
    themes,
    toggleThemeMode,
  }
}

export const useThemeMode = (): IThemeModeContext => {
  const context = useContext(ThemeModeContext) as IThemeModeContext
  if (!context) {
    throw new Error('useColorMode must be used within a ColorModeContext')
  }
  return context
}

type IMuiThemeProviderProps = {
  children: React.ReactNode
}

export const MuiThemeProvider: React.FC<IMuiThemeProviderProps> = ({ children }) => {
  const { themes, toggleThemeMode } = useVibeThemes()

  return (
    <ThemeModeContext.Provider value={{ toggleThemeMode }}>
      <ThemeProvider theme={themes}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export default MuiThemeProvider
