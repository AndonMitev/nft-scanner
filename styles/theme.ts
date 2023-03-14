import { createTheme, responsiveFontSizes } from '@mui/material'
import { Shadows } from '@mui/material/styles/shadows'

const blue = '#1065E6'
const blue10 = '#EFF6FE'
const blue60 = '#1065E5'
const grey = '#D3D6DA'
const grey1 = '#BFC2C9'
const grey2 = '#989CA6'
const grey3 = '#EDEFF2'
const grey4 = '#464B55'
const grey80 = '#343840'
const grey90 = '#24282F'
const warningMain = '#CA8700'
const successMain = '#13855B'
const borderRadius = 3.5
const black = '#000000'
const mainGrey = '#F5F6F7'

const baseTheme = createTheme({
  shape: {
    borderRadius: borderRadius
  },
  palette: {
    primary: {
      main: blue
    },
    secondary: {
      main: grey3
    },
    text: {
      secondary: grey
    },
    info: { main: black },
    common: {
      mainGrey,
      grey,
      grey1,
      grey2,
      grey3,
      grey4,
      grey80,
      grey90,
      blue10,
      blue60
    },
    divider: grey,
    warning: {
      main: warningMain
    },
    success: {
      main: successMain
    }
  },

  shadows: Array(25).fill('none') as Shadows,

  components: {
    MuiPaginationItem: {
      defaultProps: {
        components: {}
      },
      styleOverrides: {
        root: {
          borderRadius: '6px'
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          textTransform: 'unset',
          borderRadius: 6,
          '&.Mui-disabled': {
            backgroundColor: '#F5F6F7',
            color: '#989CA6'
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'unset'
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        expandIconWrapper: {
          transform: 'rotate(90deg)'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          height: '44px',
          fontSize: '14px'
        }
      }
    }
  },

  typography: {
    fontFamily: "'Poppins', sans-serif;"
  }
})

const theme = responsiveFontSizes(baseTheme)

export { baseTheme, theme }
