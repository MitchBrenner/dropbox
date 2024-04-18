# Drop Box Clone

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Frontend

### Styling 
- Tailwind CSS
- Shadcn
- use [pretty bytes](https://www.npmjs.com/package/pretty-bytes) to convert bytes to human readable format
- used [react-file-icon](https://www.npmjs.com/package/react-file-icon) to display file icons
- used [react-hot-toast](https://react-hot-toast.com/) for toast notifications

### Global State
- use [zustand](https://github.com/pmndrs/zustand)

## Authentication

- [Clerk](https://clerk.com/) for authentication
- [Clerk when using NextJS](https://clerk.com/docs/quickstarts/nextjs)
- Check out [UserButton](https://clerk.com/docs/components/user/user-button#user-button-component) component for displaying user information when signed in and displaying other stuff when signed out.

## Backend

### Database
- using [Firebase](https://firebase.google.com/) for database
- check out function uploadPost in [Dropzone.tsx](./components/Dropzone.tsx) for uploading files to firebase storage.
- it creates a user collection where each user has a files collection that contains all the files uploaded by the user
- it also uses firebase storage to store the files and then updates the user's files collection with the file's ref in the storage
- use [react-firebase-hooks](https://www.npmjs.com/package/react-firebase-hooks) to query and sort db. You can also use it to listen to changes in the database