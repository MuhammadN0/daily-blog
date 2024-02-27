import { db } from '@/includes/firebase'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where
} from 'firebase/firestore'
import { ref } from 'vue'

export default function useGetComments(postId) {
  const isLoading = ref(false)
  const comments = ref([])
  async function getComments() {
    try {
      isLoading.value = true
      const commentsColRef = collection(db, 'comments')
      let snapshots
      if (comments.value.length) {
        const lastDoc = await getDoc(
          doc(db, 'comments/' + comments.value[comments.value.length - 1].id)
        )
        const commentsQuery = query(
          commentsColRef,
          where('pid', '==', postId),
          orderBy('createdAt', 'asc'),
          startAfter(lastDoc),
          limit(5)
        )
        if (comments.value[comments.value.length - 1].id) snapshots = await getDocs(commentsQuery)
      } else {
        const commentsQuery = query(
          commentsColRef,
          where('pid', '==', postId),
          orderBy('createdAt', 'asc'),
          limit(5)
        )
        snapshots = await getDocs(commentsQuery)
      }
      snapshots.forEach((_doc) => comments.value.push({ ..._doc.data(), id: _doc.id }))
    } catch (err) {
      console.error(err.message)
    } finally {
      isLoading.value = false
    }
  }
  return { isLoading, comments, getComments }
}
