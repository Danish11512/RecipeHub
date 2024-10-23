import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'foodandstuff-59d55.firebaseapp.com',
  projectId: 'foodandstuff-59d55',
  storageBucket: 'foodandstuff-59d55.appspot.com',
  messagingSenderId: '1046151684387',
  appId: '1:1046151684387:web:5dc1893a00278ee091ec96',
  measurementId: 'G-33T3HL32ZE'
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

export { analytics, app, auth}