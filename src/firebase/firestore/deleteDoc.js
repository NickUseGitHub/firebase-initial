import initialFirebase from '../initialFirebase'

export default function deleteDoc({ collectionPath }) {
  if (!collectionPath) throw new Error('collectionPath is null or empty')

  return initialFirebase()
    .firestore()
    .doc(collectionPath)
    .delete()
}
