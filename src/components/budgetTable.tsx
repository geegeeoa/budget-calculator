import { columnsBudget } from "@/components/columnsBudget";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { theme } from '@/theme/theme';
import React from "react";
import MaterialTable, { Column } from "@material-table/core";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import { budgetData } from "@/components/mockBudgetData";
import { BudgetRow, BudgetRowForm } from "@/interfaces";
import InputAdornment from '@mui/material/InputAdornment';


// have table layout here, with columns from columnsBudget, and data from budgetData (which is an array of objects with the same fields as the columns)
export function BudgetTable () {


    // handles current state of expenses
    // const [ expenses, setExpenses ] = useState<Array<BudgetRow>>(budgetData);
    const [ expenses, setExpenses ] = useState<Array<BudgetRow>>([]);

    /**
    *   const [expenses, setExpenses] =
            useState<Expense[]>(() => {
                const storedExpenses = localStorage.getItem("expenses");

                if (storedExpenses) {
                    return JSON.parse(storedExpenses);
                }

                return mockData;
            });


            THEN IN LOCAL HOST:

            useEffect(() => {
                localStorage.setItem(
                    "expenses",
                    JSON.stringify(expenses)
                );
            }, [expenses]);
     */

    // handles opening and closing of Add Expense Modal
    const [ openAddExpenseModal, setOpenAddExpenseModal ] = useState(false);

    const newExpenseFormTemplate: BudgetRowForm = {
        date: dayjs(),
        store: "",
        withdrawal: 0,
        deposit: 0,
        balance: 0,
        category: "",
        notes: "",
        id: crypto.randomUUID(),
    }

    // keep track of user input on new expense
    const [ newExpenseForm, setNewExpenseForm ] = useState<BudgetRowForm>(newExpenseFormTemplate);


    const SNACKBAR_MESSAGES = {
        modalSuccess: "Expense added Modal Successfully!",
        dialogSuccess: "Expense added!",
        error: "Error adding expense. Please try again.",
    }


    const enableModal = false;

    // TO DO: Write docs on how this works

    // handles change of user input
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       
             /**
         * More context on handleChange:
         * e - event object that is passed in when user types in the textfield
         * e.target.name - the name of the textfield that is being typed in 
               * (e.g. "store", "withdrawal", etc.)
         * e.target.value - the value that the user has typed in the textfield
               * if user typed "Walmart" in the "store" textfield, e.target.value would be "Walmart"
               * while the e.target.name would be "store"
               
        Sample Input:
                handleChange called
                budgetTable.tsx:79 e.target.name:  store
                budgetTable.tsx:80 e.target.value:  Walmart

        Once that is added by the user, you will see this in newExpenseForm:
            {
                "date": "",
                "store": "Walmart",
                "withdrawal": 0,
                "deposit": 0,
                "balance": 0,
                "category": "",
                "notes": "",
                "id": "c9c1038c-09ea-40fb-a829-3778626e1749"
            }
         * 
         */
        
        console.log("handleChange called");
        console.log("e.target.name: ", event.target.name);
        console.log("e.target.value: ", event.target.value);
        console.log("event", event);
        const { name, value } = event.target;
        setNewExpenseForm( { ...newExpenseForm, [name]: value });

        /**
         * 
         * AI EXAMPLE:
         * const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setExpenseForm((prev) => ({
            ...prev,
            [name]: value,
        }));
        };
         */

        /**
         * 
         *   
        const { name, value } = e.target;
        let finalValue: any = value;
        
        // Convert to number for numeric fields
        if (['withdrawal', 'deposit', 'balance'].includes(name)) {
            finalValue = value === '' ? 0 : parseFloat(value);
        }
        
        setNewExpenseForm({ ...newExpenseForm, [name]: finalValue });
         */
    }


    // manages users input for the Date Picket
    // adds the users new date to the state that manages form
    const handleDateChange = (newDate: Dayjs | null) => {
        setNewExpenseForm({
            ...newExpenseForm, 
            date: newDate,
        });
    }

    const handleOpenAddExpenseModal = () => {
        setOpenAddExpenseModal(true);
    }

    // handle the "Add" button in the Add Expense Modal being clicked
    const handleAddExpenseModal = () => {

        console.log("handleAddExpenseModal clicked"); 

        const budgetRowToAdd: BudgetRow = {
            ...newExpenseForm,
            date: newExpenseForm.date?.format("YYYY-MM-DD") ?? ""
        }

        console.log("budget row to add in handleAddExpenseModal: ", budgetRowToAdd);

        /**
         * 
         *      const expenseToAdd: Expense = {
                    id: crypto.randomUUID(),
                    ...expenseForm,
                    date: expenseForm.date?.format("YYYY-MM-DD") ?? "",
                    amount: Number(expenseForm.amount),
                };
         */

        // 1- save user entry for expense (state variable before local storage)
        console.log("dateAddExpense field: ", dateAddExpense);

        // 2- close Add Expense Modal
        setOpenAddExpenseModal(false);

        // 3- open Snackbar Modal that says "Expense added!"
        setOpenSnackbarModal(true);
    }

    const [ openAddExpenseDialog, setOpenAddExpenseDialog ] = useState(false);

    // handle open add expense dialog 
    const handleOpenAddExpenseDialog = () => {
        setOpenAddExpenseDialog(true);
    }

    // hanles close add expense dialog
    const handleCloseAddExpenseDialog = () => {
        setOpenAddExpenseDialog(false);
    }

    const handleAddExpenseDialog = (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();

        console.log("handleAddExpenseDialog clicked");

        // Confirm that all fields are filled before adding to expense table

        // const isFieldEmpty = Object.values(newExpenseForm).every(value => value === "" || value == null);


        // temporary until Zod validation is implemented

        //confirms if all fields are filled
        const areAllFieldsFilled = Object.values(newExpenseForm).every((value) => {
            if (typeof value === "string") {
                return value.trim() !== "";
            }
            return value !== null && value !== undefined;
        });

        if (!areAllFieldsFilled) {
            alert("Please fill in all fields before adding the expense.");
            return;
         }

        // 1- save user entry for expense (state variable before local storage)
       const budgetRowToAdd: BudgetRow = {
            ...newExpenseForm,
            date: newExpenseForm.date?.format("YYYY-MM-DD") ?? ""
        }

        console.log("budget row to add in handleAddExpenseModal: ", budgetRowToAdd);

        console.log("dateAddExpenseField", dateAddExpense);

        // Add the new expense to the expenses array
        const updatedExpenses: Array<BudgetRow> = [...expenses, budgetRowToAdd];

        setExpenses(updatedExpenses);

        localStorage.setItem("expenseHistory", JSON.stringify(updatedExpenses));

        // Reset form to template
        setNewExpenseForm(newExpenseFormTemplate);

        // 2- close Add Expense Dialog
        setOpenAddExpenseDialog(false);

        // 3- open snackbar dialog that says "Expense added!"
        setOpenSnackbarDialog(true);
    }

    // handles date selection in the Add Expense Modal and Dialog
    const [ dateAddExpense, setDateAddExpense] = useState<Dayjs | null>(dayjs());

    // handles open/close of Snackbar Dialog (the one that opens when you click "Add" in the Add Expense Dialog)
    const [openSnackbarDialog, setOpenSnackbarDialog] = useState(false);

    const handleCloseSnackbarDialog = (event: React.SyntheticEvent | Event, reason?: string) => {
        
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbarDialog(false);
    };


    const [ openSnackbarModal, setOpenSnackbarModal ] = useState(false);
    

    // should close Add Expense Modal and open Snackbar Modal 
    // //that says "Expense added!" when "Add" button 
    // in Add Expense Modal is clicked
    const handleOpenSnackbarModal = () => {

        setOpenSnackbarModal(true);
    }

    const handleCloseSnackbarModal = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbarModal(false);
    };


