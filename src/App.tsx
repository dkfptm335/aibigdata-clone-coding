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
import {Notfound} from "./pages/notfound";

function App() {
    return (
        <Wrap>
            <Header/>

            <Routes>
                {/* 최상위 경로에 Main 컴포넌트 라우팅 */}
                <Route path="/" element={<Main/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="/schedule" element={<Schedule/>}/>
                <Route path="/apply" element={<Apply/>}/>
                <Route path="/award" element={<Award/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>

            <Footer/>
        </Wrap>
    );
}

const Wrap = styled.main`
    display: flex; // Wrap 컴포넌트의 자식 요소들이 Flexbox 레이아웃을 사용
    flex-direction: column; // Flexbox의 자식 요소들이 수직으로 배치

    margin: 0 auto; // 상하 마진 0, 좌우 마진 auto → 컴포넌트를 수평 중앙에 위치
    width: 1200px; // 컴포넌트의 좌우 너비 1200픽셀 고정
`;

export default App;