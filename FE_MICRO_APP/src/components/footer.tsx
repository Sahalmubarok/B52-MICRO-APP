import React from "react";
import Logo from "../assets/images/logo-db.png"

const Footer : React.FC = () => {
    return (
        <div>
            <div className="flex bg-black h-[291px] items-center pl-36">
                <img className="w-28 h-28" src={Logo} alt="logo-db" />
                <div>
                    <p className="text-white pl-10 text-2xl font-bold "> DUMBWAYS.ID </p>
                    <p className="text-white pl-10"> Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota 
                    <br/>Tangerang Selatan, Banten 15413 </p>
                </div>
            </div>
            <div className="bg-black h-20 mt-1 pt-6">
                <p className="text-white font-medium text-center text-xl">
                Komisi Pemilihan Umum DumbWays.ID | Sahalmubarok 2023
                </p>
            </div>
        </div>
    )
}

export default Footer;