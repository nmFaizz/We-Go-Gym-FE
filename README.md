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
    * **Admin-only:** Scanning verifikasi pengunjung via QR.
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

* **Next.js (TypeScript):** Framework React untuk pengembangan aplikasi web fullstack dengan dukungan server-side rendering dan API routes.
* **React.js (TypeScript):** Library JavaScript untuk membangun antarmuka pengguna yang interaktif dan dinamis.
* **TanStack Query (React Query):** Library untuk pengelolaan data fetching, caching, dan state asynchronous di React.
* **react-hook-form:** Library ringan untuk mengelola form di React dengan performa tinggi dan validasi yang fleksibel.
* **Axios:** Library HTTP client berbasis promise untuk melakukan request ke API secara efisien.
* **Tailwind CSS:** Framework utility-first untuk styling UI dengan cepat dan konsisten melalui class-class siap pakai.
