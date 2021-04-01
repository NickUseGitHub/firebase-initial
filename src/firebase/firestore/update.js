import initialFirebase from '../initialFirebase'

export default function update({ collectionPath, data }) {
  if (!collectionPath) throw new Error('collectionPath is null or empty')

  return initialFirebase()
    .firestore()
    .doc(collectionPath)
    .update(data)
}
