import React from 'react';
import {Header} from "./layouts/Header";
import styled from "styled-components";
import {Footer} from "./layouts/Footer";
import {Route, Routes} from "react-router-dom";
import {Main} from "./pages/main";
import {Detail} from "./pages/detail"
import {Schedule} from "./pages/schedule"
import {Apply} from "./pages/apply";
import {Award} from "./pages/award";

function App() {
    return (
        <Wrap>
            <Header/>

            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="/schedule" element={<Schedule/>}/>
                <Route path="/apply" element={<Apply/>}/>
                <Route path="/award" element={<Award/>}/>
                {/*<Route path="*" element={<Notfound/>}/>*/}
            </Routes>

            <Footer/>
        </Wrap>
    );
}

const Wrap = styled.main`
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    width: 1200px;
`;

export default App;