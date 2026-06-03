import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  
  // This will create a CSS variable --font-budgetcalculator
  //   that we can use in our styles
    variable: '--font-budgetcalculator',

});

// This is the root layout for the app, 
// it wraps all pages and components
export const metadata: Metadata = {
  title: 'BudgetCalculator',
  description: 'Budget calculator app',
};


const theme = createTheme({
  palette: {
    primary: { main: '#4E342E' },    // Cocoa Brown
    secondary: { main: '#D81B60' },  // Berry Pink
    info: { main: '#E1F5FE' },       // Sky Blue
    success: { main: '#C5E1A5' },    // Matcha Green
    background: { default: '#FAF9F6' }, // Creamy Paper
  },
  typography: {
    // Setting the base font to a clean Sans-Serif like the catalog
    
    // can also use:
    //'var(--font-softbudget), Arial, Helvetica, sans-serif',
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {

        // could use "500" for a slightlu thicker font. It is lighter than the default
      fontWeight: 300,            // Mimics "Helvetica Light"
      textTransform: 'lowercase', // The signature 2000s catalog look

      //0.05em = more stylized / fashion/editorial
      //0.02em = subtle / clean
      letterSpacing: '0.05em',    // Adds that "airy" premium feel
    },
    h2: {

        // use "500" if also used in h1
      fontWeight: 300,
      textTransform: 'lowercase',
      letterSpacing: '0.03em',
      color: '#D81B60',           // Example: Making H2s that "Junior" pink
    },
     h3: {
    fontWeight: 300, //change to "500" if others do
  },
    body1: {
        lineHeight: 1.7, // airy feel
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'lowercase', // Buttons also looked "friendlier" in lowercase
          fontWeight: 400,
          borderRadius: 8,            // Slightly rounded, like 2000s UI
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#E1F5FE', // Sky Blue header
          color: '#4E342E',           // Brown text
          textTransform: 'lowercase', // Keeps the table consistent with the "brand"
          fontWeight: 600,
        },
      },
    },
  },
});


export default theme;

/*

Make a file like:

src/theme.ts
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#e95a97', // hot pink
    },
    secondary: {
      main: '#8fd3f4', // light blue
    },
    success: {
      main: '#9edb7a', // soft green
    },
    background: {
      default: '#f8f1e8', // creme
      paper: '#fffaf4',
    },
    text: {
      primary: '#4b332d', // brown
      secondary: '#7a625b',
    },
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    h1: {
      fontWeight: 500,
      textTransform: 'lowercase',
    },
    h2: {
      fontWeight: 500,
      textTransform: 'lowercase',
    },
    h3: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

4) Easiest way to think about your colors

When building pages, use them like this:

color="primary" → pink
color="secondary" → blue
color="success" → green

For example:

<Button color="primary">Add expense</Button>

That’s it. MUI handles the rest.




import { Box, Button, Container, Paper, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h2" color="primary" gutterBottom>
        softbudget
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        A warm, playful budget calculator inspired by early 2000s catalog design.
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" sx={{ color: 'text.primary', mb: 1 }}>
          monthly overview
        </Typography>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Remaining balance: $842
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary">
            Add expense
          </Button>

          <Button variant="contained" color="secondary">
            View categories
          </Button>

          <Button variant="contained" color="success">
            Savings goal
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
*/