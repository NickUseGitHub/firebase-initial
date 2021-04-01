import app from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import config from './firebaseConfig'

export default function() {
  if (app.apps.length) return app

  app.initializeApp(config)
  return app
}
