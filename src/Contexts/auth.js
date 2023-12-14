import React, { createContext, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage"

// Firebase Imports
import { initializeApp } from 'firebase/app';
import { getStorage, ref as storageref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firebaseConfig } from '../Services/firebaseConfig'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateEmail, updatePassword } from 'firebase/auth';
import { getDatabase, ref, get, set, push, update } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app)
export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const navigation = useNavigation()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [url, setUrl] = useState('')
    const [allUsers, setAllUsers] = useState([])

    async function loadStorage() {
        setLoading(true)
        let userID = await AsyncStorage.getItem("@user_math")

        if (!!userID) {
            const userRef = ref(database, `usuarios/${userID}`);
            get(userRef).then((snapshot) => {
                let userDatas = snapshot.val();
                setUser(userDatas);
                setUser((oldUser) => ({ ...oldUser, uid: userID }))
            });
        }
        setLoading(false)
    }

    async function getAllUsers() {

        const userRef = ref(database, `usuarios/`);
        get(userRef).then((snapshot) => {
            let usersDatas = snapshot.val();
            setAllUsers(usersDatas);
        });

    }

    async function signUp(email, nome, password, escolaridade) {
        setLoading(true)

        await createUserWithEmailAndPassword(auth, email, password).then(async (user) => {

            const userRef = ref(database, `usuarios/${user.user.uid}`);

            await set(userRef, {

                email: email,
                nome: nome,
                senha: password,
                escolaridade,
                url,
                melhorPartida1: {

                    tempo: 0,
                    certos: 0,
                    errados: 0,

                },
                melhorPartida2: {

                    tempo: 0,
                    certos: 0,
                    errados: 0,

                },
                melhorPartida3: {

                    tempo: 0,
                    certos: 0,
                    errados: 0,

                },
                melhorPartida4: {

                    tempo: 0,
                    certos: 0,
                    errados: 0,

                },

            }).then(async () => {

                await get(userRef).then(async (snapshot) => {

                    let userDatas = snapshot.val()
                    setUser(userDatas)

                })
                let uid = user.user.uid
                await AsyncStorage.setItem('@user_math', uid)

            })

        })
            .catch(e => {

                console.log("Error")
                console.log(e)
                alert(e)

            })
        setLoading(false)
    }

    async function signIn(email, password) {
        setLoading(true)

        console.log(`Email: ${email}`)
        console.log(`Password: ${password}`)

        await signInWithEmailAndPassword(auth, email, password).then(async (user) => {

            const userRef = ref(database, `usuarios/${user.user.uid}`);
            await get(userRef).then(async (snapshot) => {

                let userDatas = snapshot.val()
                setUser(userDatas)

            })
            let uid = user.user.uid
            setUser((oldUser) => ({ ...oldUser, uid }))
            console.log(user)
            await AsyncStorage.setItem('@user_math', uid)

        })
            .catch(e => {

                console.log("Error")
                console.log(e)
                alert(e)

            })
        setLoading(false)
    }

    async function updateDatas(email, password, newEmail, newPassword, escolaridade, nome) {
        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password).then(async (user) => {

            const userRef = ref(database, `usuarios/${user.user.uid}`);

            // if (!!newEmail) {

            //     await updateEmail(auth.currentUser , newEmail)

            // }

            // if (!!newPassword) {

            //     await updatePassword(user.user.uid, newPassword)

            // }

            await update(userRef, {

                email: newEmail ? newEmail : email,
                nome: nome,
                senha: newPassword ? newPassword : password,
                escolaridade,
                url,

            }).then(async () => {

                await get(userRef).then(async (snapshot) => {

                    let userDatas = snapshot.val()
                    userDatas["uid"] = user.user.uid
                    setUser(userDatas);

                    let uid = user.user.uid
                    await AsyncStorage.setItem('@user_math', uid)

                })

            })

        })
            .catch(e => {

                console.log("Error")
                console.log(e)
                alert(e)

            })
        setLoading(false)
    }

    async function updateRecord(tempo, certos, errados) {

        console.log(tempo, certos, errados)
        let uid = user.uid
        console.log(`UID: ${uid} Lin: 201`)

        if (!!uid) {
            if (user.escolaridade == "Fundamental I") {

                if ((user.melhorPartida1.certos < certos) || (user.melhorPartida1.certos == certos && user.melhorPartida1.tempo > tempo)) {

                    console.log("Nivel 1")
                    console.log(`usuarios/${uid}/melhorPartida1`)

                    let userRef = ref(database, `usuarios/${uid}/melhorPartida1`);
                    await update(userRef, {

                        certos,
                        errados,
                        tempo,

                    })
                        .then(async () => {

                            user["melhorPartida1"] = {

                                certos,
                                errados,
                                tempo,
        
                            }

                            setUser(user)   

                        })
                        .catch(e => console.log(e))

                }

            } else if (user.escolaridade == "Fundamental II") {


                if ((user.melhorPartida2.certos < certos) || (user.melhorPartida2.certos == certos && user.melhorPartida2.tempo > tempo)) {

                    console.log("Nivel 2")
                    console.log(`usuarios/${uid}/melhorPartida2`)

                    let userRef = ref(database, `usuarios/${uid}/melhorPartida2`);
                    await update(userRef, {

                        certos,
                        errados,
                        tempo,

                    })
                        .then(async () => {

                            user["melhorPartida2"] = {

                                certos,
                                errados,
                                tempo,
        
                            }

                            setUser(user)
                            
                        })
                        .catch(e => console.log(e))

                }

            } else if (user.escolaridade == "Ensino Médio / Técnico") {


                if ((user.melhorPartida3.certos < certos) || (user.melhorPartida3.certos == certos && user.melhorPartida3.tempo > tempo)) {

                    console.log("Nivel 3")
                    console.log(`usuarios/${uid}/melhorPartida3`)

                    let userRef = ref(database, `usuarios/${uid}/melhorPartida3`);
                    await update(userRef, {

                        certos,
                        errados,
                        tempo,

                    })
                        .then(async () => {

                            user["melhorPartida3"] = {

                                certos,
                                errados,
                                tempo,
        
                            }

                            setUser(user)

                        })
                        .catch(e => console.log(e))

                }

            } else if (user.escolaridade == "Ensino Superior") {

                if ((user.melhorPartida4.certos < certos) || (user.melhorPartida4.certos == certos && user.melhorPartida4.tempo > tempo)) {

                    console.log("Nivel 4")
                    console.log(`usuarios/${uid}/melhorPartida4`)

                    let userRef = ref(database, `usuarios/${uid}/melhorPartida4`);
                    await update(userRef, {

                        certos,
                        errados,
                        tempo,
                        
                    })
                    .then(async () => {
                        
                            user["melhorPartida4"] = {

                                certos,
                                errados,
                                tempo,
        
                            }

                            setUser(user)

                        })
                        .catch(e => console.log(e))

                }

            }
            console.log(user)
        }
        
    }
    
    async function setImage(uri) {

        const storage = getStorage(app);
        const ext = uri.substring(uri.lastIndexOf("."))
        let currentDate = new Date()
        let imageName = currentDate.valueOf()
        const storageRef = storageref(storage, `UsersIcons/${imageName}${ext}`)
        const metadata = {
            contentType: `${ext}`,
        };

        const res = await fetch(uri)
        const blob = await res.blob()
        await uploadBytes(storageRef, blob, metadata).then(async (snapshot) => {

            getDownloadURL(storageRef)
                .then(url => setUrl(url))
                .catch((error) => console.log('Erro ao obter URL da imagem:', error));

        });

    }

    async function handleSignOut() {

        await AsyncStorage.clear()
        setUser()

    }

    useEffect(() => {

        getAllUsers()
        loadStorage()

    }, [])

    return (

        <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth, signIn, loading, updateDatas, setImage, url, handleSignOut, updateRecord, allUsers, getAllUsers }}>

            {children}

        </AuthContext.Provider>

    )

}