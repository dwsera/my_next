"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { usePathname } from "next/navigation";

export function CustomNavbar() {
    const pathname = usePathname(); 

       // 更新 menuItems 数组为对象数组
    const menuItems = [
        { name: "WEEW", href: "/" },
        { name: "比赛", href: "/products" },
        { name: "新闻", href: "/news" },
        { name: "更多", href: "/corporate" },
    ];

    // 立即根据 pathname 设置 activeIndex，避免初始化时 HOME 高亮
    const getInitialActiveIndex = () => {
        const index = menuItems.findIndex(item => item.href === pathname);
        return index !== -1 ? index : 0; // 如果找不到，默认为 0
    };

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = useState(getInitialActiveIndex());


    useEffect(() => {
        const index = menuItems.findIndex(item => item.href === pathname);

        if (index !== -1) {
            setActiveIndex(index);
        } else {
            // 如果当前路径不在 menuItems 中，默认设置为 HOME
            setActiveIndex(0);
        }
    }, [pathname]);

    const handleMenuItemClick = (index: number) => {

        setActiveIndex(index); // 更新选中的索引
    };

    return (
        <Navbar
            isBordered
            maxWidth="full"
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            {/* //缩起来 */}
            <NavbarContent className="sm:hidden " justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            {/* 缩起来后显示的标题 */}
            <NavbarContent className="sm:hidden pr-3 " justify="center">
                <NavbarBrand>
                    <Link className="font-bold text-inherit" href="/">WEEW</Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 " justify="end">
                <NavbarBrand>
                    <Link className="font-bold text-inherit" href="/" >WEEW</Link>
                </NavbarBrand>
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} isActive={activeIndex === index} >
                        <Link href={item.href} aria-current={activeIndex === index ? "page" : undefined} color={activeIndex === index?"primary":"foreground"}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}

            </NavbarContent>

            <NavbarContent justify="end">
                <ThemeSwitcher />
            </NavbarContent>

            {/* 外框 */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            color={activeIndex === index ? "warning" : "foreground"}
                            className="w-full"
                            href={item.href} // 使用对应的 href 属性
                            size="lg"
                            onClick={() => handleMenuItemClick(index)}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}