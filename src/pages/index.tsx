import { BudgetTable } from "@/components/budgetTable";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


// Option A: use Fontsource (easy)
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "system-ui", "Arial", "sans-serif"].join(","),
  },
});

export default function BudgetHome() {
  return (
        <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      {/* <main> */}
        <h1>Budget Tracker</h1>
        <BudgetTable />
      {/* </main> */}

    </ThemeProvider>
  );
}

