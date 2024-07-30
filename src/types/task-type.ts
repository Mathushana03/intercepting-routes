export interface Task {
    id: string;
    name: string;
    due_date: string; // Use string for simplicity, you can also use Date type if you handle it properly
    status: 'pending' | 'in-progress' | 'completed';
    assignee: string;
}