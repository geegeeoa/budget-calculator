import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import Typography from '@mui/material/Typography';

type tooltipPlacement= 
    'top-start' | 'top' | 'top-end' | 
    'left-start' | 'left' | 'left-end' | 
    'right-start' | 'right' | 'right-end' | 
    'bottom-start' | 'bottom' | 'bottom-end';

    interface ImageTooltipProps {
    imageFileName: string;
    altText: string;

    // ReactNode type allows for any valid React child, including strings, numbers, elements, or an array of these types.
    
    // ReactElement type is more specific and only allows for a single React element. This is useful when you want to ensure that the children prop is a valid React element that can be rendered, rather than just any renderable content.
    // e.g. <Typography>, <Button>, etc.
    children: React.ReactElement;     
    width?: number;
    height?: number;
    placement: tooltipPlacement; 
    // backgroundColor?: string;
}


export function ImageTooltip({
    imageFileName,
    altText,
    children, 
    width = 40, // default width
    height = 40, // default height
    placement = 'right' // default placement
    // backgroundColor = 'transparent' // default background color
}: ImageTooltipProps) {



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
                    alt={altText}
                    sx={{
                        //32 was default, 40 is visible, 60 is nice but a bit large
                        width: width, 
                        height: height,
                        // borderRadius: '50%',
                        borderRadius: '25%', //2
                        objectFit: 'cover',
                    }}
                />

            </Box>
        </>
    )

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
    return (

        <Tooltip
            arrow
            placement={placement}
            title= {
                makeImageTooltip(imageFileName)
            }
            sx={{
                backgroundColor: 'transparent',
            }}
            // makes Tooltip background transparent and removes padding and 
            // box shadow so that only the image shows up 
            // without any default Tooltip styling
            slotProps={
                transparentTooltipStyle
            }
        >   
            {children}
        </Tooltip>
    )
}