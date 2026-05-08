import type { Task } from '../type/task';
const STORAGE_KEY = 'vite_tasks_app';
export const TaskService = {
    getTasks(): Task[] {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    },

    saveTask(task: Task): void {
        const tasks = this.getTasks();
        tasks.push(task);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
};
