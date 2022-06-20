import multer from 'multer';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";


const storage = multer.memoryStorage()

export const handlFile = multer({ storage: storage })


const firebaseConfig = {
    apiKey: "AIzaSyCiKc3PzOXmcWE_dHUdVS-4mw0yf1aVrbE",
    authDomain: "blaaango-964a4.firebaseapp.com",
    projectId: "blaaango-964a4",
    storageBucket: "blaaango-964a4.appspot.com",
    messagingSenderId: "909003038025",
    appId: "1:909003038025:web:c281940fe2bb81c8a98e98",
    measurementId: "G-VNWWP0FCH2"
};


export const fireBaseApp = initializeApp(firebaseConfig);