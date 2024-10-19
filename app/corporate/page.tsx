"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { CorporateDetail } from "..//util/type";
export default function Corporate() {
    const [corporate, setCorporate] = useState<CorporateDetail[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`${process.env.API_ADDRESS}/corporate`, {
                cache: "no-cache",
                method: "GET",
            });
            const data = await result.json();
            setCorporate(data.corporate as CorporateDetail[])
            console.log(data.corporate);

        };
        fetchData();
    }, [])


    return (
        <div className="mx-auto container p-5">
            <h1 className="block font-semibold  text-4xl py-8 px-4 ">企业消息</h1>
            <div className="flex flex-wrap ">
                {corporate.map((item, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-2 flex justify-center items-center">
                        <Card shadow="sm" isPressable>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow="sm"
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover h-[240px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

    );
}