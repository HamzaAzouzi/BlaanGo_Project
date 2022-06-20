import fs from "fs"
import { getApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

export const upload = async (file: any, path: string) => {
    const firebaseApp = getApp()
    
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage);    
    const imagesRef = ref(storage, `/${path}/${file.originalname}`);
    await uploadBytes(imagesRef, file.buffer).catch(err => console.log(err.customData));
    let url = await getDownloadURL(imagesRef)
    return url
}

export const multiUpload = async (files: any, path: string) => {
    if (files && files.length > 0) {
        let urls = await Promise.all(
            files.map(async (file: any) => {
                return await upload(file, path)
            })
        )
        return urls.map(url => {
            return { src: url }
        })
    }
}