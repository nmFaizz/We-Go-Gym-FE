"use client"
import Button from "@/components/Button"
import MainLayout from "@/layouts/MainLayout"
import Link from "next/link"
import { useForm, FormProvider } from "react-hook-form"

import Input from "@/components/forms/Input"

type LoginFormValues = {
    email: string,
    password: string
}

export default function LoginPage() {
    const methods = useForm<LoginFormValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    return (
        <MainLayout withNavbar={false} withMarginY={false}>
            <div className="flex min-h-screen">
                <div className="flex-1 bg-slate-700 rounded-xl lg:block hidden">
                    
                </div>

                <div className="relative flex-1 flex flex-col justify-center">
                    <div className="absolute top-10 right-10 w-40 h-40 bg-primary blur-[120px] opacity-70 rounded-full z-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-20 w-40 h-40 bg-primary blur-[120px] opacity-70 rounded-full z-20 pointer-events-none" />
                    <FormProvider {...methods}>
                        <form className="mx-5">
                            <h1 className="text-primary text-4xl font-bold">
                                LOGIN
                            </h1>
                            <p>Silakan Masuk Dengan Akun Anda</p>
                            
                            <div className="space-y-5 mt-16">
                                <Input 
                                    id="email"
                                    placeholder="Masukkan Email"
                                    label="Email"
                                />

                                <Input 
                                    id="password"
                                    type="password"
                                    placeholder="Masukkan Password"
                                    label="Password"
                                />
                            </div>

                            <Button className="w-full flex justify-center mt-12">
                                Masuk
                            </Button>

                            <p className="text-center mt-8">
                                Belum punya akun? &nbsp;
                                <Link 
                                    href="/register"
                                    className="text-primary"
                                >
                                    Daftar
                                </Link>
                            </p>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </MainLayout>
    )
}