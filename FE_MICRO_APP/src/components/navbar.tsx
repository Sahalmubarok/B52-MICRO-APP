import React from "react";
import Logo from "../assets/images/logo-db.png"

const Navbar : React.FC = () => {
    const [isLogin, setIsLogin] = React.useState<boolean>(false)

    const loggedIn = () : void => {
        setIsLogin(!isLogin)
    }
    return (
            <div className="flex justify-between items-center bg-black text-white h-[64px] px-32">
                <div className="flex items-center">
                    <div className="h-10 items-center">
                        <img className="h-full" src={Logo} alt="logo-db" />
                    </div>
                    <p className="px-4 font-bold text-xl">PEMILU PRESIDEN DUMBWAYS.ID</p>
                </div>
                <div className="flex">
                    <ul className="flex px-5">
                        <li className="px-2">Partai</li>
                        <li className="px-2">|</li>
                        <li className="px-2">Paslon</li>
                        <li className="px-2">|</li>
                        <li className="px-2">Voting</li>
                    </ul>

                    <button className="bg-white text-black font-bold px-5 rounded">
                        LOGIN
                    </button>
                </div>
            </div>
    )
}

export default Navbar;

            // <div>
            //     <div className="bg-white w-11 h-11 rounded-full flex items-center p-3.5">
            //         <p className="text-black text-xl font-bold">D</p>
            //     </div>
            // </div>


        // <>
        //     <p>Test Kondisional Rendering</p>
        //     <p>{isLogin ? "Berhasil Login" : "Belum Login"}</p>

        //     <button className="bg-gray-400" onClick={loggedIn}>
        //         Login
        //     </button>
        // </>