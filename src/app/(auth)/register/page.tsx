"use client"
import Button from "@/components/Button"
import MainLayout from "@/layouts/MainLayout"
import Link from "next/link"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"

import Input from "@/components/forms/Input"
import { RadioGroup } from "@/components/forms/Radiobutton"
import api from "@/lib/api"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ApiError } from "@/types/api"

type RegisterFormValue = {
    username: string
    email: string
    gender: string
    password: string
    confirmPassword: string
}

export default function RegisterPage() {
    const methods = useForm<RegisterFormValue>({
        mode: "onBlur",
        defaultValues: {
            username: "",
            email: "",
            gender: "laki-laki",
            password: "",
            confirmPassword: ""
        }
    })
    const { 
        handleSubmit, 
        watch, 
    } = methods
    const password = watch("password")

    const router = useRouter()

    const { mutate, isPending } = useMutation<void, ApiError, RegisterFormValue>({
        mutationFn: async (data: RegisterFormValue) => {
            return await api.post("/user/register", data)
        },
        onSuccess: () => {
            toast.success("Registration successful")
            router.push("/login")
        },
        onError: (error) => {
            toast.error(error.response?.data.message || "Registration failed")
        }
    })

    const onSubmit: SubmitHandler<RegisterFormValue> = (data) => {
        mutate(data)
    }

    return (
        <MainLayout withNavbar={false} withMarginY={false}>
            <div className="flex min-h-screen">
                {/* Left Side (Fixed) */}
                <div className="hidden lg:block fixed top-0 left-0 h-full w-1/2 rounded-r-xl p-4 z-0">
                    <Image 
                        src="/assets/gymbro.png"
                        alt="Gym Bro"
                        width={647}
                        height={950}
                    />
                </div>

                {/* Right Side (Form Content) */}
                <div className="relative flex flex-1 lg:ml-[50%] items-center justify-center p-6 overflow-y-auto w-full">
                    <div className="absolute top-10 right-10 w-40 h-40 bg-primary blur-[120px] opacity-70 rounded-full z-20 pointer-events-none" />
                    <div className="absolute bottom-10 left-50 w-40 h-40 bg-primary blur-[120px] opacity-70 rounded-full z-20 pointer-events-none" />
                    <FormProvider {...methods}>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full"
                        >
                            <h1 className="text-primary text-4xl font-bold">
                                Daftar Akun
                            </h1>
                            <p className="text-gray-600 mt-1">
                                Silakan Masukkan Data Di Bawah.
                            </p>

                            <div className="space-y-5 mt-10">
                                <Input 
                                    id="email"
                                    placeholder="Masukkan Email"
                                    label="Email"
                                    validation={{
                                        required: "Email wajib diisi",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Format email tidak valid"
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Email maksimal 50 karakter"
                                        },
                                        minLength: {
                                            value: 5,
                                            message: "Email minimal 5 karakter"
                                        }
                                    }}
                                />

                                <Input 
                                    id="username"
                                    placeholder="Masukkan Username"
                                    label="Username"
                                    validation={{
                                        required: "Username wajib diisi",
                                        maxLength: {
                                            value: 20,
                                            message: "Username maksimal 20 karakter"
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "Username minimal 3 karakter"
                                        }
                                    }}
                                />

                                <RadioGroup 
                                    name="gender"
                                    label="Jenis Kelamin"
                                    options={[
                                        { label: "Laki-laki", value: "laki-laki" },
                                        { label: "Perempuan", value: "perempuan" }
                                    ]}
                                    direction="row"
                                />

                                <Input 
                                    id="password"
                                    type="password"
                                    placeholder="Masukkan Password"
                                    label="Password"
                                    validation={{
                                        required: "Password wajib diisi",
                                        minLength: {
                                            value: 6,
                                            message: "Password minimal 6 karakter"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "Password maksimal 20 karakter"
                                        }
                                    }}
                                />

                                <Input 
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Konfirmasi Password"
                                    label="Konfirmasi Password"
                                    validation={{
                                        required: "Konfirmasi password wajib diisi",
                                        validate: value => value === password || "Password tidak cocok"
                                    }}
                                />
                            </div>

                            <Button 
                                type="submit"
                                className="w-full mt-12 flex items-center justify-center"
                                isLoading={isPending}
                            >
                                Daftar
                            </Button>

                            <p className="text-center mt-8 text-sm">
                                Sudah Memiliki Akun?{" "}
                                <Link href="/login" className="text-primary font-medium">
                                    Login
                                </Link>
                            </p>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </MainLayout>
    )
}
