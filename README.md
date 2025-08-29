# 📚 Book Finder App

A simple and modern **Book Finder** web application built with **React**.  
It allows users like Alex (a college student) to search for books, view results, and sort them by publish date.

---

## 🧰 Features

- Search books by title using **Open Library API**.
- Display book details in cards: title, author, first publish year, editions, cover image.
- Sort books by **Newest First** or **Oldest First**.
- Loading indicator while fetching data.
- Error handling if API fails or no results found.
- Sorting dropdown appears **only when books are displayed**.
- Responsive layout for mobile and desktop.

---

## ⚡ Technologies Used

- **React** – Frontend framework
- **CSS** – Styling (plain CSS, separated in `style` folder)
- **React Icons** – Icons for loader and search
- **Open Library API** – Public book data

---

## 📂 Folder Structure

```
book-finder/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── Search.jsx
│ │ ├── Sorting.jsx
│ │ ├── Loading.jsx
│ │ ├── Error.jsx
│ │ └── card/
│ │ ├── Card.jsx
│ │ └── Cards.jsx
│ ├── style/
│ │ ├── App.css
│ │ ├── Search.css
│ │ ├── Sorting.css
│ │ ├── Loading.css
│ │ ├── Error.css
│ │ └── Card.css
│ ├── App.jsx
│ └── index.js
├── package.json
└── README.md
```
