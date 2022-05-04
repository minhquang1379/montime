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
                    <Route path="/" component={Guest} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