// Alert follows tan theme color as background
    const snackbarAlertAction = (handleCloseSnackbar: (event: React.SyntheticEvent | Event, reason?: string) => void) => (
        
            <Alert
                onClose={handleCloseSnackbar}
                severity="success"
                variant="filled"
                sx={{
                    width: '100%',
                    bgcolor: 'background.paper',
                    color: 'text.primary',
                    border: '2px solid',
                    borderColor: 'text.primary',
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                Expense added Modal Successfully!
            </Alert>
        
    )

    // Snackbar is our default success Color Chartreuse
    const snackbarSuccessColor = (handleCloseSnackbar: (event: React.SyntheticEvent | Event, reason?: string) => void, message: string) => (
        <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            variant="filled"
            action={snackbarAction(handleCloseSnackbar)}
            sx= {{
                // color: 'text.primary',
                color: 'text.primary',
                border: '2px solid',
                borderColor: 'primary.main',
                borderRadius: 6,
            }}
        >
            {message}
        </Alert>
    )

    // const snackbarAction = (handleCloseSnackbar: () => void) => (
    const snackbarAction = (
        handleCloseSnackbar: (event: React.SyntheticEvent | Event, reason?: string) => void
    ) => (
        <>
            <Button
                variant="text"
                size="small"
                sx={{
                    color:"text.primary"
                }}
            >
                Undo
            </Button>
            
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleCloseSnackbar}
                sx={{
                    color: 'text.primary'
                }}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
           
        </>
    )
    // // Uncomment to view state changes
    useEffect(() => {
        const localStorageExpenses = localStorage.getItem("expenseHistory");

        // Load from localStorage if available, otherwise use budgetData
        if (localStorageExpenses) {
            try {

                // convert local storage to object
                const parsedExpenses = JSON.parse(localStorageExpenses);

                // Ensure it's an array
                if (Array.isArray(parsedExpenses)) {
                    setExpenses(parsedExpenses);
                } else {
                    // If it's a single object, wrap it in an array
                    setExpenses([parsedExpenses]);
                }
            } catch (error) {
                console.error("Error parsing localStorage:", error);
                setExpenses(budgetData);
            }
        } else {
            // Initialize with budgetData if no localStorage found
            localStorage.setItem("expenseHistory", JSON.stringify(budgetData));
            setExpenses(budgetData);
        }
    }, [])  // Only run on mount


    /**
     * 
     * Save whenever expenses changes
        useEffect(() => {
        localStorage.setItem(
            "expenses",
            JSON.stringify(expenses)
        );
        }, [expenses]);
     */


    // TO DO: add "UNDO" and "X" (close) buttons to the Snackbar w
    // hen an expense is added, and make the "UNDO" button
    //  undo the addition of the expense to the table

    // can also think of other actions that would be helpful to have in the 
    // Snackbar (e.g. "View Expense" that takes you to the row of the 
    // expense you just added, or opens a dialog with the details of the
    //  expense you just added)
    // const addExpenseSnackbarButtons = 

 
    return (
        <>
        
            {enableModal && (
                <>
                    <Button
                        // fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleOpenAddExpenseModal}
                        sx={{
                                border: '2px solid',
                                borderColor: 'primary.contrastText',
                                borderRadius: 2,
                                mb: 2, 
                                mt: 2
                            }}
                    >
                        Add Expense Modal
                    </Button>

                    <Modal
                        open={openAddExpenseModal}
                        onClose={ () => setOpenAddExpenseModal(false)}
                    >
                        <Box
                            sx={{
                                p:2,
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',

                            }}
                        >
                            <Paper
                                className="addExpensePaper"
                                sx={{

                                    // width - 700, height- 400
                                    
                                    width: 700, //800 
                                    height: 400, //600
                            
                                    // to make form centered
                                    display: 'flex',
                                    flexDirection: 'column'
                                
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        // border: '2px solid',
                                        // borderColor: 'secondary.main',
                                        // borderRadius: 2,
                                        ml: 4,
                                        mb: 'auto',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        mt: 2
                                    }}
                                >
                                    Add Expense (modal)
                                </Typography>
                            
                                <Box
                                    className="addExpenseForm"
                                    sx={{
                                        // border: '2px solid',
                                        // borderColor: 'primary.main',
                                        // borderRadius: 2,
                                        ml:4,
                                        mr: 2,
                                        mt: 4,

                                        // keeps header at the top and center the form 
                                        // vertically & horizontally
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',

                                        // puts the textfield in the center
                                        justifyContent: 'normal',
                                    }}
                                >
                                    <Grid container spacing={2}>
                                            <Grid item xs={6}>

                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DatePicker 
                                                            
                                                            label="Date"
                                                            value={dateAddExpense} 
                                                            //onChange={(newDate) => setDate(newDate ?? dayjs())}
                                                            onChange={(newDate) => setDateAddExpense(newDate)} 
                                                             slotProps={{
                                                                textField: {
                                                                    fullWidth: true,
                                                                    sx: {
                                                                        width: '100%',
                                                                    },
                                                                },
                                                            }}
                                                        />
                                                    
                                            </LocalizationProvider>
                                            </Grid>

                                            <Grid item xs={6}>

                                                <TextField 
                                                    fullWidth
                                                    label="Store"
                                                />
                                            </Grid>

                                            <Grid item xs={6}>

                                                <TextField
                                                    fullWidth
                                                    label="Withdrawal"
                                                />
                                            
                                            </Grid>


                                        <Grid item xs={6}>
                                            <TextField 
                                                fullWidth
                                                label="Deposit"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField 
                                                fullWidth
                                                label="Balance"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField 
                                                fullWidth
                                                label="Notes"
                                            />
                                        </Grid> 

                                        
                                        
                                    </Grid>

                                    <Grid container spacing={2}
                                        sx={{
                                            mt: 3,
                                            // border: '3px solid',
                                            display: 'flex',
                                            justifyContent: 'flex-end'
                                        }}
                                    >
                                        <Grid item xs={3}>
                                            <Button
                                                fullWidth
                                                variant="text"
                                                // // inherits copies the color from the parent element
                                                // color="inherit" 
                                                onClick={() => setOpenAddExpenseModal(false)}
                                                sx={{
                                                    color: 'text.primary',
                                                    borderRadius: 4
                                                }}
                                            >
                                                Cancel
                                            </Button>

                                        </Grid>

                                        <Grid item xs={3}>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                onClick={
                                                    // handleOpenSnackbarModal
                                                    handleAddExpenseModal
                                                }
                                                sx={{
                                                    // border: '2px solid',
                                                    // borderColor: 'primary.contrastText',
                                                    borderRadius: 4,
                                                }}
                                            >
                                                Add
                                            </Button>
                         
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>

                        </Box>
                    </Modal>
                </>
            )}


            {/*
                to get the Snackbar to show up outside of the Modal,
                you have to put the snackbar component outside of the
                Modal component in the JSX hierarchy

            */}

            
            <Snackbar 
                open={openSnackbarModal}
                onClose={handleCloseSnackbarModal}
                autoHideDuration={6000}
                // message="Expense added modal!"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                    // create custom Snackbar styling to match our theme
                ContentProps={{
                    sx: {
                        // bgcolor: 'background.paper',
                        // color: 'text.primary',
                        // border: '2px solid',
                        borderColor: 'text.primary',
                        // borderRadius: 2,
                        // boxShadow: 3,
                    }
                }}
            >
                {/* {snackbarAlertAction(handleCloseSnackbarModal)} */}
                {snackbarSuccessColor(handleCloseSnackbarModal, SNACKBAR_MESSAGES.modalSuccess)}
             
                
            </Snackbar>

            {/* // Turn in to a Dialog */}
            <Button
                // fullWidth
                variant="contained"
                color="primary"
                onClick={handleOpenAddExpenseDialog}
                sx={{
                        border: '2px solid',
                        borderColor: 'primary.contrastText',
                        borderRadius: 2,
                        mb: 2, 
                        mt: 2,
                        ml: 2

                    }}
            >
                Add Expense Dialog
            </Button>

            <Dialog
                open={openAddExpenseDialog}
                onClose={handleCloseAddExpenseDialog}
                maxWidth="md" // custom sizing options of the Dialog box
            
                fullWidth

                // to custom size the Dialog dimensions 
                PaperProps={{
                    sx: {
                    width: 700, //800, 700
                    height: 450, //600, 400
                    maxWidth: 'none',
                    },
                }}
        
            >
               
                <DialogTitle>
                    <Typography
                        variant="h3"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        Add Expense
                    </Typography>
                </DialogTitle>

                <DialogContent dividers>
                    <Box
                        className="addExpenseDialog"
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={6}>

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                  
                                        <DatePicker 
                                            
                                            // (Uncontrolled?) defaultValue impacts the initial value of Date field when DatePicker manages its own state 
                                            // value & onChange's use means that React manages the state (Controlled)
                                            // defaultValue={dayjs()}
                                            label="Date"
                                            // value={dateAddExpense}
                                            value={newExpenseForm.date} 
                                            onChange={handleDateChange}
                                            // onChange={(newDate) => setDateAddExpense(newDate)} 
                                            slotProps={{
                                                textField: {
                                                    fullWidth: true,
                                                    sx: {
                                                        width: '100%',
                                                    },
                                                },
                                             }}
                                        />
                                </LocalizationProvider>
                            </Grid>

                        <Grid item xs={6}>

                            <TextField 
                                fullWidth
                                label="Store"
                                name="store"
                                onChange={handleChange}
                                value={newExpenseForm.store}
                                
                            />
                        </Grid>

                        <Grid item xs={6}>

                            <TextField
                                fullWidth
                                label="Withdrawal"
                                name="withdrawal"
                                onChange={handleChange}
                                value={newExpenseForm.withdrawal}
                                type="number"
                                slotProps={{
                                    input: {
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    },
                            }}
                            />
                        
                        </Grid>


                        <Grid item xs={6}>
                            <TextField 
                                fullWidth
                                label="Deposit"
                                name="deposit"
                                onChange={handleChange}
                                value={newExpenseForm.deposit}
                                type="number"
                                slotProps={{
                                    input: {
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    },
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField 
                                fullWidth
                                label="Balance"
                                name="balance"
                                onChange={handleChange}
                                value={newExpenseForm.balance}
                                type="number"
                                slotProps={{
                                    input: {
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    },
                                }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField 
                                fullWidth
                                label="Notes"
                                name="notes"
                                onChange={handleChange}
                                value={newExpenseForm.notes}
                            />
                        </Grid> 

                        <Grid item xs= {12}>
                            <TextField 
                                fullWidth
                                label="Category"
                                name="category"
                                onChange={handleChange}
                                value={newExpenseForm.category}
                            />
                        </Grid>

                        </Grid>
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Grid container spacing={4}
                        sx={{
                            // border: '2px solid',
                            // borderColor: 'info.main',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Grid item xs={4}>
                            <Button
                                fullWidth
                                variant="text"
                                // color="info"
                                onClick={handleCloseAddExpenseDialog}
                                sx={{
                                    color: 'text.primary'
                                }}
                            >
                                Cancel
                            </Button>

                        </Grid>

                        <Grid item xs={4}>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={handleAddExpenseDialog}
                                sx={{
                                    borderRadius: 4
                                }}
                            >
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
              
            </Dialog>
            <Snackbar 
                open={openSnackbarDialog}
                autoHideDuration={6000}
                onClose={handleCloseSnackbarDialog}
                message="Expense added!"
                anchorOrigin={{
                    vertical: 'bottom', 
                    horizontal: 'right' }}
                action={snackbarAction(handleCloseSnackbarDialog)}

                ContentProps={{
                    // Custom Snackbar with tan background and Brown text
                    sx: {
                        borderColor: 'text.primary',
                        // bgcolor: 'background.paper',
                        // color: 'text.primary',
                        // border: '2px solid',
                        // borderColor: 'text.primary',
                        // borderRadius: 6,
                        // boxShadow: 3,
                    }
                }}
                >
                {snackbarSuccessColor(handleCloseSnackbarDialog, SNACKBAR_MESSAGES.dialogSuccess)}
            </Snackbar>
        
            <MaterialTable
                title="Budget Tracker"
                columns={columnsBudget}
                data={expenses}
                options={{
                    filtering: true,
                    sorting:true,
                    paging:true,
                    pageSize: 20,
                    pageSizeOptions: [20, expenses.length],
                    columnsButton: true, //shows list of all columns (let users share/hide)
                    grouping: true, // able to group headers
                    selection: true, //ability to select row
                    headerStyle: {
                        fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
                        // backgroundColor: 'background.default',
                        color: '#563d2d',
                    },
                    rowStyle: {
                        fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
                        color: '#563d2d',
                        // backgroundColor: 'background.default'
                    },
                }}
                onRowClick={(event, rowData) => {

                    console.log("OnRowClick clicked: ", rowData)}
                }
             
                editable={{

                    // oldData- data from the row that is selected
                    onRowDelete: (oldData) => {
                        return new Promise<void>((resolve) => {
                            setTimeout(() => {
                                console.log("expenses state variable: ", expenses);
                                console.log("...expenses: ", ...[expenses]);
                                console.log("oldData: ", oldData );
                           

                                // prevExpenses - current state of expenses before deletion
                                // oldData- data from row selected to be deleted
                                setExpenses((prevExpenses) => {
                                    console.log("prevExpenses: ", prevExpenses);
                                    const updatedExpenses = prevExpenses.filter((expense) => expense.id !== oldData.id
                                ); 
                                    return updatedExpenses;
                                })
                                
                                resolve();
                                
                            }, 1000)

                        }) 
                    },

                    // update data in column on rows
                    onRowUpdate: (newData: BudgetRow, oldData?: BudgetRow) => {
                        return new Promise<void>((resolve) => {
                            console.log("onRowUpdate clicked");
                            console.log("newData: ", newData);
                            console.log("oldData: ", oldData);

                            // keep track of data before change
                            const updatedExpenses = [...expenses];
                            console.log("updatedExpenses before change: ", updatedExpenses);


                            if (oldData) {
                                // access the id of the data you want to switch
                                const updateRowIndex = updatedExpenses.findIndex((expense) => expense.id === oldData.id);
                                
                                console.log("updatedExpeses before change: ", updatedExpenses);
                                // updated the index with the new data
                                updatedExpenses[updateRowIndex] = newData;
                                setExpenses(updatedExpenses);
                                console.log("updatedExpenses after change: ", updatedExpenses);
                            }
                            resolve();
                        })
                    }
                    

                   
                }}
                

                // sx={{
                //     backgroundColor: 'background.default',
                //      '& .MuiTableCell-head': {
                //         bgcolor: 'background.default',
                //         color: 'background.contrastText',
                //     },
                    
                //     '& .MuiTableCell-body': {
                //         bgcolor: 'background.default',
                //     },

                //     '& .MuiTableCell-footer': {
                //         bgcolor: 'secondary.main',
                //         color: 'secondary.contrastText',
                //     },
                // }}
            />
        
        </>
 
    );
}


