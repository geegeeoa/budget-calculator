import TextField from '@mui/material/TextField';
import MaterialTable from '@material-table/core';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme/theme';
import { BudgetTable } from '@/components/budgetTable';
import { Typography } from '@mui/material';


export default function Budget() {

    const sampleBudgetColumns= [
              { title: 'Adı', field: 'name' },
              { title: 'Soyadı', field: 'surname' },
              { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
              { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
    ]


    // data added to table
    return (
      <ThemeProvider
        theme={theme}
      >
        <div>
          <Typography
            variant='h1'
          >
            Budget Table
          </Typography>
          <MaterialTable
            columns={[
              { title: 'Adı', field: 'name' },
              { title: 'Soyadı', field: 'surname' },
              { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
              { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
            ]}
            data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
            title="Budget Calculator"
            options={{
              headerStyle: {
                              fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
                              backgroundColor: '#EAD0B5',
                              color: '#563d2d',
                          },
              rowStyle: {
                  fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
                  color: '#563d2d',
              },
            }}
          />
        </div>
      </ThemeProvider>
    )
}