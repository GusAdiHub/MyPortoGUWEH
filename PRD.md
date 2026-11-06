# Product Requirements Document (PRD)
## Personal Developer Portfolio — Gus Adi

**Status:** Draft v1.0  
**Product type:** Personal developer portfolio  
**Primary framework:** Astro + TypeScript  
**Deployment target:** Vercel  
**Primary language:** Indonesian and English

---

## 1. Product Overview

Personal Developer Portfolio adalah website pribadi satu halaman yang memperkenalkan Gus Adi sebagai mahasiswa Informatika dan developer. Website digunakan untuk membangun personal branding, menampilkan kemampuan teknis, mendokumentasikan proyek, serta memudahkan recruiter, calon kolaborator, dan pengunjung menghubungi pemilik portfolio.

Website mengutamakan pengalaman yang cepat, responsif, mudah dipelihara, dan memiliki identitas visual developer. Implementasi menggunakan pendekatan static-first Astro. Fitur interaktif ditambahkan secara selektif agar tidak membebani performa.

## 2. Goals

1. Memperkenalkan profil dan fokus pengembangan pemilik portfolio.
2. Menampilkan proyek pilihan beserta konteks masalah, solusi, teknologi, dan bukti implementasi.
3. Menampilkan pengalaman, pendidikan, dan teknologi yang dikuasai atau sedang dipelajari.
4. Menyediakan statistik serta contribution calendar GitHub.
5. Menyediakan CV yang dapat diunduh.
6. Mendukung Bahasa Indonesia dan English.
7. Menyediakan cara menghubungi pemilik portfolio.
8. Menjadi website statis yang dapat di-deploy dan dipelihara dengan biaya serta kompleksitas rendah.

## 3. Non-goals

- Tidak membangun dashboard admin atau CMS pada MVP.
- Tidak menyediakan autentikasi atau akun pengguna.
- Tidak membuat backend/database khusus untuk konten portfolio.
- Tidak membuat blog pada MVP; struktur dapat dikembangkan kemudian.
- Tidak menampilkan statistik GitHub yang tidak dapat diverifikasi.
- Tidak membuat klaim bahwa proyek sudah live, selesai, atau memiliki fitur tertentu tanpa bukti.
- Tidak membuat sistem lamaran kerja atau formulir yang menyimpan data ke server.

## 4. Target Audience

| Audience | Kebutuhan |
|---|---|
| Recruiter / HR | Memahami profil, kemampuan, proyek, dan kontak dengan cepat |
| Developer | Melihat kualitas implementasi, stack, repository, dan demo |
| Calon kolaborator | Menilai minat, pengalaman, dan cara menghubungi |
| Akademisi | Melihat proyek dan aktivitas akademik yang relevan |

## 5. Brand and Visual Direction

- **Identity:** personal developer portfolio.
- **Name:** Gus Adi.
- **Optional domain/brand:** `gusadi.dev` hanya digunakan jika domain benar-benar dimiliki atau sudah diputuskan.
- **Visual direction:** developer workspace, modern, clean, dark-first.
- **Theme:** dark dan light.
- **Accent:** electric blue atau violet; pilih satu warna utama pada tahap DESIGN.
- **Typography:** Inter atau Geist.
- **UI:** border tipis, ruang lega, kartu proyek, terminal-inspired detail.
- **Avoid:** neon berlebihan, animasi berat, dekorasi terminal yang mengganggu keterbacaan.

`DESIGN.md` dibuat terpisah dan menjadi sumber kebenaran untuk token warna, typography, spacing, layout, komponen, dan responsive behavior.

## 6. Information Architecture

MVP menggunakan satu halaman dengan navigasi anchor dan section berikut:

1. **Navigation** — identitas, anchor links, language switcher, theme switcher.
2. **Hero** — headline, peran, ringkasan, CTA proyek dan CV, terminal mini opsional.
3. **About** — profil, minat, fokus, dan currently learning.
4. **Tech Stack** — teknologi dikelompokkan berdasarkan kategori dan tingkat penggunaan yang jujur.
5. **Featured Projects** — satu proyek utama dan proyek pendukung.
6. **Experience & Education** — timeline pengalaman, organisasi, dan pendidikan.
7. **GitHub Activity** — statistik publik dan contribution calendar.
8. **Contact** — email, GitHub, LinkedIn, dan tautan CV.
9. **Footer** — copyright dan tautan penting.

