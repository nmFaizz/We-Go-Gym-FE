import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="flex items-center justify-between not-odd:bg-primary rounded-[8px] px-[20px] md:px-[30px] py-[16px] md:py-[24px] mx-[10px] md:mx-[32px] my-3 md:my-5 text-dark">
            <div className="flex items-center md:gap-24">
                <figure>
                    <Image 
                        src="/logo.png"
                        alt="Logo"
                        width={117.32}
                        height={37}
                    />
                </figure>

                <nav>
                    <ul className="hidden md:flex items-center gap-5 md:gap-16 font-semibold md:text-2xl">
                        <li>
                            <Link
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                            >
                                Review
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>

            <Link href="/login">
                <Button variant="dark">
                    Login 
                </Button>
            </Link>
        </header>
    )    
}