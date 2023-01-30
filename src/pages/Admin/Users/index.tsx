import { Route, Switch } from "react-router-dom";
import List from "./List";

const Users = () => {
    return(
        <Switch>
            <Route path='/admin/users' exact>
                <List/>
            </Route>
        </Switch>
    );
}

export default Users;