import "firebase/database";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

const initIndexedDB = async () => {
    return openDB("users", 1, {
        upgrade(db) {
            db.createObjectStore("users", { keyPath: "uid" });
        },
    });
};

export const assignUser = async (user) => {
    const userData = {
        uid: user.uid,
        email: user.email
    };

    const idb = await initIndexedDB();
    await idb.put("users", userData);
};

export async function getAllUsers() {
    const usersCollectionRef = collection(db, "users"); // Referanse til alle brukere i databasen
    const querySnapshot = await getDocs(usersCollectionRef); // Henter kolleksjonen 'users'

    let users = [];

    if (querySnapshot.empty) {
        console.warn("Fant ingen brukere!");
    } else {
        querySnapshot.forEach(doc => {
            users.push(doc.data());
        });
    }

    return users;
}