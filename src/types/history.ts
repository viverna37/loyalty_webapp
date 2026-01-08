
export type HistoryItem = {
    created_at: string;
    amount: number;
    type: "credit" | "debit";
};

export type History = {
    history: HistoryItem[];
};

export type HistoryItemUI = {
    amount: number
    date: string
    type: 'credit' | 'debit'
}


