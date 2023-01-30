import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";

const BankAccounts = () => {
    return(
        <Switch>
            <Route path='/admin/bankaccounts' exact>
                <List/>
            </Route>
            <Route path='/admin/bankaccounts/:bankaccountId'>
                <Form/>
            </Route>
        </Switch>
    );
}

export default BankAccounts;