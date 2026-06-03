import dayjs, { Dayjs } from 'dayjs';


export interface BudgetRow {
    date: string; // Date
    store: string;
    withdrawal: number;
    deposit: number;
    balance: number;
    category: string;
    notes: string;
    id: string;
}

// if you need to remove other fields, use
    // Omit<Expense, "id" | "date" | "amount"> & { date: ...}
export interface BudgetRowForm extends Omit<BudgetRow, 'date'>{
    date: Dayjs | null;
}