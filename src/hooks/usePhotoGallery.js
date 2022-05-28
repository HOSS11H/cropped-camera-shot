import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function usePhotoGallery() {

    const [photo, setPhoto] = useState(null);
    const [ capturedPhoto, setCapturedPhoto ] = useState(null);


    const takePhoto = async () => {
        try {
            const photo = await Camera.getPhoto({
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Camera,
                quality: 100,
            })
            setCapturedPhoto(photo.dataUrl);
            setPhoto(photo);
        } catch (error) {
            toast.error("Problem in Capturing Photo", {
                position: "bottom-center", autoClose: 4000, hideProgressBar: true,
                closeOnClick: true, pauseOnHover: false, draggable: false, progress: undefined
            });
        }
    };



    return {
        photo,
        capturedPhoto,
        takePhoto,
    };
}

// Thanks to code from https://stackoverflow.com/a/5100158
// Author: https://github.com/stoive/
export function DataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
}