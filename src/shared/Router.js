import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import TodoDetail from 'pages/Todo Detail';

const Router = () => {
  return (
    // 보일러플레이트로 그냥 쓰자
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo-detail/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
