import { c as create_ssr_component, a as validate_store, b as subscribe } from "./ssr.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { w as writable } from "./index.js";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAHPng-HYy5uqslnxk1QnnPXwzdDcQ12ls",
  authDomain: "ignitehub-d0696.firebaseapp.com",
  projectId: "ignitehub-d0696",
  storageBucket: "ignitehub-d0696.appspot.com",
  messagingSenderId: "735417507395",
  appId: "1:735417507395:web:fad6444e2e76ed4b09bef6",
  measurementId: "G-M22ZWDPS97"
};
const app = initializeApp(firebaseConfig);
getAnalytics(app);
getFirestore();
const auth = getAuth();
getStorage();
function userStore() {
  let unsubscribe;
  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in the brower");
    const { subscribe: subscribe22 } = writable(null);
    return {
      subscribe: subscribe22
    };
  }
  const { subscribe: subscribe2 } = writable(auth?.currentUser ?? null, (set) => {
    onAuthStateChanged(auth, (user2) => {
      set(user2);
    });
    return () => unsubscribe();
  });
  return {
    subscribe: subscribe2
  };
}
const user = userStore();
const AuthCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `${slots.default ? slots.default({}) : ``}` : `<p class="text-error my-10">You must be signed in to view this page.
    <a class="btn btn-primary" href="/login" data-svelte-h="svelte-1xm0wp8">Sign In</a></p>`}`;
});
export {
  AuthCheck as A,
  user as u
};
