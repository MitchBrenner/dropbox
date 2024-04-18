"use client";
import { db, storage } from '@/firebase';
import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import DropzoneComonent from 'react-dropzone'
import toast from 'react-hot-toast';

function Dropzone() {

    const maxSize = 20971520; // 20MB

    const [loading, setLoading] = useState(false);
    const { isLoaded, isSignedIn, user } = useUser();

    const onDrop = (acceptedFile: File[]) => {
        acceptedFile.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');
            
            //successful file reading
            reader.onload = async () => {
                await uploadPost(file);
            }
            reader.readAsArrayBuffer(file);
        
        })
    }

    const uploadPost = async (selectedFile: File) => {
        if (loading) return;  // this prevents users from spamming the button
        if (!user) return; // this prevents users from uploading without being logged in

        setLoading(true);
        const toastId = toast.loading("Uploading file...");

        // add doc to this location in db : users/user12345/files
        const docRef = await addDoc(collection(db, "users", user.id, "files"), {
            // data to be passed inn
            userId: user.id,
            filename: selectedFile.name,
            fullName: user.fullName,
            profileImg: user.imageUrl,
            timestamp: serverTimestamp(),
            type: selectedFile.type,
            size: selectedFile.size,
        })

        const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);

        uploadBytes(imageRef, selectedFile).then(async (snapshot) => {
            const downloadURL = await getDownloadURL(imageRef);

            await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
                    downloadURL: downloadURL,
            });
        });
        toast.success("File uploaded successfully!", {id: toastId});
        setLoading(false);
    }

  return (
    <DropzoneComonent 
        minSize={0}
        maxSize={maxSize}
        onDrop={onDrop}
    >
        {({getRootProps, getInputProps, isDragActive, isDragReject, fileRejections}) => {
            
            const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

            return(
                <section
                    className='m-4'
                >
                    <div {...getRootProps()}
                        className={cn(
                            "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center",
                            isDragActive 
                                ? "bg-[#035FFE] text-white animate-pulse" 
                                : "bg-slate-100/50 dark:bg-slate-800/50 text-slate-400"
                        )}
                    >
                        <input {...getInputProps()} />
                        {!isDragActive && 'Click here or drop a file to upload!'}
                        {isDragActive && !isDragReject && "Drop to upload this file!"}
                        {isDragReject && "File type not accepted, sorry!"}
                        {isFileTooLarge && (
                            <div className='text-danger mt-2'>File is too large</div>
                        )}
                    </div>
                </section>
            )
        }}
    </DropzoneComonent>
  )
}

export default Dropzone