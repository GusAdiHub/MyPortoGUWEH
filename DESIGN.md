# Design System & Specification (DESIGN.md)
## Personal Developer Portfolio — Gus Adi

**Status:** v2.0 (Full-Screen Kinetic Cyber-Bento Redesign)  
**Alignment:** PRD.md & WBS.md  
**Stack Target:** Astro + TypeScript + Tailwind CSS v4  
**Visual Philosophy:** Full-Screen Kinetic Developer Workspace & Bento Architecture.

---

## 1. Design Philosophy

Desain v2.0 mengadopsi arsitektur **Full-Screen Widescreen (`max-w-[1440px]` + 100vw Hero & Marquee)** dengan kartu **3D Interactive Bento**, tipografi display yang ekspresif, kanvas jaringan partikel interaktif di latar belakang, dan palet kontras tinggi yang tajam di mode gelap maupun terang.

---

## 2. Color System

### 2.1 Dark Mode (Default — "Abyssal Obsidian & Electric Emerald/Cyan")
| Token | Nilai | Kegunaan |
|---|---|---|
| `--bg-base` | `#05070b` | Latar belakang utama layar penuh |
| `--bg-surface` | `#0b0f17` | Latar belakang kartu Bento & panel |
| `--bg-elevated` | `#111826` | Komponen internal kartu, chip, header bar |
| `--text-primary` | `#f1f5f9` | Teks utama dan heading |
| `--text-secondary` | `#94a3b8` | Paragraf deskripsi |
| `--text-muted` | `#52627a` | Metadata & label sekunder |
| `--accent-primary` | `#10b981` | Electric Emerald (aksi utama, indikator aktif) |
| `--accent-secondary`| `#38bdf8` | Cyber Sky Cyan (aksen sekunder, highlight) |
| `--accent-tertiary` | `#818cf8` | Indigo Pulse (aksen ketiga) |

### 2.2 Light Mode ("Warm Architectural Paper & Deep Emerald/Cobalt")
| Token | Nilai | Kegunaan |
|---|---|---|
| `--bg-base` | `#f4f6fb` | Latar belakang utama |
| `--bg-surface` | `#ffffff` | Latar belakang kartu Bento |
| `--bg-elevated` | `#eef2f8` | Komponen internal kartu & chip |
| `--text-primary` | `#0b1120` | Teks utama |
| `--text-secondary` | `#475569` | Paragraf deskripsi |
| `--text-muted` | `#64748b` | Metadata |
| `--accent-primary` | `#059669` | Deep Emerald |
| `--accent-secondary`| `#0284c7` | Deep Cobalt |
| `--accent-tertiary` | `#4f46e5` | Deep Indigo |

---

## 3. Typography

- **Font Display (`--font-display`):** `'Space Grotesk'`, `sans-serif` — untuk judul Hero raksasa, judul section, dan metrik angka besar.
- **Font Sans (`--font-sans`):** `'Plus Jakarta Sans'`, `sans-serif` — untuk paragraf bio dan deskripsi proyek.
- **Font Mono (`--font-mono`):** `'JetBrains Mono'`, `monospace` — untuk telemetri terminal, badge teknologi, perintah, dan navigasi.

---

## 4. Layout & Full-Screen Architecture

- **Full-Bleed Viewport:** Latar kanvas partikel (`#bg-canvas`), pita marquee berjalan, dan Hero memenuhi layar (`min-h-[calc(100vh-4.5rem)]`).
- **Widescreen Container:** Konten utama menggunakan `max-w-[1440px]` dengan padding responsif `px-4 sm:px-8 lg:px-14`.
- **Floating Glass Navbar:** Navigasi melayang berbentuk kapsul kaca (`glass-pill`) dengan indikator section aktif dan tombol **Command Palette (`⌘K`)**.

---

## 5. Animation & Interaction System

