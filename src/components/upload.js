import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app';
import db from "../../firebase"
import "firebase/compat/storage"

const Upload = () => {
    const [fileUrl, setFileUrl] = useState(null)
    const [musicUrl, setMusicUrl] = useState(null)
    const [disable, setDisable] = useState(true)

    useEffect(() => {
        if (musicUrl !== null && fileUrl !== null) {
            setDisable(false);
            console.log(disable)
        }
    }, [musicUrl, fileUrl])

    const handleImageChange = async (e) => {
        console.log("upload file");
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref("Image")
        const fileRef = storageRef.child(file?.name)
        await fileRef.put(file).then(() => {
            console.log("file uploaded", file?.name)
        })
        setFileUrl(await fileRef.getDownloadURL())

    }
    const handleMusicChange = async (e) => {
        console.log("upload music");
        const music = e.target.files[0]
        const storagemRef = firebase.storage().ref("music")
        const musicRef = storagemRef.child(music?.name)
        await musicRef.put(music).then(() => {
            console.log("music uploaded", music?.name)
        })
        setMusicUrl(await musicRef.getDownloadURL())

    }
    const handleSubmit = (e) => {
        // e.preventDefault();
        const musicname = e.target.musicname.value;
        if (!musicname) {
            return
        }
        db.collection("Music").doc(musicname).set({
            name: musicname,
            music: musicUrl,
            image: fileUrl
        }).then(() => {
            alert("Music added");
        })
            .catch((error) => {
                console.error("Error adding music: ", error);
                // Handle the error, show an appropriate message to the user.
            });
    }
    return (
        <div className='h-[80vh] flex justify-center rounded-md'>
            <form onSubmit={(e) => handleSubmit(e)}
                className='bg-white flex flex-col gap-8 pt-8 items-center rounded-xl'>
                <label>Please add image here</label>
                <input
                    type="file"
                    className='ml-2.5 my-0 mr-4 bg-indigo-500 p-2.5 rounded-xl'
                    onChange={(e) => handleImageChange(e)}
                    required
                />
                <label>Please add music file here</label>
                <input
                    type="file"
                    name="music"
                    className='ml-2.5 my-0 mr-4 bg-indigo-500 border p-2.5 rounded-xl'
                    placeholder="Music name"
                    onChange={(e) => handleMusicChange(e)}
                    required
                />
                <input
                    type="text"
                    className='ml-2.5 my-0 mr-4 outline-1 border border-indigo-500 p-2.5 rounded-xl'
                    name="musicname"
                    placeholder="Music name"
                    required
                />
                <button
                    type='submit'
                    disabled={disable}
                    className='border-none py-2.5 px-6 bg-indigo-700
                    hover:bg-indigo-600 cursor-pointer rounded-2xl text-white'
                >Submit
                </button>
            </form>
            {/* <progress min="0" max="100" value="65" /> */}
        </div>
    )
}

export default Upload