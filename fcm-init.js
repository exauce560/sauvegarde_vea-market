import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCY5GYE-TeUEVu6rkYQcwIkELmTM-mPZEc",
  authDomain: "v-ea-fb4c4.firebaseapp.com",
  projectId: "v-ea-fb4c4",
  storageBucket: "v-ea-fb4c4.firebasestorage.app",
  messagingSenderId: "357462139035",
  appId: "1:357462139035:web:7aa2ee50350d88a843a63e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Envoie une notification Push à un utilisateur cible sans Cloud Functions
 * @param {string} targetUserId - L'UID de l'utilisateur qui doit recevoir la notif
 * @param {string} targetCollection - "acheteurs", "vendeurs_clients" ou "vendeurs"
 * @param {string} title - Le titre de la notification
 * @param {string} body - Le texte du message
 * @param {string} redirectUrl - L'URL à ouvrir lors du clic
 */
export async function envoyerPushDirect(targetUserId, targetCollection, title, body, redirectUrl = "/acceuil.html") {
  try {
    // 1. Récupérer le token de l'utilisateur cible depuis Firestore
    const userDocRef = doc(db, targetCollection, targetUserId);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      console.warn("Utilisateur introuvable.");
      return;
    }

    const userData = userDocSnap.data();
    const tokens = userData.fcmTokens || [];

    if (tokens.length === 0) {
      console.log("Cet utilisateur n'a pas activé les notifications.");
      return;
    }

    // 2. Préparer le message HTTP v1
    for (const fcmToken of tokens) {
      const payload = {
        message: {
          token: fcmToken,
          notification: {
            title: title,
            body: body
          },
          data: {
            url: redirectUrl
          }
        }
      };

      console.log("Envoi de la notification à :", targetUserId, payload);
      // Remarque : Sur le plan gratuit, ce déclenchement se fait côté navigateur.
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi de la notification :", error);
  }
}