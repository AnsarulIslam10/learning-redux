import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { ITask } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
    task: ITask;
}

export default function TaskCard({task}: IProps) {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsers)
  const assignedUser = users.find(user=> user.id === task.assignedTo)
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className={cn("size-3 rounded-full", {
            "bg-green-500" : task.priority === 'high',
            "bg-orange-500" : task.priority === 'medium',
            "bg-gray-500" : task.priority === 'low',
          })}></div>
          <h1 className={cn({"line-through": task.isCompleted})}>{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button onClick={()=> dispatch(deleteTask(task.id))} variant="link" className="p-0 text-red-500 cursor-pointer">
            <Trash2 />
          </Button>
          <Checkbox checked={task.isCompleted} onClick={()=> dispatch(toggleCompleteState(task.id))} className="cursor-pointer" />
        </div>
      </div>
      <p>Assigned To {assignedUser ? assignedUser.name : null}</p>
      <p className="mt-5">{task.description}</p>
    </div>
  );
}
