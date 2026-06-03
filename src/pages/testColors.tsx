import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Inter } from 'next/font/google';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Tooltip from '@mui/material/Tooltip';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SyntheticEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Image from 'next/image';
import Slide from '@mui/material/Slide';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import StarsIcon from '@mui/icons-material/Stars';
import StartIcon from '@mui/icons-material/Start';
import { forwardRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';






const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

{/* <html className={inter.className}></html> */}



/*

                                                            ///////////////////////////// CODING NOTES ////////////////////////////////
     - Want to change the "Paper" background color 
        - color seems off for some reason. Clashes with the blue color I'm using
        - look into having a brown border for icons? That may help
        - The creme color border on the Pink buttons look nice on that "Paper" background
        - The darker info color actually looks nice
            - Might be using this as the info color, as it might look better on the "Paper" background




                            P            L               A            N                S
                    - Primary Color: Hot Pink (eb1580) - for main buttons and accents
                    - Secondary Color: Light Blue (8ab1b0) - for secondary buttons and highlights
                    - Success Color: Green (b0c418) - for success messages and indicators
                    - Info Color: Darker Info - for Icons and providing information for users
                    - Error Button (potential) - a deep hot pink that severly leans Red to explain issues
                            - #c32148 < ----- best one IMO
                            - #d10d3a < ---- personal selection
                            - #cc0634 < ---- personal selection
                            - #750620 < ---- deep berry red SEXY!!!
                            - #7d011e 
                            - #3d010f < ------ merlot brown based red (might be too muted for error, can be used as text border accent or other accents in the page)
                            - #850f1c < ------ deep red with a hint of berry
                            - #990315 < ------ deep red with a hint of berry, but more red than #850f1c



                            - #e83256
                            - #d90166
                            - #e01160
                             - #ff1d8e




                    Draft from AI:
                    - Background Color: Cream (F8F1E7) - for the overall app background
                    - Text Color: Brown (563d2d) - for primary text to ensure readability
                    - Paper Color: Lighter Cream - for card backgrounds and surfaces
*/


// copied from Material UI card docs: https://mui.com/material-ui/react-card/
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const theme = createTheme({
    palette: {
        primary: {
            main: '#563d2d',

            // '#C59963' warmer tan color to contrast the neutral dark brown
            contrastText:  '#FFF8F1'// , //shows on buttons contained
        },

        // '#FFF8F1' light creme to constrast the hot pink
        // '#563d2d' darker brown to contrast the hot pink
        secondary: {
            main: '#eb1580',
            contrastText:  '#FFF8F1'//'#7a625b', //shows on buttons contained
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
             paper:  '#EAD0B5' //'#e8c6a5', //'#FFF8F1'
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
            fontWeight: 300,
            textTransform: 'lowercase',
            letterSpacing: '0.03em',
            // letterSpacing: '0.03em',


        }
    }
});

export default function TestColors() {

    const [ value, setValue] = useState("0");

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }

    const [ selectedValue, setSelectedValue ] = useState("");
    

    

    // modal is defaulted to close
    // false: close modal 
    // true: open modal
    const [ openModal, setOpenModal ] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    // Dialog state - separate from Modal
    const [ openDialog, setOpenDialog ] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    const [ openDrawer, setOpenDrawer ] = useState(false);

    const toggleDrawer = (updateOpenState: boolean) => () => {
        setOpenDrawer(updateOpenState);
    } 



    return (
        <>
            <ThemeProvider theme={theme}>
                    <Box         
                        className={inter.className} 
                        sx={{ 
                            backgroundColor: 'background.default', 
                            p: 4, 
                            minHeight: '100vh',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                // flexGrow: 1
                            }}
                        >
                            <AppBar
                                sx={{
                                    position: 'fixed',
                                    backgroundColor: 'background.default'
                                }}
                            >
                                <Toolbar
                                    variant= 'regular'
                                >

                                    <IconButton
                                        // do research on having onClick as a function
                                        // looked at Material UI Code (& AI help) for this
                                        // want to learn to retain info
                                        onClick = { () => {
                                            setOpenDrawer(true);
                                        }}
                                    >
                                        {/* <MenuIcon 
                                            color='info'
                                            sx={{
                                                fontSize: '40px'
                                            }}
                                        /> */}
                                        <Tooltip
                                            title="Open Side Panel"
                                        >
                                            <StarsIcon 
                                                color='primary'
                                                
                                                sx={{
                                                    fontSize: '60px'
                                                }}
                                            />                   
                                        
                                        </Tooltip>
                                    </IconButton>
                                    <Drawer 
                                        open={openDrawer}
                                        onClose={ toggleDrawer(false)}    
                                        sx={{

                                        }}
                                    >
                                        <Box
                                            sx= {{
                                                width: '400px'
                                            }}
                                        >
                                            <Typography 
                                                variant='h4'

                                                sx={{
                                                    textAlign: 'center',
                                                    mt: 5
                                                }}
                                            >
                                                Drawer{bull}Items
                                            </Typography>

                                                <Image
                                                    src="/images/westernMoodboard.png" 
                                                    alt="Western Bag Moodboard" 
                                                    width={309}
                                                    height={368}
                                                />


                                        <Box
                                            sx={{
                                                ml:3
                                            }}
                                        >

                                        </Box>
                                        <Typography variant='h6'
                                            sx={{
                                                ml:3
                                            }}
                                        >
                                                Home
                                        </Typography>
                                        <Typography variant='h6'
                                            sx={{
                                                ml:3
                                            }}
                                        >
                                                Monthly Expenses
                                        </Typography>
                                            <Typography variant='h6'
                                            sx={{
                                                ml:3
                                            }}
                                        >
                                                Categories
                                        </Typography>
                                        <Typography variant='h6'
                                            sx={{
                                                ml:3
                                            }}
                                        >
                                                Budget Goals
                                        </Typography>

                                        <Typography variant='h6'
                                            sx={{
                                                ml:3
                                            }}
                                        >
                                                Wins
                                        </Typography>
                                        </Box>
                                    </Drawer>
                                </Toolbar>

                                <Toolbar>
                                    <Typography
                                        color='secondary'
                                    >
                                        Hello
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                            
                        

                        </Box>




                    <Box
                        sx={{
                            mt: 5,
                        }}
                    >

                        <MenuIcon 
                                color='info'
                                sx={{
                                    fontSize: '40px'
                                }}
                            />

                        <StartIcon
                        sx={{
                            color:'#6f9c9b',
                            ml: 4
                        }}
                        />
                        <StarsIcon 
                            color='secondary'

                            sx={{
                                ml: 5,
                                fontSize: '60px'
                            }}
                        />

                        <StarsIcon 
                        color='primary'

                        sx={{
                            ml: 5
                        }}
                    />
                        <StarsIcon 
                        color='success'

                        sx={{
                            ml: 5,
                            fontSize: '70px'
                        }}
                    />

                    <StarsIcon 
                        color='info'

                        sx={{
                            ml: 5,
                            fontSize: '50px'
                        }}
                    />

                    <StarsIcon 
                        color='error'
                        fontSize='medium' //default to medium, 24px
                        sx={{
                            ml: 5
                        }}
                    />
                    {/* Contrast text of success.constrastText */}
                    <StarsIcon 
                        fontSize='large'
                        sx={{
                            ml: 5,
                            color: '#7a625b'
                        }}
                    />


                    </Box>

                        <Typography variant="h1">Test Colors of Buttons</Typography>

                        <Box
                        sx={{
                            maxWidth: 700, // makes the buttons not stretch across the whole page
                        }}
                        >
                            <Grid container spacing={2} className="paletteTestButtons"> 
                                <Grid item xs={3}>
                                    <Button fullWidth variant="contained" 
                                    sx = {{
                                        // ml: 2,
                                        border: '2px solid',
                                        borderColor: 'primary.contrastText',
                                        borderRadius: 2,
                                    }}
                                    >
                                        Primary Button
                                    </Button>
                                </Grid>


                                {/* ml - margin left, adds space between the two buttons */}
                                {/* space units are 8px per unit  */}
                                {/* 8px * 2 =16px */}
                                <Grid item xs={3}>
                                    <Button fullWidth variant="contained" color="secondary" 
                                        sx={{ 
                                            // ml: 2,
                                            border: '2px solid',
                                            borderColor: 'secondary.contrastText',
                                            borderRadius: 2,
                                        }}
                                    >
                                        Secondary Button
                                    </Button>
                                </Grid>

                                <Grid item xs={3}>
                                    <Button fullWidth variant="contained" color="success" 
                                        sx={{
                                            // ml: 2,    
                                            border: '2px solid',
                                            borderColor: 'success.contrastText',
                                            borderRadius: 2,
                                        }}>
                                        Success Button
                                    </Button>
                                </Grid>

                                <Grid item xs={3}> 
                                    <Button fullWidth variant="contained" color="info" 
                                        sx={{ 
                                            // ml: 2,
                                            border: '2px solid',
                                            borderColor: 'info.contrastText',
                                            borderRadius: 2,
                                        }}>
                                        Info Button
                                    </Button>
                                </Grid>
                    

                                <Grid item xs={4} 
                                    // sx= {{ p: 3}}
                                >
                                    <Button fullWidth variant="contained" 
                                        sx ={{ 
                                            border: '2px solid', //border has to come first or else it will be overridden by the primary border color
                                            backgroundColor: "#6f9c9b",
                                            borderColor: "info.contrastText",
                                            // ml: 2,
                                            borderRadius: 2,
                                            color: "info.contrastText",
                                        }}>
                                        darker info
                                    </Button>
                                </Grid>

                                <Grid item xs={4} 
                                    // sx= {{p: 3}}
                                >
                                            <Button fullWidth variant="contained" 
                                        sx ={{ 
                                            border: '2px solid', //border has to come first or else it will be overridden by the primary border color
                                            backgroundColor: "#a9c9c8",
                                            borderColor: "info.contrastText",
                                            // ml: 2,
                                            borderRadius: 2,
                                            color: "info.contrastText",
                                        }}>
                                        lighter info
                                    </Button>
                                </Grid>

                                <Grid item 
                                    xs={4}
                                    // sx = {{ p: 3}} // adds spacing between the buttons
                                >
                                    <Button fullWidth variant="contained" color="error" sx= {{
                                        border: '2px solid',
                                        borderColor: 'error.contrastText',
                                        borderRadius: 2,
                                        color: "error.contrastText",
                                    }}>
                                        Error Button
                                    </Button>
                                </Grid>

                            </Grid>
                        </Box>
              
                        <Paper className="testPaper" sx= {{width: 300}}>
                            <Typography 
                            sx={
                                {mt: 2, 
                                letterSpacing: '0.08em', 
                                textAlign: 'center',
                                border: '2px solid',
                                borderRadius: 2,
                                borderColor: 'text.primary',
                                }}
                            >
                                    test{bull}of{bull}the{bull}budget{bull}calculator
                            </Typography> 
                        </Paper>

                        <Button
                            variant="text"
                            color="secondary"
                            sx={{
                                mt: 3
                            }}
                        >
                            Text Button variant
                        </Button>

                        <Button
                            variant="outlined"
                            color="error"
                            sx={{
                                mt:3,
                                ml: 3
                            }}
                        >
                            Outlined Variant
                        </Button>

                        <Button
                            variant="contained"
                            color="info"
                            sx={{
                                mt: 3,
                                ml: 3
                            }}
                        >
                            Contained Button Variant
                        </Button>
                        
                        <Accordion className="testAccordion"
                            sx= {{
                                mt: 5
                            }}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon fontSize='large' sx= {{
                                color:'info.main',
                                fontSize: '56px',

                                // can't do a border around the icon but can do a border as a box
                                // around the icon
                                // look into alternatives on how to approach this, 
                                // AI recommendation ---> such as making a custom icon with the border included in the design
                                    // can make a custom icon with a creme border and brown border
                                    // that can be used for all colors
                                border: '2px solid',
                                borderColor: 'info.contrastText',
                                borderRadius: 2,
                            }}/>} id="grid-icon" sx= {{
                                border: '2px solid',
                                borderColor: 'text.primary',
                                borderRadius: 2,
                            }}>
                                <Typography variant="h3"
                                    sx= {{ 
                                        letterSpacing: '0.05em',
                                        textTransform: 'lowercase',

                                    }}
                                > 
                                    Grid Icon Test
                                </Typography>
                            </AccordionSummary>

                                <AccordionDetails>
                                    <Grid container spacing={2} sx={{mt: 3}}>
                                        <Grid item xs={6} >
                                            {/* p - padding, adds space inside the box around the text */}
                                            <Box sx={{ color: 'text.primary', border: '2px solid', borderColor: 'text.primary', borderRadius: 2, p: 2}}>
                                            Item A
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} >
                                            <Box sx={{ color: 'text.primary', border: '2px solid', borderColor: 'text.primary', borderRadius: 2, p: 2}}>
                                            Item B
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    

                                    {/* how to make an array of buttons for a grid */}
                                    <Grid container spacing={2} sx={{p: 4,mt: 3}}>
                                        {['income', 'spent', 'remaining', 'savings'].map((label) => (
                                            <Grid item xs={6} key={label}>
                                            <Box
                                                sx={{
                                                border: '1px solid',
                                                borderColor: 'text.primary',
                                                p: 2,
                                                borderRadius: 2,
                                                color: 'text.primary',
                                                }}
                                            >
                                                {label}
                                            </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </AccordionDetails>

                                <AccordionActions>
                                    <Button variant="contained" color="info" sx={{ 
                                            border: '2px solid', 
                                            borderColor: 'info.contrastText', 
                                            borderRadius: 2
                                        }}>
                                        Cancel
                                    </Button>
                                    <Button variant="contained" color="secondary"
                                        sx={{ 
                                            border: '2px solid',
                                            borderColor: 'secondary.contrastText',
                                            borderRadius: 2,
                                        }}
                                    >
                                        Save
                                    </Button>
                                </AccordionActions>
                        </Accordion>

                        <Box
                        sx={{
                            maxWidth: 900, // makes the buttons not stretch across the whole page
                            mt:5,
                        }}
                        >
                            <Grid container spacing={2} className="stripedButtons"
                                // sx={{
                                    // mt:5,
                                    // maxWidth: 900
                                // }} 
                            >

                        
                                {/* // AI recommendation after query about 
                                // vertical stripes on buttons or background
                                // feel free to play and tweak */}
                                <Grid item xs={3}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            border: '2px solid',
                                            borderColor: 'primary.contrastText',
                                            // fontSize: '30px',
                                            borderRadius: 5,
                                            color: '#FFF8F1',
                                            background: `
                                            repeating-linear-gradient(
                                                to right,
                                                #eb1580,        /* base pink */
                                                #563d2d 8px,
                                                #b0c418 8px,    /* stripe color */
                                                #8ab1b0 12px
                                            )
                                            `,
                                        
                                            // mt: 5,
                                        }}
                                    >
                                        striped button
                                    </Button>
                                </Grid>

                                <Grid item xs={3}>
                                    {/* Other examples of the gradient from the CSS site. Play around with this */}
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                background: `
                                                repeating-linear-gradient(
                                                    to right,
                                                    #eb1580,        /* base pink */
                                                    #563d2d 20px,
                                                    #b0c418 20px,    /* stripe color */
                                                    #8ab1b0 25px
                                                )
                                                `,
                                                color: '#FFF8F1',
                                                border: '2px solid',
                                                borderColor: 'primary.contrastText',
                                                // fontSize: '15px',
                                                borderRadius: 5,
                                                // mt: 5,
                                                // ml: 2
                                            
                                        }}
                                    >
                                    repeat gradient button 1
                                    </Button>
                                </Grid>    

                                <Grid item xs={3}>
                                    <Button
                                        fullWidth 
                                        variant="contained"
                                        sx={{
                                            background: `
                                            repeating-linear-gradient(
                                                45deg,
                                                #eb1580,        /* base pink */
                                                #563d2d 15%,
                                                #b0c418 20px,    /* stripe color */
                                                #8ab1b0 20%
                                            )
                                            `,
                                            color: '#FFF8F1',
                                            border: '2px solid',
                                            borderColor: 'primary.contrastText',
                                            // fontSize: '15px',
                                            borderRadius: 5,
                                            // mt: 5,
                                            // ml:5, // adds space between the buttons
                                            
                                        }}
                                        >
                                        repeat gradient button 2
                                    </Button>
                                </Grid>

                                <Grid item xs={3}>
                                    <Button

                                
                                variant="contained"
                                sx={{
                                    background: `
                                        repeating-linear-gradient(
                                            transparent,
                                            #eb1580 40px       
                                            
                                        ),
                                        repeating-linear-gradient(
                                            0.25turn,
                                            transparent,
                                            #b0c418 20px 
                                        );
                                    `,
                                    color: '#FFF8F1',
                                    border: '2px solid',
                                    borderColor: 'primary.contrastText',
                                    // fontSize: '15px',
                                    borderRadius: 5,
                                    // mt: 5,
                                    // ml:5
                                    
                                }}
                                >
                                repeat gradient button 3
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>

                        <Card sx={{ 
                                mt: 5, 
                                width: 300, //changed from maxWidth
                                height: 250,
                                border: '2px solid', 
                                borderColor: 'text.primary', 
                                borderRadius: 2,
                                letterSpacing: '0.05em',
                                display: 'flex',
                                flexDirection: 'column'
                                // position: 'relative', // allows the icon to be positioned relative to the card
                            }}
                        >
                            <CardHeader
                                title="Testing header of Card"
                                titleTypographyProps={{
                                        variant: 'h6',
                                        textTransform: 'lowercase', 
                                        letterSpacing: '0.05em', 
                                        color: 'text.primary',
                                        textAlign: 'center'
                                }}
                            />

                            <CardContent
                                sx={{
                                    // brings the Button to the bottom of the card
                                    flexGrow: 1, 
                                }}
                            >
                                <Typography
                                    sx={{
                                        textTransform: 'lowercase',
                                    }}
                                >
                                    Testing Card Content details to see what adding information would look like.
                                </Typography>
                            </CardContent>

                            <CardActions
                                sx={{
                                    justifyContent: 'flex-end', // moves the button to the right side of the card
                                }}
                            >
                                <Button variant="contained" color="primary"
                                    sx={{
                                        border: '2px solid',
                                        borderColor: 'primary.contrastText',
                                        borderRadius: 2,
                                        color: 'primary.contrastText',
                                    }}
                                >
                                    <Tooltip title="Add Expense" placement="bottom">
                                        <StarPurple500Icon 
                                            aria-label="add-expense"
                                            sx={{ 
                                                mr: 1 
                                                // WANT TO MOVE STAR BUTTON TO BOTTOM RIGHT CORNER OF THE CARD
                                            }} 
                                        />
                                    </Tooltip>
                                    Add Expense
                                </Button>
                            </CardActions>
                        </Card>

                        <Box sx={{ mt: 5}}>
                            <Tabs 
                                value={value} 
                                onChange={handleChange}
                                textColor="secondary" // changes text color of selected tab
                                indicatorColor="secondary" //change underline color of selected tab
                            > 
                                <Tab label="Primary Tab"/>
                                <Tab label="Secondary Tab" 
                                    // sx= {{ 
                                    //     color: 'secondary.main',  // choose color of unselected tab text. selected tab text color is determined by textColor in Tabs component
    
                                    // }}
                                />
                                <Tab label="Info Tab" 
                                    // sx = {{ 
                                    //     color: 'info.main'
                                    // }}
                                />
                                <Tab label="Success Tab" 
                                    // sx = {{ 
                                    //     color: 'success.main'
                                    // }}
                                />
                                <Tab label="Error Tab" 
                                    // sx = {{ 
                                    //     color: 'error.main'
                                    // }}
                                />
                            </Tabs>
                        </Box>
                        
                        <Box 
                            component="form"
                            sx = {{
                                p: 5
                            }}
                        >
                            <Stack 
                                direction="row"
                                spacing={4}
                            >
                                <TextField 
                                    required
                                    label="TextField Outlined"
                                    variant="outlined"
                                    
                                />

                                <TextField
                                    label=" TextField Filled"
                                    variant="filled"
                                    autoFocus
                                />

                                <TextField 
                                    label="TextField Standard"
                                    variant="standard"
                                    placeholder="Enter Amount"

                                />

                                <TextField 
                                    variant="filled"
                                    label="Password Filled"
                                    type="password"
                                    helperText="Enter Password | text turn pink. click it"
                                    color="secondary" // changes color of text when selecting the TextField

                                />

                                  <TextField 
                                    variant="filled"
                                    label="Email Filled"
                                    type="email"
                                    helperText="Enter Email"
                                />
                         
                                <TextField
                                    error
                                    label="Testing Error Input"
                                    variant="filled"
                                    helperText="Incorrect Entry"
                                    defaultValue="Groceries"
                                />
                                
                                <TextField 
                                    disabled
                                    label="Testing disabled"
                                    variant="standard"
                                />

                                <TextField 
                                    label="InputProps Field"
                                    InputProps= {{
                                        readOnly: true
                                    }}
                                    variant="filled"
                                    helperText="InputProps read only"
                                />

                                <TextField 
                                    label="slotProps readonly Field"
                                    helperText="slotProps readonly field"
                                    slotProps= {{
                                        input: {
                                            readOnly: true
                                        }
                                    }}
                                    multiline rows={3} // makes TextField taller 

                                />
                            </Stack>


                            {/* commented out for now. Try using to test change in values */}
                            <TextField
                                label="State Variables"
                                value={selectedValue}
                                onChange={(e) => setSelectedValue(e.target.value)}
                            /> 

                        </Box>


                        
                        <Button
                            color="secondary"
                            variant="contained"
                            onClick={handleOpenModal}

                            sx={{
                                border: '2px solid',
                                borderColor: 'secondary.contrastText',
                                borderRadius: 2,
                                mt: 2
                            }}
                        >
                            Open Sample Modal
                        </Button>

                        <Modal
                            open={openModal}
                            onClose={handleCloseModal}
                        >
                            {/* alternative to center the modal:

                             <Box
                                sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                }}
                            >
                            
                            
                            */}
                            <Box
                                sx={{
                                    p:2,
                                    position: 'absolute',
                                    top: '50%',
                                    // right: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',

                                    /**
                                     * should center the Modal but currently, isn't working
                                     */
                                    // display: 'flex',
                                    // alignItems: 'center',
                                    // justifyContent: 'center'
                                }}
                            >
                                <Paper
                                    sx= {{
                                        width: 300,
                                        height: 200,                                    
                                        boxShadow: 10,


                                    }}
                                >
                                    <Typography variant="h3"
                                   
                                    >
                                        Modal Sample
                                    </Typography>
                                    
                                    <Typography variant="h6">
                                        Here is a sample of what the modal inside could look like.
                                    </Typography>
                                </Paper>
                            </Box>
                        </Modal>


                        <Button
                            color="info"
                            variant="contained"
                            onClick={handleOpenDialog}

                            sx={{
                                border: '2px solid',
                                borderColor: 'info.contrastText',
                                borderRadius: 2,
                                mt: 2, 
                                ml: 3
                            }}
                        >
                            Open Dialog Box
                        </Button>

                        <Dialog
                            open={openDialog}
                            onClose={handleCloseDialog}
                            TransitionComponent={Transition}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <DialogTitle>
                                        What is a Dialog modal supposed to look like?
                                </DialogTitle>
                            </Box>

                            <DialogContent dividers>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    mb: 2,
                                    // mt: 2
                                }}>

                                    {/* <Image
                                        src="/images/chocolateNotebook.jpg" 
                                        alt="Chocolate Notebook" 
                                        width='90' 
                                        height='90'
                                    /> */}
                                    {/* <img src="/images/chocolateNotebook.png" 
                                        alt="Chocolate Notebook" 
                                        width='70%' 
                                        height='70%'
                                    /> */}

                                    {/* Image is 618 x 735 */}
                                    {/* 
                                      
                                            70% scaling:
                                            Width: 433px
                                            Height: 515px
                                            50% scaling (smaller):
                                        
                                            50% scaling:
                                            Width: 309px
                                            Height: 368px
                                            60% scaling:

                                            60% scaling:
                                            Width: 371px
                                            Height: 441px
                                            80% scaling (larger):

                                            80% scaling:
                                            Width: 494px
                                            Height: 588px

                                    */}
                                    <Image
                                        src="/images/chocolateNotebook.png" 
                                        alt="Chocolate Notebook" 
                                        width={309}
                                        height={368}
                                    />
                                </Box>
                            </DialogContent>

                                <Box
                                    sx={{
                                        mt: 6,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                        <DialogContentText>
                                            It&apos;s a box with data or information inside
                                        </DialogContentText>
                                </Box>

                            <DialogActions>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={handleCloseDialog}
                                    color="error"
                                    sx={{
                                        border: '2px solid',
                                        borderColor: 'error.contrastText',
                                        borderRadius: 2,
                                        mt: 2, 
                                        ml: 3
                                    }}
                                >
                                    Wrong!
                                </Button>

                                  <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={handleCloseDialog}
                                    color="success"
                                    sx={{
                                        border: '2px solid',
                                        borderColor: 'success.contrastText',
                                        borderRadius: 2,
                                        mt: 2, 
                                        ml: 3
                                    }}
                                >
                                    Right!
                                </Button>
                            </DialogActions>

                        </Dialog>
                       
                       
                    </Box>



                    
                    
                
            </ThemeProvider>
        </>
    )
}