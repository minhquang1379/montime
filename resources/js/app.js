import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import NotFound from "./components/Common/NotFound/NotFound";
import Guest from "./components/Guest";

function App() {
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <BrowserRouter>
                <Switch>
                    {/* <Redirect exact from="/" to="/login" /> */}
                    <Route path="/" component={Guest} />
                    {/* <Route path="/app" component={Login} /> */}
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
