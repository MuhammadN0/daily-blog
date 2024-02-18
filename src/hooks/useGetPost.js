import { db } from '@/includes/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { ref } from 'vue'

export default function useGetPost(id) {
  const isLoading = ref(false)
  const post = ref(null)
  async function getPost() {
    isLoading.value = true
    try {
      const postRef = doc(db, `/posts/${id}`)
      const postSnapshot = await getDoc(postRef)
      post.value = { ...postSnapshot.data(), id: postSnapshot.id }
    } catch (err) {
      console.error(err.message)
    } finally {
      isLoading.value = false
    }
  }
  getPost()
  return { post, isLoading }
}
