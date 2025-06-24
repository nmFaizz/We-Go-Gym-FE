"use client"
import Button from "@/components/Button"
import MainLayout from "@/layouts/MainLayout"
import Link from "next/link"
import { useForm, FormProvider } from "react-hook-form"

import Input from "@/components/forms/Input"

type LoginFormValues = {
    username: string
}

export default function LoginPage() {
    const methods = useForm({
        defaultValues: {
            username: ""
        }
    })

    return (
        <MainLayout withNavbar={false}>
            <div className="flex h-screen">
                <div className="flex-1 bg-slate-700 rounded-xl mx-4">
                    
                </div>

                <div className="flex-1 flex flex-col justify-center">
                    <FormProvider {...methods}>
                        <form className="mx-4">
                            <h1 className="text-primary text-4xl font-bold">
                                LOGIN
                            </h1>
                            <p>Silakan Masuk Dengan Akun Anda</p>
                            
                            <div className="space-y-5 mt-16">
                                <Input 
                                    id="email"
                                    placeholder="Masukkan Username"
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