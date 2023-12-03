import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";
import ReviewPage from "./ReviewPage";
import InquiryPage from "./InquiryPage";
import ShopPage from "./ShopPage";
import AboutPage from "./AboutPage";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/inquiry" element={<InquiryPage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
