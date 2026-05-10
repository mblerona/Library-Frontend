export interface Book {
    id: number;
    name: string;
    category: string;
    state: string;
    availableCopies: number;
    authorFullName: string;
    authorId: number;
    countryName: string;
}

export interface BookFormData {
    name: string;
    category: string;
    authorId: number;
    state: string;
    availableCopies: number;
}