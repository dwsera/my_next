"use client";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ProjectRequest, CorporateDetail } from "./util/type";
export default function Home() {
  // const [project, setProject] = useState<ProjectRequest[]>([])
  const [project, setProject] = useState<ProjectRequest | null>(null);
  const [corporate, setCorporate] = useState<CorporateDetail[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const pro_result = await fetch(`${process.env.API_ADDRESS}/project`, {
        cache: "no-cache",
        method: "GET",
      });
      const pro_data = await pro_result.json();
      // setProject(data.projects[0] as ProjectRequest[])
      setProject(pro_data.projects[2] as ProjectRequest); // 只取第一个项目

      const result = await fetch(`${process.env.API_ADDRESS}/corporate`, {
        cache: "no-cache",
        method: "GET",
      });
      const data = await result.json();
      setCorporate(data.corporate as CorporateDetail[])
      console.log(data.corporate, 'corporate');
    };
    fetchData();
  }, [])



  return (
    <div>
      {/* project 不存在，括号内的内容不会被渲染 */}
      {project && (
        <div className="container flex items-start space-y-12 lg:space-y-0 lg:space-x-12 lg:py-16 lg:flex-row mx-auto flex-col">
          <div className="lg:w-1/2">
            <Image
              isZoomed
              width={800}
              height={400}
              alt={project.title}
              src={project.img}
              className="w-full"
            />
          </div>
          <div >
            <div className="flex  justify-between flex-col w-full">
              <div className=" mb-4 space-y-1">
                <h1 className="block font-semibold text-4xl">赛程</h1>
              </div>
              {project.details.map((res, index) => (
                <div className="mb-4 space-y-1" key={res.id || index}>
                  <span className="block text-sm font-bold uppercase text-gray-500">{res.title_two}</span>
                  <span className="block font-semibold ">{res.label_two}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}


      <div className="container mx-auto">
        <h1 className="block font-semibold  text-4xl py-8 px-4 ">最新消息</h1>
        {corporate.length > 0 && (
          <div className=" gap-2 grid grid-cols-12 grid-rows-2 py-8 px-4 w-full">
            <Card className="col-span-12 sm:col-span-6 h-[450px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">{corporate[0].label}</p>
                <h4 className="text-white font-medium text-large">{corporate[0].title}</h4>
              </CardHeader>
              <Image
                isZoomed
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={corporate[0].img}
              />
            </Card>
            <Card className="col-span-12 sm:col-span-3 h-[450px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">{corporate[1].label}</p>
                <h4 className="text-white font-medium text-large">{corporate[1].title}</h4>
              </CardHeader>
              <Image
                isZoomed
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={corporate[1].img}
              />
            </Card>
            <Card className="col-span-12 sm:col-span-3 h-[450px]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">{corporate[2].label}</p>
                <h4 className="text-white font-medium text-large">{corporate[2].title}</h4>
              </CardHeader>
              <Image
                removeWrapper
                isZoomed
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={corporate[2].img}
              />
            </Card>
            <Card isFooterBlurred className="w-full h-[450px] col-span-12 sm:col-span-5">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">{corporate[3].label}</p>
                <h4 className="text-white font-medium text-2xl">{corporate[3].title}</h4>
              </CardHeader>
              <Image
                isZoomed
                removeWrapper

                alt="Card example background"
                className="z-0 w-full h-full  object-cover"
                src={corporate[3].img}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">Available soon.</p>
                  <p className="text-black text-tiny">Get notified.</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  Notify Me
                </Button>
              </CardFooter>
            </Card>
            <Card isFooterBlurred className="w-full h-[450px] col-span-12 sm:col-span-7">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">{corporate[4].label}</p>
                <h4 className="text-white/90 font-medium text-xl">{corporate[4].title}</h4>
              </CardHeader>
              <Image
                isZoomed
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={corporate[4].img}
              />
            </Card>

          </div>)}
      </div>





    </div>
  );
}
