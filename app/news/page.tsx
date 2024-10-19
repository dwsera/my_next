"use client";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { NewsDetail } from "..//util/type";
export default function News() {
    const [news, setNews] = useState<NewsDetail[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`${process.env.API_ADDRESS}/news`, {
                cache: "no-cache",
                method: "GET",
            });
            const data = await result.json();
            setNews(data.news as NewsDetail[])
            console.log(data.news);

        };
        fetchData();
    }, [])

    return (
        <div>
            {news.map((item: NewsDetail, index: number) => (
                <div key={index} className="container mx-auto lg:py-16 px-4 flex flex-col lg:flex-row justify-between items-start space-y-12 lg:space-y-0 lg:space-x-12">
                    <div className="lg:w-1/2 flex flex-col space-y-8">
                        <h1 className="text-4xl font-bold tracking-wide uppercase">{item.title}</h1>
                        <p>{item.time}</p>
                        <p className="text-gray-600 leading-relaxed">{item.label}</p>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <Image
                            isZoomed
                            // as={NextImage}
                            width={800}
                            height={400}
                            alt={item.title}
                            src={item.img} // 确保有正确的图片地址
                            className="w-full"
                        />
                    </div>
                </div>
            ))}

        </div>
    )
}
