# 3D Portfolio (React + Vite)


<img width="400" height="400" alt="Screenshot 2026-04-02 200402" src="https://github.com/user-attachments/assets/f8eee5a4-5ff8-4c2c-9c4f-a9a13fe9400d" />


Portofolio 3D interaktif menggunakan React 19 + Vite + Three.js via @react-three/fiber.<img width="200" height="200" alt="Screenshot 2026-04-01 191610" margin:auto display:block src="https://github.com/user-attachments/assets/a0dfb351-775f-48f6-9ed4-edc985e75b77" />

<img width="400" height="400" alt="Screenshot 2026-04-02 200337" src="https://github.com/user-attachments/assets/1a3549f1-3661-43f5-a89b-897330c39f45" />
## 💡 Fitur Utama

- Hero section dengan model 3D (Room + UI animasi)
- Interaksi `OrbitControls` di section Contact
- Form kontak dengan EmailJS (`@emailjs/browser`)
- Komponen statis dan animasi (counter, showcase, tech stack)
- Responsive layout dengan Tailwind CSS

## 📁 Struktur Proyek

- `src/main.jsx` - entry point
- `src/App.jsx` - root app
- `src/Components` - komponen UI reusable
  - `contactModels/` - model 3D kontak
  - `HeroModels/` - model 3D hero
  - `Models/` - teknologi dan ikon
- `src/Sections` - halaman / section utama
- `src/constants/index.js` - data statis config
- `public/` - aset global (gambar, model GLB)

## 🛠️ Setup Lokal

1. Install dependency:
   - `npm install`
2. Jalankan dev server:
   - `npm run dev`
3. Build produksi:
   - `npm run build`
4. Preview build:
   - `npm run preview`

## 🔌 Konfigurasi EmailJS

Buat file `.env` di root (jangan commit):

```
VITE_APP_EMAILJS_SERVICE_ID=service_xxx
VITE_APP_EMAILJS_TEMPLATE_ID=template_xxx
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Kemudian reload server.

## 📦 Dependensi Kunci

- `react`, `react-dom`
- `vite`, `@vitejs/plugin-react`
- `@react-three/fiber`, `@react-three/drei`, `three`
- `@emailjs/browser`
- `tailwindcss`, `@tailwindcss/vite`

## 🧩 Catatan Pemeliharaan

- Pastikan file model GLB ada di `public/models/`
- Untuk memperbarui 3D model, generate ulang trom `npx gltfjsx` yang sudah dipakai di `HeroModels` and `contactModels`
- Perbaiki import path bila movin folder

## ❤️ Cara Berkontribusi

1. Fork repo ini
2. Buat branch baru (`feat/`, `fix/`)
3. Commit perubahan
4. Buka PR

---

`README` ini disesuaikan untuk demo portofolio interaktif 3D dengan penyelesaian `Contact` + model komputer 3D.

