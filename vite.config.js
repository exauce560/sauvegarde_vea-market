import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@onesignal/capacitor-onesignal'],
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        abonnement: resolve(import.meta.dirname, 'abonnement.html'),
        acceuil: resolve(import.meta.dirname, 'acceuil.html'),
        achetPref: resolve(import.meta.dirname, 'achet-pref.html'),
        acheteur: resolve(import.meta.dirname, 'acheteur.html'),
        addProduct: resolve(import.meta.dirname, 'add-product.html'),
        article: resolve(import.meta.dirname, 'article.html'),
        compteA: resolve(import.meta.dirname, 'compte-a.html'),
        compteV: resolve(import.meta.dirname, 'compte-v.html'),
        conditions: resolve(import.meta.dirname, 'conditions.html'),
        connect: resolve(import.meta.dirname, 'connect.html'),
        dashboardVendeur: resolve(import.meta.dirname, 'dashboard-vendeur.html'),
        favoris: resolve(import.meta.dirname, 'favoris.html'),
        index1: resolve(import.meta.dirname, 'index1.html'),
        landing: resolve(import.meta.dirname, 'landing.html'),
        lesDeux: resolve(import.meta.dirname, 'les-deux.html'),
        particulariter: resolve(import.meta.dirname, 'particulariter.html'),
        premium: resolve(import.meta.dirname, 'premium.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        vendClientDashboard: resolve(import.meta.dirname, 'vend-client-dashboard.html'),
        vendPref: resolve(import.meta.dirname, 'vend-pref.html'),
        vendeur: resolve(import.meta.dirname, 'vendeur.html'),
        visitVisitV: resolve(import.meta.dirname, 'visit-visit-v.html'),
      },
    },
  },
});