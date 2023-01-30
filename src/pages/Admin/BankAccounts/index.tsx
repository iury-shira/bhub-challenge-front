import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";

const BankAccounts = () => {
    return(
        <Switch>
            <Route path='/admin/bankaccounts/' exact>
                <List/>
            </Route>
            <Route path='/admin/bankaccounts/ownerId/:ownerId'>
                <List/>
            </Route>
            <Route path='/admin/bankaccounts/edit/:bankAccountId'>
                <Form/>
            </Route>
            <Route path='/admin/bankaccounts/create/:ownerId'>
                <Form/>
            </Route>
        </Switch>
    );
}

export default BankAccounts;