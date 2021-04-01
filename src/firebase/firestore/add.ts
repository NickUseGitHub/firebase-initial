import { InsertedDataFB } from './types'
import initialFirebase from '../initialFirebase'

export default function add<T>({
  collectionPath,
  data,
  isNewlyAdd = true,
}: InsertedDataFB<T>) {
  if (!collectionPath) throw new Error('collectionPath is null or empty')

  return initialFirebase()
    .firestore()
    .doc(collectionPath)
    .set(data, { merge: isNewlyAdd === false })
}
