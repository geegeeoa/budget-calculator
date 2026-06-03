import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme/theme';
import { BudgetTable } from '@/components/budgetTable';
import SideNavBar from '@/components/sideNavBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Budget() {

    
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
                    variant='h1'
                >
                    {/* Budget Table */}
                    Expense Tracker
                </Typography>


            {/* 
                Move Monthly expenses header/card from budget page
                to it's own components
                
            */}
                <Card
                    sx={{
                        border: '2px solid',
                        borderRadius: 3,
                        mt:4,
                        mb:4
                    }}
                >
                    <CardHeader 
                        title="Monthly Expenses"
                    />

                    <CardContent>

                    </CardContent>
                </Card>
                <BudgetTable />
            </Box>
        </ThemeProvider>
    )
}