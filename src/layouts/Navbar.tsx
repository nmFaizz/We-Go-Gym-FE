"use client";
import Button from "@/components/Button";
import useUserQuery from "@/hooks/useUserQuery";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const { data: user } = useUserQuery();

    return (
        <header className="flex items-center justify-between bg-primary rounded-[8px] px-[20px] md:px-[30px] py-[16px] md:py-[24px] mx-[10px] md:mx-[32px] my-3 md:my-5 text-dark">
            <div className="flex items-center gap-4 lg:gap-24">
                <figure>
                    <Image 
                        src="/logo.png"
                        alt="Logo"
                        width={117.32}
                        height={37}
                    />
                </figure>

                <nav>
                    <ul className="hidden md:flex items-center gap-5 lg:gap-16 font-semibold md:text-2xl">
                        <li>
                            <Link
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#about-us"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#review"
                            >
                                Review
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>
        
            {!user?.data.id ? (
                <Link href="/login">
                    <Button variant="dark">
                        Login 
                    </Button>
                </Link>
            ) : (
                <Link href="/dashboard">
                    <Button variant="dark">
                        Dashboard
                    </Button>
                </Link>
            )}
        </header>
    )    
}