1. **Interactive Constellation Canvas + Click Shockwaves + Data Packets + Matrix Cyber Rain + Neon Cyber-Serpents (`#bg-canvas`):** Jaringan node dengan paket data berjalan di sepanjang garis koneksi, efek ledakan partikel + sonar shockwave saat klik di mana saja, mode Matrix Cyber Rain (`M`), serta 2 ular neon otonom (*Neon Cyber-Serpents*, shortcut `N` / CLI `serpent`) dengan kinematika S-curve yang mengejar orb energi dan terpancing ke titik klik kursor.
2. **3D Perspective Bento Tilt (`[data-tilt]` & `.bento-card`):** Kartu miring secara perspektif 3D mengikuti posisi mouse disertai efek sorot cahaya radial (`--mouse-x`, `--mouse-y`).
3. **Magnetic Buttons (`.magnetic-btn`):** Tombol CTA tertarik halus ke arah kursor saat di-hover.
4. **Custom Cursor Ring (`#cursor-ring`):** Cincin kursor interaktif yang mengikuti pergerakan mouse dengan *spring interpolation* di layar desktop.
5. **Multi-Phrase Typewriter & Interactive Mini CLI Shell (`Hero.astro`):** Efek ketik/hapus otomatis multibahasa pada baris peran, ditambah tab ke-4 (`4:shell`) berupa terminal interaktif untuk menjalankan perintah (`help`, `whoami`, `stack`, `projects`, `matrix`, `snake`, `clear`).
6. **Rotating R&D Radar (`About.astro`) & Tech Stack Wave Pulse (`TechStack.astro`):** Pemindai radar berputar pada kartu eksplorasi riset, serta tombol `⚡ Wave Pulse` yang mengirimkan gelombang domino neon ke seluruh chip teknologi.
7. **Interactive NLP Pipeline + Token Stream & Laser Timeline Spine (`Projects.astro`, `Experience.astro`):** Simulasi alur pemrosesan dokumen 3 tahap dengan stream token aktif, serta garis *laser data-pulse* yang mengalir pada timeline riwayat/pendidikan.
8. **GitHub Contribution Snake & Live Recent Repos (`GitHubActivity.astro`):** Ular interaktif dengan pathfinding otomatis pada matriks kontribusi 52x7, serta sinkronisasi 4 repositori publik terbaru dari GitHub API dengan sanitasi DOM dan cache 1 jam.
9. **Live NLP Cosine & Jaccard Similarity Sandbox (`Projects.astro`):** Sandbox interaktif pada proyek utama tempat pengunjung dapat mengedit/membandingkan dua dokumen secara langsung untuk menghitung skor Cosine Similarity, Jaccard Index, gauge SVG melingkar, dan irisan token (*shared tokens*).
10. **Quick Message Builder (`Contact.astro`):** Penyusun draf email terstruktur berdasarkan topik (*Magang/Kerja*, *Kolaborasi*, *Diskusi*) dengan pratinjau payload real-time, peluncur `mailto:` tanpa server, dan tombol salin draf.
11. **Circular View-Transition Theme Wipe, Searchable Command Palette & Cyber Toast (`Navbar.astro`, `BaseLayout.astro`):** Transisi gelombang lingkaran (`startViewTransition` + `clipPath`) saat berganti tema, pencarian real-time + pintasan keyboard (`1`-`6`, `T`, `L`, `M`, `N`, `S`, `G`) di Command Palette (`⌘K`), dan notifikasi *toast* di pojok kanan bawah.
12. **G-Bot Cyber Companion, Web Audio Mechanical Synth, Live Telemetry HUD & Easter Eggs (`CyberCompanion.astro`, `Footer.astro`):** Drone asisten melayang di pojok kiri bawah dengan mata yang melacak posisi kursor, synthesizer suara *mechanical switch* (`🔇/🔊 SFX`), Konami Code (`↑↑↓↓←→←→BA`), Fireworks Confetti, 360° Barrel Roll, perubahan judul tab otomatis saat idle, serta statusline live `FPS` / koordinat `XY` / `KEY` di footer.
13. **6-in-1 Cyber Mini-Game Arcade (`CyberArcade.astro`):** Modal arcade interaktif (shortcut `G` / tombol `🎮 ARCADE`) berisi 6 minigame bertema developer: *Prod Bug Blaster* (canvas shooter), *Cyber Snake* (game ular neon interaktif di canvas 30x16 dengan pilihan mode `🌀 PORTAL` & `🧱 WALL`, paket bonus `★` berwaktu, antrean arah `WASD`/Panah/Swipe + D-Pad mobile), *Speed Code Typer* (WPM real-time; spasi ditampilkan sebagai `·`, simbol diberi warna aksen, hint `NEXT KEY`, dan akurasi), *Neural Memory Matrix* (sequence hack 3x3), *Whack-a-Bug* (grid 4x3 selama 30 detik, penalti jika memukul ✨ fitur), dan *Ping Reflex* (tes waktu reaksi dalam ms, riwayat 5 percobaan terakhir). High Score disimpan di `localStorage` (`arcade_*_best`); semua loop/timer dihentikan saat ganti tab atau modal ditutup.
14. **Reduced Motion Support:** Seluruh animasi menghormati `prefers-reduced-motion: reduce`.
