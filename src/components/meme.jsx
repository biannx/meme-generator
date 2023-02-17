import React, { useState, useEffect } from "react";

export default function Meme() {

	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	})

	const [allMemes, setAllMemes] = useState([])

	useEffect(() => {
		async function getMemes(){
			const response = await fetch("https://api.imgflip.com/get_memes")
			const data = await response.json()
			setAllMemes(data.data.memes)
		}
		getMemes()
	}, [])


	function getMemeImage() {
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const url = allMemes[randomNumber].url
		setMeme(prevMemes => ({
			...prevMemes,
			randomImage: url
		}))
		console.log("changed!")
	}

	// controlled inputs for top and bottom text for every character stroke/value
	function handleChange(Event) {
		const { name, value } = Event.target
		setMeme(prevMeme => ({
			...prevMeme,
			[name]: value
		}))
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
						name="topText"
						onChange={handleChange}
						value={meme.topText}
					/>
					<label htmlFor="floatingTop">Top text</label>
				</div>

				{/* bottom text */}
				<div className="col-lg-6 col-sm-12 form-floating">
					<input
						type="text"
						className="form-control px-3"
						id="floatingBottom"
						placeholder="test"
						name="bottomText"
						onChange={handleChange}
						value={meme.bottomText}
					/>
					<label htmlFor="floatingBottom">Bottom text</label>
				</div>
			</div>
			<button
				type="button"
				className="w-100 py-2 my-3 text-light"
				onClick={getMemeImage}
			>
				Get a new meme image 🖼
			</button>
			<div className="meme">
				<img src={meme.randomImage} className="meme-image" alt="Meme Image" />
				<h2 className="meme-text top">{meme.topText}</h2>
				<h2 className="meme-text bottom">{meme.bottomText}</h2>
			</div>
			<br />
		</main>
	)
}