import { Answer } from "./Answer";

export interface Question {
    answer_id: null;
    answers: Answer[];
    feedback_false: string;
    feedback_true: string;
    id: number;
    text: string;
}