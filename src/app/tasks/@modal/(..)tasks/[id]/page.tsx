import React from 'react';
import Modal from "@/components/layout/modal";
import {getTasks} from "@/utils/common";

const Page = ({
                  params: {id},
              }: {
    params: { id: string };
}) => {
    const task = getTasks().find((task) => task.id == id)
    return (
        <Modal route={"/tasks"}>
            <div>
                {task?.id ? (
                    <div className="p-4 ">
                        <div className="mt-2">
                            <div className="px-4 sm:px-0 ">
                                <h3 className="text-base font-semibold leading-7 text-gray-900 ">{task?.name}</h3>
                            </div>

                            <div className="mt-4">
                                <div className="">
                                    <div className="grid grid-cols-2 gap-6">
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
                                                className={`rounded-full p-2 w-3 h-3 
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
        </Modal>
    );
};

export default Page;