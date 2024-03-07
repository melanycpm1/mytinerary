import React from "react"
/*border-solid border-b-4*/
/* h-2.5 w-6 bg-sky-800 */
function Navbar() {
    return(
        <header className="flex justify-between items-center"> 
            <div>
                <span className="text-2xl font-bold">My Tinerary</span>
            </div>
            <div>
                <nav>
                    <ul className="flex items-center gap-x-9">
                        <li>
                            <a href="#" className="text-base font-medium">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-base font-medium">City</a>
                        </li>
                        <li className="">
                            <button className="text-base font-medium bg-sky-800 px-7 py-4 rounded-xl">Login</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Navbar