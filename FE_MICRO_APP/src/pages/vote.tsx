import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Paslon1 from "../assets/images/paslon1.png"

const Vote : React.FC = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <div className="flex flex-col h-[1550px]">
                    <div className="bg-white h-1/2 flex justify-center">
                        <div className="w-4/5  flex flex-col mt-12">
                            <div className="flex justify-center">
                                <p className="text-[37px] font-bold text-[#5d5a00]">INFO PEMILU TERUPDATE</p>
                            </div>
                            <div className="mt-14 flex h-[400px]">
                                <div className="w-[400px] mt-2">
                                    <p className="flex justify-center font-bold text-[30px]">Hasil:</p>
                                    <div className="flex justify-center mt-3">
                                        <div className="bg-[#ff6384] w-[330px] h-[330px] rounded-full"></div>
                                    </div>
                                </div>
                                <div className="w-[620px] grid gap-y-4">
                                    <div className="h-[120px] bg-[#ff6384] rounded-2xl">
                                        <div className="flex ml-6 mt-4 h-[90px]">
                                            <div className="bg-[#5d0000] w-[70px] rounded-md border-2 border-white p-2">
                                                <p className="text-white text-center text-sm leading-4">
                                                    No. Paslon
                                                </p>
                                                <p className="text-white text-center text-3xl font-bold ">
                                                    3
                                                </p>
                                            </div>
                                            <div className="ml-7">
                                                <div>
                                                    <p className="text-[#5d0000] text-4xl font-bold">
                                                        CINTARA SURYA PALOH
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-4xl font-bold">
                                                        78%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[120px] bg-[#ffcd56] rounded-2xl">
                                        <div className="flex ml-6 mt-4 h-[90px]">
                                            <div className="bg-[#5d5400] w-[70px] rounded-md border-2 border-white p-2">
                                                <p className="text-white text-center text-sm leading-4">
                                                    No. Paslon
                                                </p>
                                                <p className="text-white text-center text-3xl font-bold ">
                                                    1
                                                </p>
                                            </div>
                                            <div className="ml-7">
                                                <div>
                                                    <p className="text-[#5d5400] text-4xl font-bold">
                                                        CINTARA SURYA 
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-4xl font-bold">
                                                        45%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[120px] bg-[#36a2eb] rounded-2xl">
                                        <div className="flex ml-6 mt-4 h-[90px]">
                                            <div className="bg-[#005d4d] w-[70px] rounded-md border-2 border-white p-2">
                                                <p className="text-white text-center text-sm leading-4">
                                                    No. Paslon
                                                </p>
                                                <p className="text-white text-center text-3xl font-bold ">
                                                    2
                                                </p>
                                            </div>
                                            <div className="ml-7">
                                                <div>
                                                    <p className="text-[#005d4d] text-4xl font-bold">
                                                        CINTARA 
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className=" text-4xl font-bold">
                                                        25%
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[400px] h-[67px] bg-[#5d5a00] rounded-2xl mt-12">
                                        <p className="text-2xl font-bold text-white flex justify-center mt-4">MASUKAN SUARAMU</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    <div className="bg-[#cecece] h-1/2 flex justify-center">
                        <div className="w-4/5 flex justify-center">
                            <div className="w-[870px] ">
                                <div className="flex justify-center mt-20">
                                    <p className="text-[37px] font-bold text-[#5d5a00]">INFO PASLON</p>
                                </div>
                                <div className="h-[494px] bg-white mt-8 px-12 pt-14">
                                    <div className="h-[380px] flex">
                                        <div className="w-1/3">
                                            <img className="w-full h-[365px]" src={Paslon1} alt="image paslon1" />
                                        </div>
                                        <div className="w-2/3 ml-7">
                                            <p className="font-bold text-xl">Nomor Urut : 1</p>
                                            <p className="text-[37px] font-bold text-[#5d0000]">CINTARA SURYA PALOH</p>
                                            <div className="text-xl">
                                                <p>Visi dan Misi:</p>
                                                <ul className="list-disc ml-7 ">
                                                    <li>Memindahkan Indonesia ke Isekai.</li>
                                                    <li>Nonton anime 3x sehari</li>
                                                    <li>Melakukan peresapan pada budaya jepang.</li>
                                                </ul>
                                            </div>
                                            <div className="mt-5 text-xl">
                                                <p>Koalisi:</p>
                                                <ul className="list-disc ml-7">
                                                    <li>Partai Persatuan Wiboo.</li>
                                                    <li>Partai Redbull</li>
                                                    <li>Partai Black Magic.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center bg-white h-[384px] p-44">
                    <div >
                        <p className="text-4xl font-bold text-center text-red-500">
                            PILIH BERDASARKAN GACHA TIDAK USAH SERIUS
                            YANG PENTING TIDAK MELEGALKAN SLOT
                        </p> 
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Vote;