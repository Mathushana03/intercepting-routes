import React from 'react';
import {getTasks} from "@/utils/common";
import Link from "next/link";

const Page = () => {

    return (
        <div className="mt-10 ">
            <div>

                {/*heading*/}
                <div>
                    <div className="font-bold">
                        Tasks
                    </div>
                    <span className="text-sm">
                        List of tasks
                    </span>
                </div>
                <div className="divide-y divide-gray-200 mt-8 ">
                    {getTasks().map((task) => (
                        <div className="pb-2 pt-2 group hover:bg-gray-50 w-full " key={task.id}>
                            <Link key={task.id} href={`/tasks/${task.id}`} className="w-full">
                                {task.name}
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Page;