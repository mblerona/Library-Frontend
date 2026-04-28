import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./ui/components/layout/Layout";
import HomePage from "./ui/pages/HomePage";
import BooksPage from "./ui/pages/BooksPage";
import AuthorsPage from "./ui/pages/AuthorsPage";
import CountriesPage from "./ui/pages/CountriesPage";
import BookDetailsPage from "./ui/pages/BookDetailsPage";
import AuthorDetailsPage from "./ui/pages/AuthorDetailsPage";
import CountryDetailsPage from "./ui/pages/CountryDetailsPage";
import LoginPage from "./ui/pages/LoginPage";
import ProtectedRoute from "./ui/components/ProtectedRoute";
import RegisterPage from "./ui/pages/RegisterPage";
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                <Route path="books" element={<ProtectedRoute><BooksPage /></ProtectedRoute>} />
                <Route path="authors" element={<ProtectedRoute><AuthorsPage /></ProtectedRoute>} />
                <Route path="countries" element={<ProtectedRoute><CountriesPage /></ProtectedRoute>} />

                <Route path="books/:id" element={<ProtectedRoute><BookDetailsPage /></ProtectedRoute>} />
                <Route path="authors/:id" element={<ProtectedRoute><AuthorDetailsPage /></ProtectedRoute>} />
                <Route path="countries/:id" element={<ProtectedRoute><CountryDetailsPage /></ProtectedRoute>} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;