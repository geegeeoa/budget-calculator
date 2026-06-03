import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    budget: {
      hotPink: string;
      softPink: string;
      sky: string;
      lime: string;
      brown: string;
      creme: string;
    };
  }

  interface PaletteOptions {
    budget?: {
      hotPink?: string;
      softPink?: string;
      sky?: string;
      lime?: string;
      brown?: string;
      creme?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#E94B93', // hot pink
      contrastText: '#2F1E1B',
    },
    secondary: {
      main: '#A9D6F5', // light blue
      contrastText: '#2F1E1B',
    },
    success: {
      main: '#B7D63D', // green
      contrastText: '#2F1E1B',
    },
    background: {
      default: '#F8F1E7', // creme
      paper: '#FFF8F1',
    },
    text: {
      primary: '#4A2E2A', // brown
      secondary: '#7A5A55',
    },
    divider: '#D8C2BC',
    budget: {
      hotPink: '#E94B93',
      softPink: '#F5B8D0',
      sky: '#A9D6F5',
      lime: '#B7D63D',
      brown: '#4A2E2A',
      creme: '#F8F1E7',
    },
  },
  typography: {
    fontFamily: 'var(--font-budgetcalculator), Arial, Helvetica, sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#4A2E2A',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: '#4A2E2A',
    },
    h3: {
      fontWeight: 600,
      color: '#4A2E2A',
    },
    h4: {
      fontWeight: 600,
      color: '#4A2E2A',
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    body1: {
      color: '#4A2E2A',
    },
    body2: {
      color: '#7A5A55',
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F8F1E7',
          color: '#4A2E2A',
        },
        '*::selection': {
          backgroundColor: '#F5B8D0',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#4A2E2A',
          color: '#FFF8F1',
          boxShadow: 'none',
          borderBottom: '2px solid #F5B8D0',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF8F1',
          border: '1px solid #E7D6D1',
          boxShadow: '0 4px 14px rgba(74, 46, 42, 0.08)',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#E94B93',
          color: '#2F1E1B',
          fontWeight: 700,
          '&:hover': {
            backgroundColor: '#D93D84',
          },
        },
        containedSecondary: {
          backgroundColor: '#A9D6F5',
          color: '#2F1E1B',
          '&:hover': {
            backgroundColor: '#96CAEC', //backgroundColor: '#96CAEC', not #96CAEEC'
          },
        },
        outlined: {
          borderColor: '#4A2E2A',
          color: '#4A2E2A',
          '&:hover': {
            borderColor: '#E94B93',
            backgroundColor: 'rgba(233, 75, 147, 0.06)',
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 999,
        },
        colorSuccess: {
          backgroundColor: '#DDECA3',
          color: '#4A2E2A',
        },
        colorPrimary: {
          backgroundColor: '#F5B8D0',
          color: '#4A2E2A',
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#E94B93',
          height: 4,
          borderRadius: 999,
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          color: '#7A5A55',
          '&.Mui-selected': {
            color: '#4A2E2A',
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFF8F1',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D8C2BC',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#A9D6F5',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E94B93',
            borderWidth: 2,
          },
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#F3E5DF',
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          color: '#4A2E2A',
          fontWeight: 700,
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: '#E94B93',
          fontWeight: 600,
          textDecorationColor: '#F5B8D0',
        },
      },
    },
  },
});