Detail proyek dapat menggunakan halaman detail terpisah jika kebutuhan konten dan SEO membenarkannya. Untuk MVP, gunakan anchor/card atau detail route sederhana; keputusan final ditetapkan pada DESIGN/implementation planning.

## 7. Functional Requirements

### FR-01 Navigation
- Pengunjung dapat berpindah ke section melalui navigasi.
- Navigasi tetap usable pada layar kecil.
- Anchor navigation tidak menutupi heading section.
- Tautan eksternal diberi penanda yang sesuai.

### FR-02 Hero
- Menampilkan nama, role, ringkasan singkat, dan CTA.
- CTA proyek mengarah ke section proyek.
- CTA CV mengarah ke file CV yang tersedia.
- Terminal visual bersifat dekoratif dan tidak menjadi satu-satunya tempat informasi penting.

### FR-03 About
- Menampilkan perkenalan dan fokus pengembangan.
- Konten tersedia dalam Bahasa Indonesia dan English.
- Tidak mencantumkan data pribadi sensitif.

### FR-04 Tech Stack
- Teknologi ditampilkan dalam kategori seperti Languages, Frontend, Backend, Database, dan Tools.
- Hanya teknologi yang benar-benar pernah digunakan atau sedang dipelajari yang dicantumkan.
- Hindari rating kemampuan yang tidak memiliki dasar.

### FR-05 Projects
- Menampilkan satu featured project utama dan proyek pendukung.
- Setiap proyek dapat memuat nama, ringkasan, kategori, status, stack, gambar, repository, dan demo jika tersedia.
- Detail proyek menjelaskan problem, solution, kontribusi/peran, fitur, dan tantangan teknis jika informasinya tersedia.
- Link yang belum tersedia tidak ditampilkan sebagai link aktif.
- Konten proyek dikelola dari data terstruktur, bukan ditulis berulang di komponen.

### FR-06 Experience & Education
- Menampilkan riwayat yang relevan dalam urutan kronologis.
- Informasi organisasi, jabatan, dan tanggal harus dapat diverifikasi.
- Bagian yang belum memiliki data dapat disembunyikan sampai konten siap.

### FR-07 GitHub Statistics
- Mengambil informasi publik dari akun GitHub yang dikonfirmasi pemilik.
- Menampilkan data yang benar-benar tersedia dari sumber yang dipakai.
- Menyediakan loading, error, dan fallback state.
- Cache respons untuk mengurangi request berulang.
- Token rahasia tidak boleh dikirim ke browser.
- Jika statistik tidak tersedia, section tetap menampilkan link profil GitHub atau fallback yang informatif.

### FR-08 Contribution Calendar
- Menampilkan contribution calendar dari sumber data yang telah diuji.
- Label, rentang tanggal, dan definisi kontribusi dijelaskan dengan benar.
- Jangan membuat heatmap tiruan seolah-olah data asli.
- Sediakan fallback ketika sumber gagal atau rate limit tercapai.

### FR-09 Language
- Mendukung Bahasa Indonesia (`id`) dan English (`en`).
- Semua teks antarmuka dan konten utama memiliki terjemahan.
- Pengunjung dapat mengganti bahasa.
- Bahasa awal ditetapkan secara konsisten; preferensi boleh disimpan di local storage.
- Perubahan bahasa tidak boleh merusak URL, navigasi, atau aksesibilitas.

### FR-10 Theme
- Mendukung dark dan light theme.
- Pilihan tema dapat disimpan secara lokal.
- Kontras teks dan komponen harus memadai pada kedua tema.
- Hindari flash tema yang salah saat halaman dimuat jika memungkinkan.

### FR-11 CV
- Menyediakan tautan unduh CV PDF.
- Versi Bahasa Indonesia dan English dapat disediakan jika keduanya sudah tersedia.
- Jangan menampilkan tombol unduh yang mengarah ke file yang belum ada.
- File CV harus diperbarui secara manual oleh pemilik.

### FR-12 Contact
- Menyediakan email dan tautan sosial yang telah dikonfirmasi.
- Email dapat menggunakan `mailto:`.
- Tidak memerlukan backend untuk formulir kontak pada MVP.

