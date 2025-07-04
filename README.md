# WeGoGym

Final Project untuk mata kuliah Konstruksi dan Arsitektur Perangkat Lunak.

## Tim Pengembang 👥

* **Made Satya Dhananjaya** - NRP : 5053231001
* **Nuhito Atmoko** - NRP: 5053231002
* **Nur Muhammad Faiz** - NRP: 5053231008
* **Geraldo Benjamin Nainggolan** - NRP: 5053231014

**Dosen Pembimbing:** Rizky Januar Akbar, S.Kom., M.Eng

---

## Ringkasan Proyek 🏋️‍♀️

WeGoGym adalah sistem manajemen gym komprehensif yang dikembangkan menggunakan bahasa pemrograman Go. Aplikasi ini dirancang untuk menyederhanakan berbagai aspek operasional gym, mulai dari manajemen pengguna dan keanggotaan hingga pemrosesan transaksi dan pencatatan riwayat masuk.

## Fitur ✨

* **Manajemen Pengguna:** Fasilitas lengkap untuk pendaftaran, login, logout, dan akses profil pengguna.
* **Manajemen Keanggotaan yang Efisien:**
    * **Admin-only:** Kelola keanggotaan gym dengan kemampuan membuat, melihat, dan memperbarui detail keanggotaan.
    * **Pengguna:** Proses berlangganan keanggotaan dengan mudah.
    * **Cek Status Keanggotaan:** Verifikasi status keanggotaan pengguna secara instan.
* **Manajemen Sesi Personal Trainer (PT):**
    * Tambahkan dan kelola sesi personal trainer untuk pengguna.
* **Integrasi Pembayaran Midtrans:** Memproses transaksi keanggotaan dan sesi PT dengan mulus melalui Midtrans.
* **Riwayat Masuk Gym:** Catat dan akses riwayat waktu masuk gym setiap pengguna.
* **Generasi Kode QR:** Hasilkan kode QR unik untuk identifikasi pengguna yang cepat.
* **Kontrol Akses Berbasis Peran (RBAC):** Memastikan fungsionalitas yang tepat diakses oleh peran `member` dan `admin`.

---

## Teknologi yang Digunakan 💻

* **Go (Golang):** Bahasa pemrograman utama yang digunakan untuk backend.
* **Gin Web Framework:** Digunakan untuk membangun API RESTful yang cepat dan efisien.
* **GORM:** ORM (Object-Relational Mapping) yang mempermudah interaksi dengan database.
* **PostgreSQL:** Database relasional yang kuat dan andal.
* **Midtrans:** Platform payment gateway untuk memproses transaksi.
* **Logrus:** Pustaka logging yang fleksibel dan terstruktur.
* **go-qrcode:** Pustaka untuk menghasilkan kode QR.
* **godotenv:** Memuat variabel lingkungan dari file `.env`.
* **stretchr/testify:** Pustaka Go untuk pengujian unit, termasuk mock.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
