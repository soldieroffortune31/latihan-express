### Mini School Application System ###

⏰ Time Estimation: ~30mins

## Preparation
Telah disediakan file `teacher.json`, `students.json`, `subjects.json`, dan `app.js`. 
Project kali ini diselesaikan menggunakan stack Node.js, npm dan express. Silakan melakukan instalasi package lain yang dirasa perlu untuk membantu menyelesaikan soal yang diberikan.

# Routing 
| HTTP Method            | Path                            | Requirements  |
|------------------|---------------------------------|-----------------------------|
|GET               |`/`                              | Menampilkan data students dan teacher dalam bentuk JSON |
|GET               |`/students`                      | Menampilkan data students dalam bentuk JSON  |
|GET               |`/teachers`                      | Menampilkan data teacher dalam bentuk JSON  |
|GET               |`/students/:<id>`                | Menampilkan data student sesuai id dalam bentuk JSON | 
|GET               |`/teachers?subject=<subject_name>`    | Menampilkan data teacher sesuai subjectnya dalam bentuk JSON | 
|GET (Fitur Roket) |`/students?subject=<subject_id>`     | Menampilkan NAMA LENGKAP student dalam subject tertentu dalam bentuk JSON | 

## General
Aplikasi ini memili **5 fitur utama dan 1 fitur roket** sebagai berikut
  - Show all data: Menampilkan data students dan teacher dalam bentuk JSON
  - Show students data: Menampilkan data students dalam bentuk JSON
  - Show teachers data: Menampilkan data teacher dalam bentuk JSON
  - Show specific student data: Menampilkan satu data student yang diminta user dalam bentuk JSON
  - Show specific teacher data: Menampilkan satu data teacher yang diminta user dalam bentuk JSON
  - Show error page: Menampilkan error page yang berupa HTML 
  - Show (FITUR ROCKET): Menampilkan NAMA LENGKAP student yang tedaftar dalam subject tertentu

Jangan lupa menambahakn logger sederhana (application level middleware) untuk melihat route mana yang di-hit oleh user (boleh pakai morgan, explore sendiri)

Jika semua testcase sesuai, dan 🚀 fitur rocket 🚀 dikerjakan, akan diberi nilai akan maksimum.

## Rules
- Dilarang nyontek catatan sebelumnya, liat dokumentasi aja (kindly asking for your honesty here, okay? 😇)
- Disarankan menggunakan metode routing dengan middleware, bukan di app.js langsung
- Dilarang menggunakan built-in function seperti .filter, .map, .reduce
- Dipersilahkan untuk melihat dokumentasi, stackoverflow dan browsing dimanapun.
- Tidak mempush node_modules ke git!
- Melakukan **PULL_REQUEST** setelah selesai push ke branch masing2
- Deadline Minggu jam 19.00 WIB

## Demo App
For the working demo app you can check this url ya: 
https://mini-school-fsw-11.herokuapp.com/

## At Last,
Happy Coding!
