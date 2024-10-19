"use client";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ProjectRequest } from "..//util/type";
export default function Product() {
  const [project, setProject] = useState<ProjectRequest[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${process.env.API_ADDRESS}/project`, {
        cache: "no-cache",
        method: "GET",
      });
      const data = await result.json();
      setProject(data.projects as ProjectRequest[])
    };
    fetchData();
  }, [])


  return (
    <div>
      {project.map((item, index) => (
        <div key={item.id} className="container mx-auto  lg:py-16 px-4 flex flex-col lg:flex-row justify-between items-start space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <Image
                isZoomed
                width={800}
                height={400}
                alt={item.title} // 使用 item.title 作为 alt 文本，增强可访问性
                src={item.img} // 使用正确的图片地址
                className="w-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col space-y-8">
            <h1 className="text-4xl font-bold tracking-wide uppercase">    {item.title}</h1>
            <p className="text-gray-600 leading-relaxed">
              {item.label}
            </p>
            <div className="flex flex-wrap justify-between">
              {item.details.map((res) => (
                <div className="w-1/3 mb-4 space-y-1" key={res.id}>
                  <span className="block text-sm font-bold uppercase text-gray-500">{res.title_two}</span>
                  <span className="block font-semibold text-gray-900">{res.label_two}</span>
                </div>
              ))}
            </div>

          </div>


        </div>
      ))}
    </div>
  )
}
