import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListner,
  createUserDocumentFromAuth,
} from "../routes/Utils/Firebase/FirebaseUtils";
//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user, "user");
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
