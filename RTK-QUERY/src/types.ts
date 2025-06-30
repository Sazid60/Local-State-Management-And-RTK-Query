export interface ITask {
    _id: string
    title: string
    description: string
    dueDate: string
    isCompleted: boolean
    priority: "High" | "Medium" | "Low",
    assignedTo: string | null
}

export interface IUser {
    id: string
    name: string
}