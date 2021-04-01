import initialFirebase from '../initialFirebase'

export default function getCollection({ collectionPath }) {
  if (!collectionPath) throw new Error('collectionPath is null or empty')

  return initialFirebase()
    .firestore()
    .collection(collectionPath)
}
