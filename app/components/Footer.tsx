"use client";
import React from "react";

export function Footer() {
    return (
        <div className="w-full h-96 bg-[url('/foot.jpg')] bg-cover bg-center">
            <div className="w-full h-full bg-gray-500 bg-opacity-50 backdrop-blur-sm">
                <div className="flex justify-around p-10">
                    <div className="flex flex-col text-center">
                        <h1 className="block font-semibold text-white text-3xl">比赛</h1>
                        <span className="block  text-white text-1xl my-1">西甲</span>
                        <span className="block  text-white text-1xl my-1">法甲</span>
                        <span className="block  text-white text-1xl my-1">意甲</span>
                        <span className="block  text-white text-1xl my-1">英超</span>
                        <span className="block  text-white text-1xl my-1">德甲</span>
                    </div>
                    <div className="flex flex-col text-center">
                        <h1 className="block font-semibold text-white text-3xl">队伍</h1>
                        <span className="block  text-white text-1xl my-1">拜仁</span>
                        <span className="block  text-white text-1xl my-1">巴萨</span>
                        <span className="block  text-white text-1xl my-1">皇马</span>
                    </div>
                    <div className="flex flex-col text-center">
                        <h1 className="block font-semibold text-white text-3xl">更多</h1>
                        <span className="block  text-white text-1xl my-1">西甲</span>
       
                    </div>
                    <div className="flex flex-col text-center">
                        <h1 className="block font-semibold text-white text-3xl">联系我们</h1>
                        <span className="block  text-white text-1xl my-1">西甲</span>
                        <span className="block  text-white text-1xl my-1">法甲</span>

                    </div>
                </div>
            </div>
        </div>
    );
}