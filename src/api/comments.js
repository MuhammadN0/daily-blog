import { auth, db } from "@/includes/firebase"

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export async function addComment({content,postId}){
  try{
    const commentsColRef = collection(db,'comments')
    await addDoc(commentsColRef,{
      content,
      pid:postId,
      uid: auth.currentUser.uid,
      displayName: auth.currentUser.displayName,
      photoURL: auth.currentUser.photoURL,
      createdAt: serverTimestamp(),
    })
  } catch (err) {
    console.error(err.message);
  }
}