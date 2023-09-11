import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layout/MainLayout";

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
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
