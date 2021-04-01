import initialFirebase from '../initialFirebase'

export default function deleteField({ collectionPath, fields }) {
  if (!collectionPath) throw new Error('collectionPath is null or empty')

  const firebaseApp = initialFirebase()
  const fieldsToDelete = Object.keys(fields).reduce(
    function tranformFieldToDelete(prev, key) {
      return {
        ...prev,
        [key]: firebaseApp.firestore.FieldValue.delete(),
      }
    },
    {},
  )

  return firebaseApp
    .firestore()
    .doc(collectionPath)
    .update(fieldsToDelete)
}
