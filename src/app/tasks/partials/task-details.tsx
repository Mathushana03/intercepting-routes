import React from 'react';
import {getTasks} from "@/utils/common";
import Link from "next/link";
import {ArrowLeftIcon} from "@heroicons/react/16/solid";

const TaskDetails = ({taskId,}: { taskId: string }) => {
    const task = getTasks().find((task) => task.id == taskId)
    return (
        <div>
            {task?.id ? (
                <div className="p-4 ">
                    <div className="mt-10">
                        <div className="flex justify-between">
                            <div className="px-4 sm:px-0 ">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">{task?.name}</h3>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Details of task.</p>
                            </div>

                            <div>
                                <Link href={`/tasks`}
                                      className="flex items-center gap-2 hover:text-indigo-500 text-gray-500">
                                    <ArrowLeftIcon className="h-4 w-5"/>
                                    Back to Tasks
                                </Link>
                            </div>


                        </div>

                        <div className="border border-gray-100 shadow-md rounded-md mt-4">
                            <div className="p-4">
                                <div className="grid grid-cols-4 gap-6">
                                    <div className="">
                                        Due Date
                                    </div>
                                    <div>
                                        {task.due_date}
                                    </div>
                                    <div>
                                        Assignee
                                    </div>
                                    <div>
                                        {task.assignee}
                                    </div>
                                    <div>
                                        Status
                                    </div>
                                    <div className="flex gap-2 items-center capitalize">
                                        <div
                                            className={`rounded-full p-2 w-4 h-4 
                                        ${task.status == "in-progress"
                                                ? "bg-orange-500"
                                                : task.status == "pending"
                                                    ? "bg-red-500"
                                                    : "bg-teal-500"}`}>
                                        </div>
                                        {task.status.replace("-", " ")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    Task Not Found
                </div>
            )}
        </div>
    );
};

export default TaskDetails;