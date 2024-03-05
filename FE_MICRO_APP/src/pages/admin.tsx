import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Imgpaslon from "../assets/images/img_paslon.png"

const Admin : React.FC = () => {
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
                                <p className="text-[37px] font-bold text-[#5d5a00]">DASHBOARD</p>
                            </div>
                            <div className="mt-12 flex h-[450px] gap-x-3">
                                <div className="w-1/3">
                                    <div className="h-[67px]">
                                        <div className="flex items-center justify-center">
                                            <div className="bg-[#ffcd56] w-16 h-16 rounded-full flex items-center justify-center border-[6px] border-[#5d5400]">
                                                <p className="text-black text-2xl font-bold">1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[383px] bg-[#ffcd56] rounded-2xl mt-4 shadow-2xl">
                                        <div className="flex justify-center">
                                            <img className="w-[310px] mt-4" src={Imgpaslon} alt="img-paslon" />
                                        </div>
                                        <div className="ml-4"> 
                                            <p className="w-[310px] mt-1 text-[35px] font-bold text-[#5d5400]">SURYA SURYA</p>
                                            <p className="w-[310px] font-bold text-[#5d5400]">Akumulasi: 45%</p>
                                            <p className="w-[310px] font-bold text-[#5d5400]">Jumlah Vote: 117 Voters</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/3 ">
                                    <div className="h-[67px]">
                                        <div className="flex items-center justify-center">
                                            <div className="bg-[#56fff5] w-16 h-16 rounded-full flex items-center justify-center border-[6px] border-[#00585d]">
                                                <p className="text-black text-2xl font-bold">2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[383px] bg-[#56fff5] rounded-2xl mt-4 shadow-2xl">
                                        <div className="flex justify-center">
                                            <img className="w-[310px] mt-4" src={Imgpaslon} alt="img-paslon" />
                                        </div>
                                        <div className="ml-4"> 
                                            <p className="w-[310px] mt-1 text-[35px] font-bold text-[#00585d]">SURYA SURYA</p>
                                            <p className="w-[310px] font-bold text-[#00585d]">Akumulasi: 75%</p>
                                            <p className="w-[310px] font-bold text-[#00585d]">Jumlah Vote: 300 Voters</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/3 ">
                                    <div className="h-[67px]">
                                        <div className="flex items-center justify-center">
                                            <div className="bg-[#ff5656] w-16 h-16 rounded-full flex items-center justify-center border-[6px] border-[#5d0000]">
                                                <p className="text-black text-2xl font-bold">3</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[383px] bg-[#ff5656] rounded-2xl mt-4 shadow-2xl">
                                        <div className="flex justify-center">
                                            <img className="w-[310px] mt-4" src={Imgpaslon} alt="img-paslon" />
                                        </div>
                                        <div className="ml-4"> 
                                            <p className="w-[310px] mt-1 text-[35px] font-bold text-[#5d0000]">SURYA SURYA</p>
                                            <p className="w-[310px] font-bold text-[#5d0000]">Akumulasi: 45%</p>
                                            <p className="w-[310px] font-bold text-[#5d0000]">Jumlah Vote: 117 Voters</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    <div className="bg-[#cecece] h-1/2 flex justify-center">
                        <div className="w-4/5 flex justify-center">
                            <div className="w-[870px] ">
                                <div className="flex justify-center mt-28">
                                    <p className="text-[37px] font-bold text-[#5d5a00]">LIST VOTER</p>
                                </div>
                                    <table className="table-auto w-[870px] h-[150px] bg-white mt-8 px-12 pt-14 border-2 border-neutral-400">
                                        <thead className="bg-neutral-200 h-[40px] border-2 border-neutral-400">
                                            <tr className="border-2 border-neutral-400">
                                                <th>No</th>
                                                <th>Nama</th>
                                                <th>Alamat</th>
                                                <th>Jenis Kelamin</th>
                                                <th>Paslon</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="h-[40px] border-2 border-neutral-400">
                                                <td>1</td>
                                                <td>Sugeng No Pants</td>
                                                <td>Cileungsi</td>
                                                <td>Laki-laki</td>
                                                <td>Paloh</td>
                                            </tr>
                                            <tr className="h-[40px] border-2 border-neutral-400">
                                                <td>2</td>
                                                <td>Haris Gams</td>
                                                <td>Serang</td>
                                                <td>Perempuan</td>
                                                <td>Surya</td>
                                            </tr>
                                            <tr className="h-[40px] border-2 border-neutral-400">
                                                <td>3</td>
                                                <td>Aziz Union</td>
                                                <td>Bekasi</td>
                                                <td>Laki-laki</td>
                                                <td>Cintara</td>
                                            </tr>
                                            <tr className="h-[40px] border-2 border-neutral-400">
                                                <td>4</td>
                                                <td>Lae Tanjung Balai</td>
                                                <td>Tanjung Balai</td>
                                                <td>Laki-laki</td>
                                                <td>Paloh</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                <div className="mt-10">
                                    <p className="text-xl font-bold">TOTAL SUARA TERKUMPUL : 1000 Voters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Admin;