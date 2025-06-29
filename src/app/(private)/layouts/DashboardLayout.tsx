"use client"
import UserProfile from "@/components/UserProfile"
import useUserQuery from "@/hooks/useUserQuery"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"
import { Diamond, HistoryIcon, LayoutDashboardIcon, Menu, X, LogOut } from "lucide-react"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import api from "@/lib/api"
import { useRouter } from "next/navigation"
import { removeId } from "@/lib/cookie"
import { ApiError } from "@/types/api"
import { queryClient } from "@/providers/ReactQueryProvider"

type DashboardLayoutProps = {
    widthSize?: "1200" | "720" | "full"
    isAdmin?: boolean
} & React.ComponentPropsWithoutRef<"main">

export default function DashboardLayout({
    className,
    children,
    widthSize = "1200",
    isAdmin = false,
    ...props
}: DashboardLayoutProps) {
    const { data: user } = useUserQuery()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const router = useRouter()

    const { mutate: logout } = useMutation<void, ApiError>({
        mutationFn: async () => {
            await api.post("/user/logout")
        },
        onSuccess: () => {
            queryClient.clear()
            removeId()
            closeMobileMenu()
            toast.success("Logged out successfully!")
            router.replace("/") 
            router.refresh() 
        },
        onError: (error) => {
            toast.error(error.response?.data.message || "Failed to log out")
        }
    })

    return (
        <>
            <header className={`center-xl py-5 w-full flex ${isAdmin ? "justify-end" : "justify-between"} mb-12 relative`}>
                {/* Desktop Navigation */}
                {!isAdmin && (
                    <ul className="hidden md:flex gap-3 md:gap-12 items-center">
                        {menus.map((menu) => (
                            <li key={menu.name} className="mb-4">
                                <Link 
                                    href={menu.href}
                                    className="flex items-center gap-2 text-lg md:text-xl font-semibold text-primary hover:text-secondary transition-colors"
                                >
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Mobile Menu Button */}

                {!isAdmin && (
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 text-primary hover:text-secondary transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                )}

                {/* User Profile */}

                <div className="flex items-center gap-4">
                    <UserProfile 
                        username={user?.data.username}
                    />

                    <button
                        onClick={() => logout()}
                        className="text-primary cursor-pointer"
                    >
                        <LogOut size={22} />
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <>
                        {!isAdmin && ( 
                            <>             
                                <div 
                                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                                    onClick={closeMobileMenu}
                                />
                                
                                <div className="absolute top-full left-0 right-0 bg-dark border border-gray-700 rounded-lg shadow-lg z-50 md:hidden">
                                    <nav className="p-4">
                                        <ul className="space-y-4">
                                            {menus.map((menu) => (
                                                <li key={menu.name}>
                                                    <Link 
                                                        href={menu.href}
                                                        onClick={closeMobileMenu}
                                                        className="flex items-center gap-3 text-lg font-semibold text-primary hover:text-secondary transition-colors py-2 px-3 rounded-md hover:bg-gray-800/50"
                                                    >
                                                        {menu.icon}
                                                        {menu.name}
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <button
                                                    onClick={() => logout()}
                                                    className="flex items-center gap-3 text-lg font-semibold text-primary hover:text-secondary transition-colors py-2 px-3 rounded-md hover:bg-gray-800/50 w-full text-left"
                                                >
                                                    <LogOut size={22} />
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </>
                        )}
                    </>
                )}
            </header>

            <main 
                className={cn(
                    "my-6 md:my-8",
                    [
                        widthSize === "1200" && "center-xl",
                        widthSize === "720" && "center-lg",
                        widthSize === "full" && "center-full",
                    ],
                    className
                )}
                {...props}
            >
                {children}
            </main>
        </>
    )
}

const menus = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: <LayoutDashboardIcon />, 
    },
    {
        name: "History",
        href: "/history",
        icon: <HistoryIcon />,
    },
    {
        name: "Membership plan",
        href: "/membership-plan",
        icon: <Diamond />,
    }
]