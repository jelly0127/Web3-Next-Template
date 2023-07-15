import type { ThemeOptions } from '@mui/material'

const theme = {
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          height: 44,
          // background: 'var(--ps-black)',
          fontSize: 14,
          fieldset: {
            borderWidth: '1px!important',
          },
          '&.MuiInputBase-multiline': {
            height: 'auto',
            minHeight: 48,
          },
          '&.Mui-disabled': {
            background: 'var(--ps-surface-4)',
            '.Mui-disabled': {
              color: 'var(--ps-gray-700)',
              WebkitTextFillColor: 'var(--ps-gray-700)',
            },
            fieldset: {
              borderColor: 'var(--ps-gray-800)',
            },
          },
          '.MuiInputAdornment-root svg': {
            color: 'var(--ps-gray-500)',
          },
          '&.Mui-focused': {
            '.MuiInputAdornment-root svg': {
              color: 'var(--ps-white)',
            },
          },
        },
      },
    },
  },
} as ThemeOptions

export const InputComponent = theme.components
