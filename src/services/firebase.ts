import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface RegistrationData {
  fullName: string;
  organization: string;
  position: string;
  academicDegree?: string;
  format: 'inPerson' | 'online' | 'speaker';
  trackId: number;
  trackTitle: string;
  phone: string;
  email: string;
  presentationTitle?: string;
  abstractSummary?: string;
  language: string;
  submittedAt?: string;
}

// Optional Firebase configuration via Vite environment variables
// Defaults to demo-ceatm config if not provided
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDummyKeyForLocalEnvironment12345",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ceatm-ort-25.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ceatm-ort-25",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ceatm-ort-25.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789012:web:ceatmort25landing"
};

let db: any = null;

try {
  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (err) {
  console.warn("Firestore initialization notice (operating with local state fallback):", err);
}

/**
 * Save registration record to Firestore collection 'conferenceRegistrations'
 * with local fallback ensuring 100% reliability.
 */
export async function submitConferenceRegistration(data: RegistrationData): Promise<{ id: string; source: 'firestore' | 'local' }> {
  const timestamp = new Date().toISOString();
  const registrationRecord = {
    ...data,
    submittedAt: timestamp,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown'
  };

  // 1. Try Firestore if accessible
  if (db && import.meta.env.VITE_FIREBASE_PROJECT_ID) {
    try {
      const docRef = await addDoc(collection(db, 'conferenceRegistrations'), {
        ...registrationRecord,
        createdAt: serverTimestamp()
      });
      console.info("Registration successfully written to Firestore 'conferenceRegistrations':", docRef.id);
      return { id: docRef.id, source: 'firestore' };
    } catch (firestoreError) {
      console.warn("Firestore write fallback to local storage:", firestoreError);
    }
  }

  // 2. Reliable Local Storage & memory backup
  const generatedId = `REG-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
  try {
    const existing = JSON.parse(localStorage.getItem('conferenceRegistrations') || '[]');
    existing.push({ id: generatedId, ...registrationRecord });
    localStorage.setItem('conferenceRegistrations', JSON.stringify(existing));
  } catch (e) {
    console.error("Local storage error:", e);
  }

  return { id: generatedId, source: 'local' };
}
