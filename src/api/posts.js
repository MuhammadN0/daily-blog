import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '@/includes/firebase'
import { useToast } from 'vue-toast-notification'
import { addDoc, collection } from 'firebase/firestore'
const toast = useToast()

export async function addNewPost({ title, content, image,tags }) {
  try {
    const imagesRef = ref(storage, 'post-images/'+image.name+Math.random().toString());
    const imageRef = await uploadBytes(imagesRef, image)
    const url = await getDownloadURL(imageRef.ref)
    console.log(url);
    const postsColRef = collection(db, 'posts')
    await addDoc(postsColRef, {
      title,
      content,
      photoURL: url,
      author: auth?.currentUser?.displayName || null,
      authorImage: auth?.currentUser?.photoURL || null,
      uid: auth?.currentUser?.uid || null,
      likes:0,
      state: 'in-review',
      commentCount: 0,
      tags
    });
    toast.success('success',{position:'top'})
  } catch (err) {
    console.error(err.message)
    toast.error('Something went wrong', { position: 'top' })
  }
}
