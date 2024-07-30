import React from 'react';
import Image from "next/image";
import {getStaff} from "@/utils/common";
import {ArrowLeftIcon} from "@heroicons/react/16/solid";
import Link from "next/link";

const StaffDetailsPage = ({
                              params: {id},
                          }: {
    params: { id: string };
}) => {
    const staff = getStaff().find((item) => item.id == id)
    return (
        <div>
            {staff?.id ? (
                <div className="p-4 mt-10">
                    <div className="flex justify-between">
                        <div className="text-xl font-bold">
                            Personal Details
                        </div>
                        <div>
                            <Link href={`/staff`} className="flex items-center gap-2 hover:text-indigo-500 text-gray-500">
                                <ArrowLeftIcon className="h-4 w-5"/>
                                Back to Staff
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-4 shadow-md border border-gray-100 rounded-md">
                        <div className="col-span-3">
                            <div className="max-w-xl max-h-xl">
                                <Image
                                    alt={staff.name}
                                    src={staff.profile_url}
                                    className="w-full object-cover bg-contain"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="col-span-9 justify-items-center ">
                            <div className="grid grid-cols-2 gap-4 mt-16">
                                <div className="font-bold">
                                    Full Name
                                </div>
                                <div className="">
                                    {staff.name}
                                </div>
                                <div className="font-bold">
                                    Email
                                </div>
                                <div>
                                    {staff.email}
                                </div>
                                <div className="font-bold">
                                    Role
                                </div>
                                <div>
                                    {staff.role}
                                </div>
                                <div className="font-bold">
                                    Phone
                                </div>
                                <div>
                                    {staff.phone}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (<>
                <div className="flex justify-center items-center">
                    Staff Not Found
                </div>
            </>)}
        </div>
    );
};

export default StaffDetailsPage;