import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/HomePage";
import { PosterPage } from "./pages/PostersPage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ContactPage } from "./pages/ContactPage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/plakater" element={<PosterPage />} />
          <Route path="/omos" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
