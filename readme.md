# Project Inventory App

A full-stack **Project Inventory Management Web Application** built as part of **The Odin Project** curriculum.

This application allows authenticated users to create, manage, and organize **categories** and **projects**, with full CRUD functionality, user authentication, ownership-based authorization, and a relational PostgreSQL database.

---

## 🚀 Features

### 🔐 Authentication & Authorization
- User signup and login
- Secure password hashing with **bcrypt**
- Session-based authentication using **express-session**
- Protected routes for authenticated users only
- Ownership-based authorization (users can only edit/delete their own data) (YET TO BE IMPLEMENTED)

---

### 📂 Categories
- Create categories
- View all categories
- View a single category
- Update category details
- Delete categories
- Categories are linked to the user who created them (YET TO BE IMPLEMENTED)

---

### 📁 Projects
- Create projects under a category
- View all projects
- View a single project
- Update project details
- Delete projects
- Assign projects to categories using a dropdown selector
- Projects are linked to both a category and the user who created them (YET TO BE IMPLEMENTED)

---

### 👤 User Profile
- View profile information
- Update username
- Delete user account
- Session data stays in sync with database updates

---

### 🎨 UI / UX
- Server-side rendering with **EJS**
- Reusable layouts and partials (navbar, layout)
- Clean, modern styling using a global CSS file
- Pre-filled forms for editing records
- Graceful handling of empty states
- Friendly error pages (404, authorization errors), (PARTIAL IMPLEMENTATION)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Authentication:** bcrypt, express-session
- **Templating Engine:** EJS
- **Styling:** Vanilla CSS
- **Architecture:** MVC (Model–View–Controller)

---

## 📂 Project Structure

