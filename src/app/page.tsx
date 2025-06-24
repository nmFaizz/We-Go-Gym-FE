import MainLayout from "@/layouts/MainLayout";
import Button from "@/components/Button";
import Image from "next/image";

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

          <Button variant="primary" className="mt-6">
            Join Us
          </Button>
        </div>

        <div>
          <Image 
            src="/assets/woman-boxer.png"
            alt="Hero Image"
            width={525.96}
            height={971}
            className=""
          />
        </div>

        <div className="absolute top-0 right-1/5 bg-primary blur-[150px] z-[-1] w-[200px] h-[200px]">

        </div>

        <div className="absolute left-0 bottom-0 bg-primary blur-[150px] z-[-1] w-[200px] h-[200px]">

        </div>
      </section>

      <section className="relative bg-primary z-10 text-dark rounded-xl md:rounded-[100px] py-16 md:py-32"> 
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
    </MainLayout>
  );
}
