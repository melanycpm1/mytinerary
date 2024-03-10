import React, { useState } from "react";
import country from "../data/data";

function Caroussel() {
    const [currentSlice, setCurrentSlice] = useState(0);

    const nextSlice = () => {
        setCurrentSlice((currentSlice + 1) % 3);
    };

    const prevSlice = () => {
        setCurrentSlice((currentSlice - 1 + 3) % 3);
    };

    const startIndex = currentSlice * 4;
    const endIndex = startIndex + 4;

    return (
        <div className="carousel">
            <div className="slide-container grid grid-rows-2 grid-cols-2 w-9/12 m-auto">
                {country.slice(startIndex, endIndex).map((place, index) => (
                    <div key={index} className="slide">
                        <img src={place.image} alt={place.name} className="w-4/5 h-4/5 object-cover"/>
                    </div>
                ))}
            </div>
            <div className="flex justify-between relative bottom-80">
                <button onClick={prevSlice}>«—</button>
                <button onClick={nextSlice}>—»</button>
            </div>
        </div>
    );
}

export default Caroussel;
