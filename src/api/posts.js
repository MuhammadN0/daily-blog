import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { auth, db, storage } from '@/includes/firebase'
import { useToast } from 'vue-toast-notification'
import { addDoc, collection } from 'firebase/firestore'
const toast = useToast()

export async function addNewPost({ title, content, image, tags }) {
  try {
    const imagesRef = ref(storage, 'post-images/' + image.name + Math.random().toString())
    const imageRef = await uploadBytes(imagesRef, image)
    const url = await getDownloadURL(imageRef.ref)
    const postsColRef = collection(db, 'posts')
    await addDoc(postsColRef, {
      title,
      content,
      photoURL: url,
      author: auth?.currentUser?.displayName || null,
      authorImage: auth?.currentUser?.photoURL || null,
      uid: auth?.currentUser?.uid || null,
      likes: 0,
      state: 'in-review',
      commentCount: 0,
      tags,
      createdAt: serverTimestamp(),
      likedBy: []
    })
    toast.success('Success', { position: 'top' })
  } catch (err) {
    console.error(err.message)
    toast.error('Something went wrong', { position: 'top' })
  }
}
export async function updatePost({ postId, data }) {
  try {
    const postDoc = doc(db, '/posts/' + postId)
    await updateDoc(postDoc, data)
  } catch (err) {
    console.error(err.message)
  }
}
