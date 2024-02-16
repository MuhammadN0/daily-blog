import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyADB1w_yllh5EJrn80tOVYMcGUE6k-pYV8',
  authDomain: 'daily-blog-b0938.firebaseapp.com',
  projectId: 'daily-blog-b0938',
  storageBucket: 'daily-blog-b0938.appspot.com',
  messagingSenderId: '356196125897',
  appId: '1:356196125897:web:1378b120d6d62586b05118'
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
