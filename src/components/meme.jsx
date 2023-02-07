import React from "react";
import memesData from "../data.jsx"

export default function Meme() {
    const [memeImage, setmemeImage] = React.useState(null);

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setmemeImage(memesArray[randomNumber].url)
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
                    <label for="floatingInput">Top text</label>
                </div>

                {/* bottom text */}
                <div className="col-lg-6 col-sm-12 form-floating">
                    <input
                        type="text"
                        className="form-control px-3"
                        id="floatingBottom"
                        placeholder="test"
                    />
                    <label for="floatingPassword">Bottom text</label>
                </div>
            </div>
            <button 
                type="button" 
                className="w-100 py-2 my-3 text-light"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
            <img src={memeImage} alt="Meme Image" className="meme-image" />
        </main>
    )
}