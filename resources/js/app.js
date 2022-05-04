import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import NotFound from "./components/Common/NotFound/NotFound";
import Home from "./components/Home";

function App() {
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
