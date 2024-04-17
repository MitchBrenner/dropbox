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