import { useEffect, useState } from "react";
import { AuthContext } from "./authcontext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                const userDocRef = doc(db, "users", currentUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    setUser(currentUser);
                } else {
                    console.log(`Brukeren finnes ikke.`);
                }
            } else {
                setUser(null);
                setRole(null);
            }
        })
        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={{ user, role }}>
            {children}
        </AuthContext.Provider>
    )

}