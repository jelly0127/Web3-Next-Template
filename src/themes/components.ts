import { ThemeOptions } from '@mui/material'
import { TypographyComponent, ButtonComponent, InputComponent } from './options'

const buildVar = function (name: string) {
  const NAMESPACE = '--ps-'
  return `${NAMESPACE}${name}`
}

export const ComponentOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => {
        const common = theme.palette.common as any
        const vars = Object.keys(common).reduce((prev: any, next) => {
          prev[buildVar(next)] = common[next]
          return prev
        }, {})

        return {
          html: {
            ...vars,
          },
          body: {
            color: common.color,
            background: common.bg,
          },
          a: {
            textDecoration: 'none',
            color: 'inherit',
          },
          picture: {
            display: 'inline-flex',
            width: '100%',
            height: '100%',
            img: {
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'cover',
            },
          },
          input: {
            '&::placeholder': {
              color: 'var(--ps-gary-500)',
              fontSize: 'inherit',
            },
            '&:-webkit-autofill, &:-webkit-autofill:focus': {
              transition: 'background-color 600000s 0s, color 600000s 0s',
            },
          },
        }
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiMenu-paper': {
            background: '#181E1B',
            borderRadius: 12,
            boxShadow: '0px 6px 24px rgba(16, 23, 32, 0.02)',
          },
          ul: {
            li: {
              '&:hover': {
                backgroundColor: '#555F59',
                borderRadius: 12,
              },
            },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.MuiTab-textColorSecondary': {
            minWidth: 0,
            textTransform: 'none',
          },
        },
      },
    },
    ...ButtonComponent,
    ...InputComponent,
    ...TypographyComponent,
  },
} as ThemeOptions

export default ComponentOptions
