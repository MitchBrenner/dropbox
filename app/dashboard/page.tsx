import React from 'react'
import { auth } from '@clerk/nextjs'
import Dropzone from '@/components/Dropzone';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { FileType } from '@/typings';
import TableWrapper from '@/components/table/TableWrapper';

async function Dashboard() {

  const { userId } = auth();

  const docsResults = await getDocs(collection(db, "users", userId!, "files")); // should be using converters here
  const skeletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }))

  console.log(skeletonFiles);

  return (
    <div>
      <Dropzone /> 

      <section className='border-t space-y-5 p-4'>
        <h2 className='font-bold'>All Files</h2>
        <div > 
          {/* table wrapper */}
          <TableWrapper 
            skeletonFiles={skeletonFiles}
          />
        </div>
      </section>
    </div>
  )
}

export default Dashboard