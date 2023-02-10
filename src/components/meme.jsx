import React, {useState} from "react";
import memesData from "../data.jsx"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme(prevMemes => ({
            ...prevMemes,
            randomImage: url
        }))
        console.log("changed!")
    }


    return (
        <main className="container my-5">
            <div className="row">
                {/* top text */}
                <div className="col-lg-6 col-sm-12 form-floating mb-3">
                    <input
                        type="text"
                        className="form-control px-3"
                        id="floatingTop"
                        placeholder="test"
                    />
                    <label htmlFor="floatingInput">Top text</label>
                </div>

                {/* bottom text */}
                <div className="col-lg-6 col-sm-12 form-floating">
                    <input
                        type="text"
                        className="form-control px-3"
                        id="floatingBottom"
                        placeholder="test"
                    />
                    <label htmlFor="floatingPassword">Bottom text</label>
                </div>
            </div>
            <button 
                type="button" 
                className="w-100 py-2 my-3 text-light"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
            <img src={meme.randomImage} alt="Meme Image" className="meme-image" />
            <br />
        </main>
    )
}