# Design System & Specification (DESIGN.md)
## Personal Developer Portfolio — Gus Adi

**Status:** v7.0 (Daylight Interactive Studio & Spatial Playground — Eye-Friendly Light Theme)  
**Alignment:** PRD.md & WBS.md  
**Stack Target:** Astro + TypeScript + Tailwind CSS v4  
**Visual Philosophy:** Tactile Dot-Grid Daylight Canvas (`#f5f3ee` + `#ffffff`), Pastel Studio Surfaces (`--tint-mint`, `--tint-sky`, `--tint-amber`, `--tint-rose`, `--tint-violet`), Live 4-Accent Color Switcher (`Mint`, `Coral`, `Ocean`, `Violet`), Expressive `Space Grotesk` + Readable `Plus Jakarta Sans` Typography, Top Floating Capsule Navbar, and Playable Interactive Studio Modules.

---

## 1. Visual & UX Architecture (v7.0)

1. **Kanvas Daylight Interactive Studio (Default Light Mode):** Menggunakan latar **Warm Ivory Dot-Grid (`#f5f3ee`)** yang bebas silau dan nyaman di mata, dipadukan kartu 3D taktil (`.tactile-card` dengan bayangan offset lembut) dan header pastel warna-warni (`Mint`, `Sky`, `Amber`, `Violet`).
2. **Pemilih Warna Aksen Real-Time (`data-accent`):** Pengunjung dapat mengganti warna aksen portofolio secara instan antara **Mint Emerald (`#0d9488`)**, **Sunset Coral (`#ea580c`)**, **Royal Ocean (`#2563eb`)**, dan **Electric Violet (`#7c3aed`)** langsung dari Navbar atau Hero Deck.
3. **Tata Letak Spatial Playground (Urutan Baru Non-Monoton):**
   - **Navbar Kapsul Melayang di Atas (`Navbar.astro`):** Tetap di bagian atas (tanpa sidebar) dengan 4 titik pemilih warna aksen, `⌘K`, tombol `Arcade`, pemilih bahasa (`ID/EN`), dan pemilih tema.
   - **Spatial Kinetic Poster Hero + 3-Pod Control Deck (`Hero.astro`):** Poster tipografi raksasa di tengah dengan stiker melayang (`📍 Bali, Indonesia`), dipadukan 3 Pod Interaktif di bawahnya (**Pod A:** Playable Lo-Fi WebAudio Chord Synth Pad + salin email font normal; **Pod B:** Live Studio Accent Customizer; **Pod C:** Pocket CLI).
   - **App Cartridge Stage (`Projects.astro`):** Panggung interaktif terpadu di mana pengunjung memilih katrid proyek di kiri (`#01 Plagiarism Checker` atau `#02 SakuKu`) dan langsung mencoba **Live NLP Document Similarity Lab** maupun **Simulasi Interaktif UI Arus Kas SakuKu** di panggung utama.
   - **Skill Matrix & Conveyor Studio (`TechStack.astro`):** Pita berjalan teknologi yang dapat diklik untuk menginspeksi peran, persentase implementasi, dan konteks proyek secara langsung.
   - **3D Flippable Developer ID Card & Mozaik Profil (`About.astro`):** Kartu identitas pengembang 3D yang bisa dibalik 180° saat diklik (`Bali, Indonesia`), jam WITA live, filosofi rekayasa, dan rekam jejak akademik terintegrasi (`#experience`).
   - **Live GitHub Telemetry & Snake Arena (`GitHubActivity.astro`):** Papan metrik pastel + Contribution Snake interaktif untuk `GusAdi (@GusAdiHub)`.
   - **Direct Dispatch Postcard (`Contact.astro`):** Kartu pos kontak dengan `Plus Jakarta Sans` (`font-sans`) normal sepenuhnya pada alamat email `gusplet123@gmail.com` dan formulir pesan.
