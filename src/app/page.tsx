import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { userReviews } from "./constants/userReviews";
import UserProfile from "@/components/UserProfile";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <MainLayout 
      withNavbar
      containerSize="full"
    >
      <section className="relative h-[120vh] md:h-[80vh] center-xl flex md:items-center justify-between flex-col md:flex-row gap-10">
        <div className="max-w-[420px]">
          <h1 className="font-bold font-mont text-8xl w-[80px] md:w-[105px]">
            WE GO <br />
            <span className="text-primary">GYM</span>
          </h1>
          <p className="">Your Future Dream Body Starts Now.</p>

          <Link href="/membership-plan">
            <Button variant="primary" className="mt-6">
              Join Us
            </Button>
          </Link>
        </div>

        <div className="md:mt-0 mt-[-120px] z-[-1]">
          <Image 
            src="/assets/woman-boxer.png"
            alt="Hero Image"
            width={525.96}
            height={971}
          />
        </div>

        <div className="absolute top-0 right-1/5 bg-primary blur-[100px] md:blur-[150px] z-[-1] w-[100px] h-[100px] md:w-[200px] md:h-[200px]"></div>
        <div className="absolute left-0 bottom-0 bg-primary blur-[100px] md:blur-[150px] z-[-1] w-[100px] h-[100px] md:w-[200px] md:h-[200px]"></div>
      </section>

      <section id="about-us" className="relative bg-primary z-10 text-dark rounded-xl md:rounded-[100px] py-16 md:py-32"> 
        <div className="center-xl">
          <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>

          <p className="mt-16 md:mt-20 md:text-2xl">
            We Go Gym adalah lebih dari sekadar tempat kebugaran — kami adalah komunitas yang mendukung Anda untuk menjadi versi terbaik dari diri Anda. Sejak berdiri, misi kami adalah membantu setiap anggota mencapai tujuan kesehatan dan kebugaran mereka melalui pendekatan yang personal, lingkungan yang positif, dan fasilitas berstandar tinggi.
          </p>

          <p className="mt-12 md:text-2xl">
            Bergabunglah bersama kami, dan rasakan sendiri perbedaan yang bisa dibuat oleh komunitas yang mendukung dan lingkungan yang inspiratif.
          </p>
        </div>
      </section>

      <section id="review" className="center-xl py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">
          Reviews
        </h1>

        <div className="relative">
          {/* <Image 
            src="/assets/male-gym.png"
            width={899}
            height={1350}
            alt="gymbro"
            className="absolute left-0"
          /> */}

          {/* <Image 
            src="/assets/fem-gym.png"
            width={899}
            height={1350}
            alt="gymsis"
            className=""
          /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-12 rounded-xl">
            {userReviews.map((data, index) => (
              <div 
                key={index}
                className="bg-black/25 backdrop-blur-[27px]"
              >
                <UserProfile username={data.name} />

                <p>{data.review}</p>
                
                <div className="flex gap-3 justify-center mt-5">
                  {new Array(data.rating).fill(0).map((_, i) => (
                    <Star className="text-primary" key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
