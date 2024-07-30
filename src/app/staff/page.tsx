import React from 'react';
import {getStaff} from "@/utils/common";
import Image from "next/image";
import Link from "next/link";

const StaffPage = () => {
    return (
        <div className="mt-10 ">
            <div>
                <div className="font-bold">
                    Staff
                </div>
                <span className="text-sm">
                        List of staff
                </span>
            </div>
            <div className="grid grid-cols-4 gap-6 mt-6">
                {getStaff().map((item) => (
                    <div key={item.id} className="shadow-md rounded-md border border-gray-100 p-4 ">
                        <Link key={item.id} href={`/staff/${item.id}`} className="w-full">
                            <div>
                                <Image
                                    alt={item.name}
                                    src={item.profile_url}
                                    className="w-full object-cover  bg-contain "
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className="flex items-center justify-center mt-2">
                                {item.name}
                            </div>
                            <div className="flex items-center justify-center mt-2 text-sm">
                                {item.role}
                            </div>
                        </Link>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default StaffPage;