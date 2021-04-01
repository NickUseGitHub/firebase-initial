import initialFirebase from '../initialFirebase'

export default function get({ collectionPath }) {
  if (!collectionPath) throw new Error('collectionPath is null or empty')

  return initialFirebase()
    .firestore()
    .doc(collectionPath)
    .get()
}
