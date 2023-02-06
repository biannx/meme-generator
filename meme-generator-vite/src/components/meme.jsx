import React from "react";

export default function Meme() {
    return (
        <main className="container my-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12 form-floating mb-3">
                    <input
                        type="text"
                        className="form-control px-3"
                        id="floatingTop"
                        placeholder="test"
                    >
                    </input>
                    <label for="floatingInput">Top text</label>
                </div>
                <div className="col-lg-6 col-sm-12 form-floating">
                    <input
                        type="text"
                        className="form-control px-3"
                        id="floatingBottom"
                        placeholder="test"
                    >
                    </input>
                    <label for="floatingPassword">Bottom text</label>
                </div>
            </div>
            <button type="button" className="w-100 py-3 my-3 text-light">
                Get a new meme image 🖼
            </button>
        </main>
    )
}