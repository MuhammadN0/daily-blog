import { auth, db, storage } from '@/includes/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useToast } from 'vue-toast-notification'
const toast = useToast()

export async function register({ name, email, password, image }) {
  try {
    const usersCollection = collection(db, 'users')
    const createdUserRef = await createUserWithEmailAndPassword(auth, email, password)
    if (!image) {
      await updateProfile(createdUserRef.user, {
        displayName: name,
        photoURL:
          'https://firebasestorage.googleapis.com/v0/b/daily-blog-b0938.appspot.com/o/vecteezy_default-profile-picture-avatar-user-avatar-icon-person_21548095.jpg?alt=media&token=16ccd1ce-b46a-4d54-8c90-fd3d78d4208b'
      })
      await addDoc(usersCollection, {
        uid: createdUserRef.user.uid,
        displayName: name,
        photoURL:
          'https://firebasestorage.googleapis.com/v0/b/daily-blog-b0938.appspot.com/o/vecteezy_default-profile-picture-avatar-user-avatar-icon-person_21548095.jpg?alt=media&token=16ccd1ce-b46a-4d54-8c90-fd3d78d4208b',
        email: email,
        role: 'author'
      })
      toast.success('Success', { position: 'top' })
      return
    }
    const imageRef = ref(storage, 'users-images/' + image.name + Math.random().toString())
    await uploadBytes(imageRef, image)
    const url = await getDownloadURL(imageRef)
    await updateProfile(createdUserRef.user, { displayName: name, photoURL: url })
    await addDoc(usersCollection, {
      uid: createdUserRef.user.uid,
      displayName: name,
      photoURL: url,
      email: email,
      role: 'author'
    })
    toast.success('Success', { position: 'top' })
  } catch (err) {
    console.error(err.message)
    toast.error('Something went wrong', { position: 'top' })
  }
}

export async function login({ email, password }) {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    toast.success('You are logged in now.', { position: 'top' })
  } catch (err) {
    toast.error('Something went wrong.', { position: 'top' })
    console.error(err.message)
  }
}
