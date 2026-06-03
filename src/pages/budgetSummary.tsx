import { Box, Button, Card, CardContent, Chip, Typography } from '@mui/material';


//AI Suggested code. Use to test the theme
// use accompanying theme page (extendedTheme.tsx) to see the colors and typography in action
export default function BudgetSummaryCard() {
  return (
    <Card sx={{ maxWidth: 420 }}>
      <CardContent>
        <Chip label="On Track" color="success" sx={{ mb: 2 }} />

        <Typography variant="h5" gutterBottom>
          Monthly Budget
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Remaining balance: <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>$842</Box>
        </Typography>

        <Button variant="contained" color="primary">
          Add Expense
        </Button>
      </CardContent>
    </Card>
  );
}