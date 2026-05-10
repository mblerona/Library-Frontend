import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Layout from "./ui/components/layout/Layout";
import HomePage from "./ui/pages/home/HomePage/HomePage";
import BooksPage from "./ui/pages/BooksPage";
import AuthorsPage from "./ui/pages/AuthorsPage";
import CountriesPage from "./ui/pages/CountriesPage";
import BookDetailsPage from "./ui/pages/BookDetailsPage";
import AuthorDetailsPage from "./ui/pages/AuthorDetailsPage";
import CountryDetailsPage from "./ui/pages/CountryDetailsPage";
import CategoryStatisticsPage from "./ui/pages/CategoryStatisticsPage";
import LoginPage from "./ui/pages/auth/LoginPage/LoginPage";
import RegisterPage from "./ui/pages/auth/RegisterPage/RegisterPage";
import ProtectedRoute from "./ui/components/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/home" replace />} />

                    <Route path="home" element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />

                    <Route element={<ProtectedRoute />}>
                        <Route path="books" element={<BooksPage />} />
                        <Route path="authors" element={<AuthorsPage />} />
                        <Route path="countries" element={<CountriesPage />} />
                        <Route path="categoryStatistics" element={<CategoryStatisticsPage />} />

                        <Route path="books/:id" element={<BookDetailsPage />} />
                        <Route path="authors/:id" element={<AuthorDetailsPage />} />
                        <Route path="countries/:id" element={<CountryDetailsPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;