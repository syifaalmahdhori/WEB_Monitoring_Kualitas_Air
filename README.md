# 🌊 Fuzzy Sugeno – Sistem Pemantauan Kualitas Air

Aplikasi berbasis web untuk memantau **kualitas air** menggunakan metode **Fuzzy Sugeno orde-0**.  
Dilengkapi dengan tampilan interaktif, mode gelap/terang otomatis, serta fitur kalibrasi dan ekspor data hasil pengukuran.

---

## ✨ Fitur Utama
- 📊 **Dashboard Real-Time**  
  Menampilkan grafik dinamis hasil pembacaan sensor pH, NTU (kekeruhan), dan suhu.
- 🧮 **Sistem Inferensi Fuzzy Sugeno**  
  Menghitung skor kualitas air dengan rumus:

Bobot *wᵢ* diperoleh dari operator logika fuzzy, menghasilkan label kualitas seperti  
*Excellent*, *Good*, *Fair*, atau *Poor*.
- ⚙️ **Kalibrasi Membership Function (MF)**  
Mengatur bentuk dan rentang fungsi keanggotaan langsung dari antarmuka.
- 🕓 **Riwayat & Grafik**  
Menyimpan dan menampilkan data historis dalam bentuk tabel dan grafik.
- 🌓 **Tema Otomatis**  
Mode terang/gelap menyesuaikan sistem pengguna.
- 💾 **Ekspor Data**  
Menyimpan hasil pengukuran ke format CSV untuk analisis lanjutan.

---

## 🧠 Teknologi yang Digunakan
- **Frontend:** HTML, CSS (Custom + Bootstrap 5), JavaScript  
- **Framework & Library:** Bootstrap Icons, Chart.js  
- **Metode:** Fuzzy Sugeno orde-0 (defuzzifikasi rata-rata berbobot)  
- **Status:** 💻 *Active Development*

---

## 🗂️ Struktur Halaman
| File | Deskripsi |
|------|------------|
| `dashboard.html` | Tampilan utama pemantauan sensor |
| `inputs.html` | Input & simulasi sensor |
| `kalibrasi.html` | Pengaturan Membership Function |
| `riwayat.html` | Riwayat data & grafik |
| `tentang.html` | Dokumentasi metode & FAQ |
| `export.html` | Ekspor hasil pengukuran |

---

## 👩🏻‍💻 Pengembang
**Syifa Almahdhori**  
📧 [syifaalmahdhori@gmail.com](mailto:syifaalmahdhori@gmail.com)  
📱 [WhatsApp](https://wa.me/6281280919940)  
🌐 [GitHub](https://github.com/syifaalmahdhori)

---

> Dibuat dengan ❤️ oleh Syifa Almahdhori — 2025  
> *Fuzzy Sugeno for Water Quality Monitoring Web Application*
