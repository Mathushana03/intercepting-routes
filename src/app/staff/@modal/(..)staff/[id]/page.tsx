import React from 'react';
import Modal from "@/components/layout/modal";
import {getStaff} from "@/utils/common";
import Image from "next/image";

const Page = ({
                  params: {id},
              }: {
    params: { id: string };
}) => {
    const staff = getStaff().find((item) => item.id == id)
    return (
        <Modal route="/staff">
            {staff?.id ? (
                <div className="p-4">
                    <div className="text-xl font-bold">
                        Staff details
                    </div>
                    <div className="">
                        <Image
                            alt={staff.name}
                            src={staff.profile_url}
                            className="w-full object-cover bg-contain"
                            width={300}
                            height={300}
                        />
                        <div className="flex justify-center items-center text-center ">
                            <div>
                                <div className="font-bold">
                                    {staff.name}
                                </div>
                                <div>
                                    {staff.email}
                                </div>
                                <div>
                                    {staff.role}
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

        </Modal>
    );
};

export default Page;