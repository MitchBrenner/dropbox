# DropBox Clone

Live demo: [dropbox-clone-cyan.vercel.app](https://dropbox-clone-cyan.vercel.app)

A modern Dropbox-inspired file storage and management app built with Next.js, Firebase, Clerk, Tailwind CSS, and Zustand for global state. Users can securely sign in, upload, view, and manage their files in a sleek and responsive interface.

---

## 🚀 Features

- Secure authentication using Clerk
- File upload, storage, and listing per user
- Dynamic file icons based on file type
- Real-time database updates using Firebase
- User-specific file collections and storage
- Toast notifications for user feedback

---

## 🎨 Frontend

Styled with **Tailwind CSS** and **shadcn/ui** for a clean and consistent design system. File sizes are formatted using **pretty-bytes** for readability.

Used:
- `react-file-icon` for displaying file-type icons
- `react-hot-toast` for showing toast notifications

---

## 🔐 Authentication

Authentication is handled with **Clerk**. The `UserButton` component handles displaying user state — when signed in, it shows the user's avatar and options; when signed out, it prompts for login or sign-up.

Integration with Clerk is optimized for use in Next.js environments.

---

## 🧠 Global State

State is managed using **Zustand**, a lightweight state manager that simplifies handling UI and app logic without boilerplate.

---

## 🔗 Backend & Database

This project uses **Firebase** as the backend for both file storage and real-time data updates.

- Files are uploaded to Firebase Storage using a custom `uploadPost` function in `Dropzone.tsx`
- Each user has a collection in Firestore with a nested `files` collection
- File metadata is stored in Firestore after upload
- **react-firebase-hooks** is used for querying, sorting, and listening to changes in the database in real-time

---

## 🌐 Deployment

The app is deployed on **Vercel** for fast and scalable hosting. It supports environment variables for connecting securely to Firebase and Clerk.

---

Built with performance and simplicity in mind, this clone demonstrates full-stack integration and modern frontend practices.
