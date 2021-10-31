
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
     const [user, setUser] = useState({})
     const [isLoading, setIsLoading] = useState(true);

     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();


     const signInWithGoogle = () => {
          setIsLoading(true);
          return signInWithPopup(auth, googleProvider)

               .finally(() => {
                    setIsLoading(true);
               })
     };
     // observation
     useEffect(() => {
          setIsLoading(true)
          const unsubscribed = onAuthStateChanged(auth, user => {
               if (user) {
                    console.log(user);
                    setUser(user);
               }
               else {
                    setUser({});
               }
               setIsLoading(false);
          })

          return () => unsubscribed;
     }, [])

     // logout
     const logOut = () => {
          signOut(auth)
               .then(() => {
                    setUser('');
               })
               .finally(() => setIsLoading(false))
     }

     return {
          signInWithGoogle,
          user, logOut, isLoading
     }

}

export default useFirebase;