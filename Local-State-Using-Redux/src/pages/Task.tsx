import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AddTaskModal } from "@/module/AddTaskModal"
import TaskCard from "@/module/TaskCard"
import { selectFilter, selectTasks, updateFilter } from "@/redux/features/task/taskSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"


export default function Task() {
    // const tasks = useAppSelector((state) => state.todo.tasks)

    // we can do this more efficient way by grabbing the tasks inside task slice

    const tasks = useAppSelector(selectTasks)
    const filter = useAppSelector(selectFilter)

    console.log(tasks)
    console.log(filter)

    const dispatch = useAppDispatch()


    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-end items-center">
                <h1 className="mr-auto">Tasks</h1>
                <Tabs defaultValue="all" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger onClick={() => dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal />
            </div>

            <div className="space-y-5 mt-5">
                {tasks.map((task) => (<TaskCard task={task} key={task.id} />))}
            </div>

        </div>
    )
}
