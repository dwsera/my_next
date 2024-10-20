"use client";
import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { usePathname } from "next/navigation";

// 将 menuItems 数组定义在组件外部，避免在每次渲染时重新创建
const menuItems = [
    { name: "WEEW", href: "/" },
    { name: "比赛", href: "/products" },
    { name: "新闻", href: "/news" },
    { name: "更多", href: "/corporate" },
];

export function CustomNavbar() {
    const pathname = usePathname();

    // 获取初始的 activeIndex
    const getInitialActiveIndex = () => {
        const index = menuItems.findIndex(item => item.href === pathname);
        return index !== -1 ? index : 0; // 如果找不到，默认为 0
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(getInitialActiveIndex());

    useEffect(() => {
        const index = menuItems.findIndex(item => item.href === pathname);
        setActiveIndex(index !== -1 ? index : 0); // 更新 activeIndex
    }, [pathname]); // 仅依赖 pathname

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
            {/* 小屏幕时的菜单开关 */}
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            {/* 小屏幕时的品牌标题 */}
            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <Link className="font-bold text-inherit" href="/">WEEW</Link>
                </NavbarBrand>
            </NavbarContent>

            {/* 大屏幕时的导航菜单 */}
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarBrand>
                    <Link className="font-bold text-inherit" href="/">WEEW</Link>
                </NavbarBrand>
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} isActive={activeIndex === index}>
                        <Link
                            href={item.href}
                            aria-current={activeIndex === index ? "page" : undefined}
                            color={activeIndex === index ? "primary" : "foreground"}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            {/* 右侧的主题切换器 */}
            <NavbarContent justify="end">
                <ThemeSwitcher />
            </NavbarContent>

            {/* 菜单内容 */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            color={activeIndex === index ? "warning" : "foreground"}
                            className="w-full"
                            href={item.href}
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
