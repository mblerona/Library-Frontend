import { useEffect, useState } from "react";
import type { CategoryStatistics } from "../api/types/CategoryStatistics";
import categoryStatisticsRepository from "../repositories/categoryStatisticsRepository";

const useCategoryStatistics = () => {
    const [categoryStatistics, setCategoryStatistics] = useState<CategoryStatistics[]>([]);

    useEffect(() => {
        categoryStatisticsRepository.findAll().then(setCategoryStatistics);
    }, []);

    return categoryStatistics;
};

export default useCategoryStatistics;