## 8. Content Requirements

Konten awal yang perlu dikonfirmasi pemilik:

- Nama tampilan dan headline.
- Bio singkat Indonesia dan English.
- Username GitHub.
- Email publik dan tautan LinkedIn.
- Daftar teknologi.
- Data proyek, screenshot, status, repository, dan demo.
- Pendidikan dan pengalaman organisasi/profesional.
- File CV.
- Foto/avatar, jika ingin digunakan.

Proyek kandidat awal (perlu konfirmasi status dan detail): Plagiarism Checker, SakuKu, Gajah SmartVisit, D’Pesan Warung, dan Waste Classification. Jangan menganggap semua proyek siap dipublikasikan atau sudah selesai.

## 9. Non-Functional Requirements

| Area | Requirement |
|---|---|
| Responsive | Berfungsi pada mobile, tablet, dan desktop |
| Performance | Target Lighthouse Performance >= 90 pada kondisi pengujian yang wajar |
| Accessibility | Semantic HTML, keyboard access, focus visible, alt text, reduced motion |
| SEO | Title, description, canonical bila relevan, Open Graph, sitemap, robots |
| Reliability | Fallback untuk kegagalan GitHub data dan asset |
| Security | Tidak ada secret di client bundle; dependency dijaga |
| Maintainability | Komponen modular dan data dipisahkan dari presentasi |
| Compatibility | Browser modern utama |
| Privacy | Tidak mengumpulkan data pengunjung yang tidak diperlukan |

Target Lighthouse adalah sasaran, bukan jaminan. Ukur pada production build dan dokumentasikan kondisi pengujian.

## 10. Technical Constraints and Decisions

- Astro sebagai framework utama.
- TypeScript untuk komponen dan data.
- Tailwind CSS v4 untuk styling jika kompatibilitas integrasi telah diverifikasi.
- `lucide-astro` untuk ikon.
- Astro Content Collections atau data TypeScript terstruktur untuk konten.
- Static-first; gunakan client-side JavaScript hanya untuk theme, language preference, menu mobile, dan interaksi yang diperlukan.
- Gunakan Astro server endpoint atau fungsi server Vercel hanya jika integrasi GitHub memerlukan secret/cache server-side. Jika tidak, gunakan endpoint publik tanpa token dan cache yang sesuai.
- Tidak ada database pada MVP.
- Vercel sebagai target deployment awal.

## 11. Acceptance Criteria

MVP dinyatakan siap ketika:

1. Semua section utama tersedia dan dapat diakses melalui navigasi.
2. Layout berfungsi pada viewport mobile, tablet, dan desktop.
3. Pengunjung dapat mengganti bahasa dan tema.
4. Konten inti tampil konsisten dalam kedua bahasa.
5. Featured project menampilkan data yang benar, gambar, dan tautan yang valid.
6. CV dapat diunduh dari file yang benar-benar tersedia.
7. GitHub section menampilkan data terverifikasi atau fallback yang jelas.
8. Tidak ada token/API secret di bundle browser.
9. Metadata SEO dan Open Graph terpasang.
10. Tidak ada error build, broken link utama, atau error console yang diketahui.
11. Keyboard navigation, focus state, dan reduced-motion preference diuji.
12. Production build dan deployment berhasil.

## 12. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| GitHub rate limit/API berubah | Cache, fallback, dan batasi request |
| Contribution data sulit diperoleh | Uji sumber data sejak awal; jangan tampilkan data palsu |
| Konten proyek belum lengkap | Gunakan draft data dan tampilkan hanya yang sudah diverifikasi |
| Animasi memperlambat halaman | CSS ringan, lazy loading, reduced motion |
| Scope melebar | Ikuti MVP dan WBS; blog/CMS ditunda |
| CV atau screenshot belum siap | Sembunyikan CTA/asset yang belum tersedia |

## 13. Future Enhancements (Outside MVP)

- Blog / developer notes.
- Project detail pages yang lebih lengkap.
- CMS atau admin content management.
- Analytics yang privacy-conscious.
- Search/filter project.
- Multi-language URL routing jika kebutuhan SEO bilingual berkembang.
