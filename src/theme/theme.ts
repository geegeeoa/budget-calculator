import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#eb1580',
            // '#C59963' warmer tan color to contrast the neutral dark brown
            contrastText:  '#FFF8F1'// , //shows on buttons contained
        },

        // '#FFF8F1' light creme to constrast the hot pink
        // '#563d2d' darker brown to contrast the hot pink
        secondary: {
            main: '#b0c418',
            contrastText:  '#7a625b'//'#7a625b', //shows on buttons contained
        },
        success: {
            main: '#b0c418',
            contrastText: '#7a625b', //shows on buttons contained
        },
        info: {
            main: '#8ab1b0', //copied over from vs code styling. can edit later
            contrastText: '#7a625b', //shows on buttons contained

        },
        /*
            AI recommendation: 
                If #750620 feels a touch intense, you could test:

                #8a1c3a → slightly lighter wine
                #6b0f2a → still deep but smoother
        */
        error: {
            main: '#750620',
            contrastText: '#FFF8F1' //recommended by AI. feel free to alter to whatever blends
        },
        // '#e8c6a5' is a little warmer and darker than '#EAD0B5' (both are tan)
        background: {
            default: '#F8F1E7', //'#C59963',
            // default: '#f8f1e7e8', //'#C59963',

            paper:  '#EAD0B5' //'#e8c6a5', //'#FFF8F1'
            // paper:  '#ead1b556' // more transparent version of color

            // paper:  '#f8f1e7' //'#e8c6a5', //'#FFF8F1'

        },
        text: {
            primary: '#563d2d', //4A2E2A
            secondary: '#7a625b',
        }

        /*
           background: {
      default: '#f8f1e8', // creme
      paper: '#fffaf4',


      // for setting the primary text color of everything, including buttons
      components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#4A2E2A',
        },
      },
    },
  },
        */
    },
    typography: {

        // Inter is closer to Helvetica Light from the 2000s print design
        fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
        // fontFamily: 'Arial, Helvetica, sans-serif',
        // textTransform: 'lowercase', // makes the text lowercase across the app, including buttons

        h1: {
            fontWeight: 300,
            textTransform: 'lowercase',
            letterSpacing: '0.05em', //wider letter spacing for headers
            color: '#563d2d',  
        },
        // change other headings slighty to create a difference 
        

        // font colors- #72503c shade i found from increasing lightness to 26% (on #563d2d) 
            //  to 34% (to make a lighter shade with same neutral brown look)
        // font colors- #6f5548 AI recommended shade as lighter neutral brown if #723503c leans more coppery or orange
            // same 34% lightness but less saturated than #72503c (at around 21% compare to 31% saturated of #72503c) 
        h3: {
            fontWeight: 300,
            textTransform: 'lowercase',
            letterSpacing: '0.05em', //wider letter spacing for headers
            color: '#72503c',  
        },

        h4: {
            fontWeight: 100,
            textTransform: 'lowercase',
            letterSpacing: '0.05em', //wider letter spacing for headers
            color: '#7a625b',  
        },
        
        h5: {
            fontWeight: 100,
            textTransform: 'lowercase',
            letterSpacing: '0.05em', //wider letter spacing for headers
            color: '#7a625b',  
        },
        h6: {
            fontWeight: 100,
            textTransform: 'lowercase',
            letterSpacing: '0.05em', //wider letter spacing for headers
            color: '#7a625b',  
        },
        button: {
            fontWeight: 300, //500
            textTransform: 'lowercase',
            letterSpacing: '0.03em',

            //MUI defaults buttons to ~0.875rem (14px)
            /**
             *             REM:
             *          scales with user settings
                        better accessibility
                        consistent with MUI defaults

                            px:
                        fixed size
                    does not scale with user preferences
                    more predictable visually
             * 
             *  1rem   = 16px
                0.875rem ≈ 14px
                1.25rem = 20px
             */
            fontSize: '1rem' //      fontSize: '1rem',   // try 0.9rem, 1rem, 1.1rem



        }
    }
});

export default theme;