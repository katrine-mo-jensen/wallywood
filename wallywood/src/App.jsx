import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/home/HomePage";
import { PosterPage } from "./pages/posters/PostersPage";
import { AboutPage } from "./pages/about/AboutPage";
import { NotFoundPage } from "./pages/notFound/NotFoundPage";
import { ContactPage } from "./pages/contact/ContactPage";
import { LoginPage } from "./pages/login/LoginPage";
import { PosterDetails } from "./pages/posters/PosterDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/plakater" element={<PosterPage />} />
          <Route path="/details/:slug" element={<PosterDetails/>}/>
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
