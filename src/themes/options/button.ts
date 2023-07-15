import type { ThemeOptions } from '@mui/material'

const theme = {
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'capitalize',
          fontWeight: '600',
        },
        sizeSmall: {
          height: 18,
          fontSize: 8,
          borderRadius: 50,
          padding: '4px 8px',
          lineHeight: '10px',
        },
        sizeMedium: {
          height: 44,
          fontSize: 16,
          borderRadius: '22px',
          padding: '12px 20px',
          lineHeight: '29px',
        },
        sizeLarge: {
          height: 54,
          fontSize: 24,
          borderRadius: 27,
          padding: '12px 20px',
        },

        containedPrimary: {
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            background: 'var(--ps-primaryActive)',
          },
        },
      },
    },
  },
} as ThemeOptions

export const ButtonComponent = theme.components
