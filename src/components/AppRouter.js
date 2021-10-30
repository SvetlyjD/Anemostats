import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../routes";
import { Main_route } from "../Utils/const";

function AppRouter() {
    return (
        <Switch>
            {routes.map(({ path, component }) =>
                <Route path={path} component={component} key={component} exact />
            )}
            <Redirect to={Main_route} />
        </Switch>
    );
}

export default AppRouter;
