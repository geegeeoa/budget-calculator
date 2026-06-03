import Typography from '@mui/material/Typography';
import StarsIcon from '@mui/icons-material/Stars';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { bull } from '@/pages/testColors';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { ImageTooltip } from '@/components/imageTooltip';


export default function SideNavBar() {

    const [ openSideNavBar, setOpenSideNavBar ] = useState(false);

    const toggleDrawer = (newOpenSideNavBar: boolean) => () => {
        setOpenSideNavBar(newOpenSideNavBar);
    } 


    // styles for the text in the Nav Bar 
    // (e.g. Home, Monthly Overview, etc.)
    const drawerTextStyle = {

        // makes the width of the text the width of the text itself instead 
        // of the full width of the box
        width: "fit-content",
        cursor: "pointer",

        // text grows from left side of text (instead of center) - more natural look
        transformOrigin: "left center",

        
        // try 160 and 600 on color transition to see which looks better 
        // //- 160 is more snappy, 600 is more smooth
        //         transition: "transform 160ms ease, color 160ms ease",

        transition: "transform 160ms ease, color 600ms ease",
        
        // change color of text and slighty increase size of text on hover to indicate it's clickable
        "&:hover": {
            transform: "translateX(6px) scale(1.03)",
            color: 'primary.main',
        },

        // remove underline for links
        textDecoration: 'none',
        boxShadow: 'none',
    };

    // makes Tooltip background transparent and removes padding and 
    // box shadow so that only the image shows up 
    // without any default Tooltip styling
    const transparentTooltipStyle = { 
        tooltip: {
                sx: {
                    bgcolor: "transparent",
                    p: 0,
                    boxShadow: "none",
                },
        },

        // arrow: {
        //     sx: {
        //         color: "transparent",
        //     },
        // },

    }


    const makeImageTooltip = (imageFileName: string) => (
        <>
          <Box
            sx={{
                display: 'flex',
                // alignItems: 'flex-end', //center, flex-start, flex-end
            }}
        >
            <Box
                component="img"
                src={`${imageFileName}`}
                alt="Bills, Bills, Bills"
                sx={{
                    //32 was default, 40 is visible, 60 is nice but a bit large
                    width: 40, 
                    height: 40,
                    // borderRadius: '50%',
                    borderRadius: '25%', //2
                    objectFit: 'cover',
                }}
            />

        </Box>
        </>
    )
    
    return (

        <>
            <Box
                sx={{

                    // used to push secondary items to the right side
                    // of the Nav Bar (i.e. like a "Login" button)
                    flexGrow: 1, //flex: 1
                }}
            >
                
                <AppBar
                    sx={{
                        // absolute'| 'fixed' | 'relative'| 'static'| 'sticky'
                        position: 'fixed', 
                        backgroundColor: 'background.default'
                    }}
                >
                    <Toolbar
                        //Toolbar (height) 
                        // variants:  
                            // regular(larger side), 
                            // dense (thinner)
                        variant='dense'  
                      
                    >

                        <IconButton
                            onClick = { () => {
                                setOpenSideNavBar(true);
                            }}
                        >
                                
                            <Tooltip
                                // arrow
                                title="Open Side Panel"
                            >
                                <StarsIcon             
                                    sx={{
                                        fontSize: '30px',
                                        color: 'text.primary',
                                        display: 'flex',
                                        justifyContent: 'flex-start'
                                    }}
                                />   

                            </Tooltip>

                        </IconButton>

                        <Drawer 
                            open={openSideNavBar}
                            onClose={ toggleDrawer(false)}    
                            className="sideNavBar"
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
                                        mt: 5,
                                        mb: 5
                                    }}
                                >
                                    Budget {bull}Calculator
                                </Typography>

                                    <Image
                                        src="/images/westernMoodboard.png" 
                                        alt="Western Bag Moodboard" 
                                        width={309}
                                        height={368}
                                       
                                    />


                            <Box
                                sx={{
                                    ml:3,
                                    // creates space inside the box, between the top of the box and the first item
                                    //padding top, inside spacing from top of box to first item

                                    //start the contents within lower in the box to 
                                    // create more space between the top of the box 
                                    // and the first item
                                    pt: 5, 

                                    flexDirection: 'column',
                                    display: 'flex',
                                }}
                            >
                                <Typography 
                                    variant='h6'
                                    component={Link}
                                    href="/budget"
                                    sx={{
                                        
                                        ...drawerTextStyle
                                    }}
                                >
                                        Home
                                </Typography>

                                <ImageTooltip
                                    imageFileName="/images/songs/worksHardMoneyDonna.jpg"
                                    altText="Softbudget"
                                    placement="right"
                                    width={40}
                                    height={40}
                                >   
                            
                                    <Typography variant='h6'
                                        component={Link}
                                        href="/monthlyOverview"
                                        sx={{
                                            ...drawerTextStyle 
                                        }}
                                    >
                                            Monthly Overview
                                    </Typography>

                                </ImageTooltip>

                                <Typography 
                                    variant='h6'
                                    component={Link}
                                    // href="/expense-tracker"
                                    href="/budget"
                                    sx={{
                                        
                                        ...drawerTextStyle
                                    }}
                                >
                                        Expense Tracker
                                </Typography>

                                <ImageTooltip
                                    imageFileName="/images/songs/noScrubsGif.gif"
                                    altText="No Scrubs"
                                    placement="right"
                                    width={60}
                                    height={60}
                                >

                                    <Typography 
                                        variant='h6'
                                        // component={Link}
                                        // href="/savings"
                                        sx={{
                                            ...drawerTextStyle
                                            
                                        }}
                                    >
                                            Savings
                                    </Typography>
                                </ImageTooltip>

                                <Typography 
                                    variant='h6'
                                    // component={Link}
                                    // href="/sinking-funds"
                                    sx={{
                                        ...drawerTextStyle
                                        
                                    }}
                                >
                                    Sinking Funds
                                </Typography>

                                <ImageTooltip
                                // image shows the transparent background, add a
                                // different color background to the tooltip to see the image better
                                    imageFileName="/images/songs/wuTangClan.jpg"
                                    altText="Wu Tang Clan"
                                    placement="right"
                                    width={40}
                                    height={40}
                                >
                                    <Typography 
                                        variant='h6'
                                        // component={Link}
                                        // href="/cash-card-envelopes"
                                    
                                        sx={{
                                            ...drawerTextStyle
                                            
                                        }}
                                    >
                                        Cash/Card Envelopes
                                    </Typography>
                                </ImageTooltip>

                                <ImageTooltip
                                    imageFileName="/images/songs/worksHardMoneyDonna.jpg"
                                    altText="Softbudget"
                                    placement="right"
                                    width={40}
                                    height={40}
                                >
                                    <Typography 
                                        variant='h6'
                                        // component={Link}
                                        // href="/budget-by-paycheck"

                                        sx={{
                                            ...drawerTextStyle
                                            
                                        }}
                                    >
                                        Budget by Paycheck
                                    </Typography>
                                </ImageTooltip>

                                    
                                <ImageTooltip
                                    imageFileName="/images/songs/billsBillsBills.jpeg"
                                    altText="Bills Bills Bills"
                                    placement="right"
                                    width={40}
                                    height={40}
                                >

                                    <Typography 
                                        variant='h6'
                                        // component={Link}
                                        // href="/bills"
                                        sx={{
                                            ...drawerTextStyle
                                            
                                        }}
                                    >
                                            Can you pay my bills?
                                    </Typography>

                                </ImageTooltip>
                               

                            </Box>


                            </Box>
                        </Drawer>

                    {/* 
                        'flexGrow' expands the space after this Typography
                        
                        NavBar will look like:
                            [ menu icon ][ softbudget ------------------- ][ login ]
                        
                    */}
                        <Typography 
                            variant='h6'
                            sx={{
                                flexGrow: 1 //flex: 1
                                // textAlign: 'center',
                            }}
                        
                        > 
                            Budget Calculator
                        </Typography>

                        {/* 
                        
                            Box component 
                            display - flex
                            flex: 1
                            justifyContent: flex-end

                            This gives:
                            [ menu icon        ][    softbudget    ][        login ]
                        
                        */}

                        <Box
                        >
                            <Button>
                                Login
                            </Button>
                        </Box>

                        

                    </Toolbar>

                </AppBar>
                
            </Box>
        
        </>

    )
    
}



