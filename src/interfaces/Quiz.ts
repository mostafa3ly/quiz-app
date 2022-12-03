import { Question } from "./Question";

export interface Quiz {
    created: string;
    description: string;
    id: number;
    modified: string;
    questions_answers: Question[];
    score: number;
    title: string;
    url: string;
}