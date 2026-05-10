import axios from "../axios/axios";
import type { CategoryStatistics } from "../api/types/CategoryStatistics";

const categoryStatisticsRepository = {
    findAll: async (): Promise<CategoryStatistics[]> => {
        const response = await axios.get<CategoryStatistics[]>("/category-statistics");
        return response.data;
    },
};

export default categoryStatisticsRepository;