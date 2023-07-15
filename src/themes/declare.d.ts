import React from 'react'
import type { IThemeColor } from './themes/options/colors'

declare module '@mui/material/styles/createPalette' {
  interface CommonColors extends IThemeColor {
    black: string
    white: string
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayXLarge?: React.CSSProperties
    displayLarge?: React.CSSProperties
    displayMedium?: React.CSSProperties
    displaySmall?: React.CSSProperties

    stylizedLarge?: React.CSSProperties
    stylizedMedium?: React.CSSProperties
    stylizedSmall?: React.CSSProperties

    headlineLarge?: React.CSSProperties
    headlineMedium?: React.CSSProperties
    headlineSmall?: React.CSSProperties

    titleLarge?: React.CSSProperties
    titleMedium?: React.CSSProperties
    titleSmall?: React.CSSProperties

    labelLarge?: React.CSSProperties
    labelMedium?: React.CSSProperties
    labelSmall?: React.CSSProperties

    bodyLarge?: React.CSSProperties
    bodyMedium?: React.CSSProperties
    bodySmall?: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    displayXLarge?: React.CSSProperties
    displayLarge?: React.CSSProperties
    displayMedium?: React.CSSProperties
    displaySmall?: React.CSSProperties

    stylizedLarge?: React.CSSProperties
    stylizedMedium?: React.CSSProperties
    stylizedSmall?: React.CSSProperties

    headlineLarge?: React.CSSProperties
    headlineMedium?: React.CSSProperties
    headlineSmall?: React.CSSProperties

    titleLarge?: React.CSSProperties
    titleMedium?: React.CSSProperties
    titleSmall?: React.CSSProperties

    labelLarge?: React.CSSProperties
    labelMedium?: React.CSSProperties
    labelSmall?: React.CSSProperties

    bodyLarge?: React.CSSProperties
    bodyMedium?: React.CSSProperties
    bodySmall?: React.CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayXLarge: true
    displayLarge: true
    displayMedium: true
    displaySmall: true
    stylizedLarge: true
    stylizedMedium: true
    stylizedSmall: true
    headlineLarge: true
    headlineMedium: true
    headlineSmall: true
    titleLarge: true
    titleMedium: true
    titleSmall: true
    labelLarge: true
    labelMedium: true
    labelSmall: true
    bodyLarge: true
    bodyMedium: true
    bodySmall: true
  }
}
