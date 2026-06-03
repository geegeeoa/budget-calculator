import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme/theme';
import SideNavBar from '@/components/sideNavBar';
import { useEffect, useMemo, useRef, useState } from 'react';
import { BudgetRow } from '@/interfaces';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

// const CategoryCard = styled(Card)(({theme}) => ({
//     border: '2px solid',
//     borderRadius: 2,
//     borderColor: theme.palette.text.primary,
//     width: 300,
//     height: 200
// }));



export default function MonthlyOverview(){


    // get items from local storage & parse in to array of objects
    // retrieve the Categories of each item (maybe as a Set so it's unique?)


    /// TO DO: Research on useRef vs useState for this data, 
    // since we don't need to trigger a re-render when we update 
    // this data, useRef is more appropriate and efficient

    const [ expenseHistoryData, setExpenseHistoryData ] = useState<Array<BudgetRow>>([]);
    
    // retrieve all Categoies of exepenses
    const getExpenseCategories = () => {
        return [...new Set(expenseHistoryData
            .map((expense) => expense.category)
            .filter((category) => 
                !category.toLowerCase().includes("paycheck") && !category.toLowerCase().includes("deposit")
            ))]
    }

    // retrieves data from local storage and stores in state 
    // useEffect is needed to avoid trying to access local storage on 
    // the server side during SSR, which would cause an error since 
    // local storage is only available in the browser
    useEffect(() => {
        const localStorageExpenses = localStorage.getItem('expenseHistory');

        if (localStorageExpenses) { 

            const parsedExpenses = JSON.parse(localStorageExpenses) as Array<BudgetRow>;
            setExpenseHistoryData(parsedExpenses);
        }
    }, [])


    // expenseCategories is derived from expenseHistoryData
    //useMemo avoids a re-render that useEffect could cause
    // It will
    // only recompute the categories when expenseHistoryData changes,
    //  which is more efficient.
    const expenseCategories = useMemo(() => {
        
            // recommendation to useMemo instead of useEffect for getExpenseCategories, 
            // since it gets it's data from state variable
            // useMemo should avoid re-render that useEffect causes. It will
            // only recompute the categories when expenseHistoryData changes,
            //  which is more efficient.

        return [...new Set(expenseHistoryData
        .map((expense) => expense.category)
        .filter((category) => 
            !category.toLowerCase().includes("paycheck") && !category.toLowerCase().includes("deposit")
        ))]
    }, [expenseHistoryData]);

    console.log("expenseCategories in MonthlyOverview: ", expenseCategories);

  
    
    return (
        <ThemeProvider
            theme={theme}
        >
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100vh',
                    p: 4,
                    pt: 8, // to account for the height of the Nav Bar
                    // needed to make the font of Material Table our defaulted style
                    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
                     '& *': {
                        fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
                    },
                }}
            >
                <SideNavBar />

                <Typography
                    variant="h1"
                >
                    Monthly Overview
                </Typography>

                
                <Card
                    sx={{
                        border: '2px solid',
                        borderRadius: 2,
                        borderColor: 'text.primary',
                        width: 300,
                        height: 200
                    }}
                >

                    <CardHeader 
                        title={"Expense Categories"}
                    />

                    <CardContent>
                    $35.33 spent this month
                    </CardContent>
                </Card>
                
                {/* <Card
                    sx={{
                       <
                    }}
                > 

                </Card> */}

            </Box>
        </ThemeProvider>
    )
}