import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";

const Clients = () => {
    return(
        <Switch>
            <Route path='/admin/clients' exact>
                <List/>
            </Route>
            <Route path='/admin/clients/:clientId'>
                <Form/>
            </Route>
        </Switch>
    );
}

export default Clients;