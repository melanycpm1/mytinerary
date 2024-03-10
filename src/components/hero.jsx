import React from "react"
import hero from "../assets/img/hero.jpg"

function Hero() {
    return (
        <>
            <img src={hero} alt="Descripción de la imagen" className="w-full h-96 object-cover "/>
            <div className="relative bottom-60 flex flex-col items-end mr-7">
                <h1 className="text-5xl font-extrabold text-white mb-6">My Tinerary</h1>
                <p className="text-white w-72 text-sm mb-6">FInd your perfect trip designed by insider who know and love their cities!</p>
                <button className="rounded-lg px-2.5 py-2 mr-20 bg-cyan-50">View More</button>
            </div>
        </>
    )
}

export default Hero