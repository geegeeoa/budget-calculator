import  { Column } from "@material-table/core";
import { BudgetRow } from "@/interfaces";

/* 
simpler version
    const formatCurrency = (price: number) => `$${price.toFixed(2)}`;
*/

// Intl.NumberFormat is more robust and handles edge cases 
// like negative numbers, 
// large numbers, and different locales
// adds comma separator for large amounts 
//(i.e. $2,500 instead of $2500)
const formatCurrency = (price: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

export const columnsBudget: Array<Column<BudgetRow>> = [
    {
        title: "Date",
        field: "date",
    },
    {
        title: "Store",
        field: "store",
    },{
        title: "Withdrawal",
        field: "withdrawal",
        render: (rowData) => formatCurrency(rowData.withdrawal),
    },{
        title: "Deposit",
        field: "deposit",
        render: (rowData) => formatCurrency(rowData.deposit),
    },
    {
        title: "Balance",
        field: "balance",
        render: (rowData) => formatCurrency(rowData.balance),
    },
    {
        title: "Notes",
        field: "notes",
    }

]