import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import WeddingParty from './pages/WeddingParty';
import Venue from "./pages/Venue";
import Accomodations from "./pages/Accomodations";
import Schedule from "./pages/Schedule";
import Registry from "./pages/Registry";
import RSVP from "./pages/RSVP";

function App() {
    return(
        <React.Fragment>
            <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    exact
                    path="/WeddingParty"
                    element={<WeddingParty />}
                />
                <Route
                    exact
                    path="/Venue"
                    element={<Venue />}
                />
                <Route
                    exact
                    path="/Accomodation"
                    element={<Accomodations />}
                />
                <Route
                    exact
                    path="/Schedule"
                    element={<Schedule />}
                />
                <Route
                    exact
                    path="/Registry"
                    element={<Registry />}
                />
                <Route
                    exact
                    path="/RSVP"
                    element={<RSVP />}
                />
            </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;