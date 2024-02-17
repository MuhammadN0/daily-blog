import { auth } from '@/includes/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue'

const user = ref(auth.currentUser)
onAuthStateChanged(auth, (_user) => {
  user.value = _user
})

export default function useUser() {
  return { user }
}
