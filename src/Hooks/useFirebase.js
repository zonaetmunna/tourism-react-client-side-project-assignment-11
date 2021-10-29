import initializeAuthentication from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

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

               })
          setIsLoading(false)
     }

     return {
          signInWithGoogle,
          user, logOut, isLoading
     }

}

export default useFirebase;