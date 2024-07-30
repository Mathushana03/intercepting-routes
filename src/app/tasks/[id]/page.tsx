import React from 'react';
import TaskDetails from "@/app/tasks/partials/task-details";

const TaskPage = ({
                      params: {id},
                  }: {
    params: { id: string };
}) => {

    return (
        <TaskDetails taskId={id} />
    );
};

export default TaskPage;