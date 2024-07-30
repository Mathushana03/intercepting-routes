import {Task} from "@/types/task-type";
import {Staff} from "@/types/staff-type";

const tasks: Task[] = [
    {
        id: "1",
        name: 'Design landing page',
        due_date: '2024-08-01',
        status: 'in-progress',
        assignee: 'Jethu',
    },
    {
        id: "2",
        name: 'Implement authentication',
        due_date: '2024-08-05',
        status: 'pending',
        assignee: 'Thuva',
    },
    {
        id: "3",
        name: 'Setup database',
        due_date: '2024-07-30',
        status: 'completed',
        assignee: 'Mathu',
    },
    {
        id: "4",
        name: 'Write unit tests',
        due_date: '2024-08-10',
        status: 'pending',
        assignee: 'Jenu',
    },
];


const staff: Staff[] = [
    {
        id: "1",
        name: 'Jethurshana Jeyaradham',
        role: 'Developer',
        profile_url: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717372800&semt=ais_user', // Assume you have this image in the public/images folder
        email: 'jehtu@mate.ik',
        phone: '+94779843421',
    },
    {
        id: "2",
        name: 'Mathushana Manokaran',
        role: 'Developer',
        profile_url: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717372800&semt=ais_user', // Assume you have this image in the public/images folder
        email: 'mathu@mate.lk',
        phone: '+94779843422',
    },
    {
        id: "3",
        name: 'Jenushana Jeyaradham',
        role: 'Developer',
        profile_url: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717372800&semt=ais_user', // Assume you have this image in the public/images folder
        email: 'jenu@mate.lk',
        phone: '+94779843423',
    },
    {
        id: "4",
        name: 'mathivannan Thuvarakan',
        role: 'Developer',
        profile_url: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717372800&semt=ais_user', // Assume you have this image in the public/images folder
        email: 'thuva@mate.lk',
        phone: '+94779843424',
    },
];

export const getTasks = () => tasks;
export const getStaff = () => staff