import React from 'react';
import Technologies from './pages/Technologies';
import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from './components/layout/PageLayout';
import ServicesPage from './pages/Services';


export default function App() {
  return (
    <PageLayout>
     <BrowserRouter>
      <Routes>
        <Route path='/services' element={<ServicesPage/>} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="*" element={"Page not found"} />
      </Routes>
    </BrowserRouter>
    </PageLayout>
  );
}