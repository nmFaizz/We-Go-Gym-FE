"use client"
import Button from "@/components/Button"
import MainLayout from "@/layouts/MainLayout"
import Link from "next/link"
import { useForm, FormProvider } from "react-hook-form"

import Input from "@/components/forms/Input"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import api from "@/lib/api"
import { setId } from "@/lib/cookie"
import { ApiError, ApiResponse } from "@/types/api"
import { UserLoginResponse } from "@/lib/auth"

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
    const { handleSubmit } = methods

    const router = useRouter()

    const { mutate } = useMutation<
        ApiResponse<UserLoginResponse>, 
        ApiError, 
        LoginFormValues
    >({
        mutationFn: async (data: LoginFormValues) => {
            const res = await api.post("/user/login", data, {
                baseURL: process.env.NEXT_PUBLIC_API_URL,
            })
            return res.data
        },
        onSuccess: (data) => {
            setId(data.data.id)
            toast.success("Login Berhasil")
            if (data.data.role === "admin") {
                router.push("/admin/entry")
                return;
            } 
            router.push("/dashboard")
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    const onSubmit = (data: LoginFormValues) => {
        mutate(data)
    }

    return (
        <MainLayout withNavbar={false} withMarginY={false}>
            <div className="flex h-screen md:ax-h-screen overflow-hidden">
                <div className="flex-1  rounded-xl lg:block hidden">
                    <Image 
                        src="/assets/gymbro.png"
                        alt="Gym Bro"
                        width={647}
                        height={950}
                    />
                </div>

                <div className="relative flex-1 flex flex-col justify-center">
                    <div className="absolute top-10 right-10 w-40 h-40 bg-primary blur-[120px] opacity-70 rounded-full z-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-20 w-40 h-40 bg-primary blur-[120px] opacity-70 rounded-full z-20 pointer-events-none" />
                    <FormProvider {...methods}>
                        <form className="mx-5" onSubmit={handleSubmit(onSubmit)}>
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

                            <Button 
                                type="submit"
                                className="w-full flex justify-center mt-12"
                            >
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