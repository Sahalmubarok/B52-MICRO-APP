import Footer from "../components/footer";
import Navbar from "../components/navbar"
import Logo from "../assets/images/dumbways.png"
import KotakSuara from "../assets/images/kotak-suara.png"
import ImageKPU from "../assets/images/imagekpu.png"

const Home : React.FC = () => {
    return (
        <div>
            <div>
                <Navbar/>    
            </div>
            <div>
                <div className="flex bg-[#cecece] justify-center py-12 h-[1550px]">
                    <div className="w-4/5">
                        <div>
                            <div className="flex bg-gradient-to-r from-red-900 to-red-950 h-[516px] rounded-xl">
                                <div className="w-full">
                                    <img className="w-80" src={Logo} alt="logo-dumbways" />
                                    <div className="mt-32 ml-5">
                                        <p className="text-white font-bold text-6xl">SELAMAT DATANG</p>
                                        <p className="text-white text-2xl">PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR
                                        <br/> DIPILIH MELALUI SEBUAH ARTI NAMA</p>
                                    </div>
                                </div>
                                <div className="mr-24">
                                    <img className="w-[430px]" src={KotakSuara} alt="Kotak-Suara" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="pt-16 ">
                                <div className="flex bg-neutral-300 w-full h-[867px] rounded-xl gap-4">
                                            
                                    <div className="flex flex-col bg-neutral-300 w-2/3 gap-4"> 
                                        <div className="bg-cover h-[421px]" style={{backgroundImage: `url(${ImageKPU})`}} >
                                            <div className="px-6 pt-[297px]">
                                                <span className="inline-block bg-red-500 rounded-lg px-3 py-1 text-sm font-semibold text-white">Senin, 03 Januari 2023</span>
                                            </div>
                                            <div className="px-6 py-4 bg-gradient-to-t from-black">
                                                <div className="font-bold text-white text-3xl">KPU TETAPKAN 3 MENTOR TERBAIK</div>
                                                <p className=" text-base text-white text-xl font-semibold">
                                                    Super Admin
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 h-[421px]">    
                                            <div className="bg-white">
                                                <img className="w-full h-[223px]" src={ImageKPU} alt="Image-KPU"/>
                                                <div className="px-6 pt-6">
                                                    <span className="inline-block bg-red-500 rounded-lg px-3 py-1 text-sm font-semibold text-white">Senin, 03 Januari 2023</span>
                                                </div>
                                                <div className="px-6 py-4">
                                                    <div className="font-bold text-3xl">KPU TETAPKAN 3 MENTOR TERBAIK</div>
                                                    <p className=" text-base text-xl font-semibold">
                                                        Super Admin
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bg-white">
                                                <img className="w-full h-[223px]" src={ImageKPU} alt="Image-KPU"/>
                                                <div className="px-6 pt-6">
                                                    <span className="inline-block bg-red-500 rounded-lg px-3 py-1 text-sm font-semibold text-white">Senin, 03 Januari 2023</span>
                                                </div>
                                                <div className="px-6 py-4">
                                                    <div className="font-bold text-3xl">KPU TETAPKAN 3 MENTOR TERBAIK</div>
                                                    <p className=" text-base text-xl font-semibold">
                                                        Super Admin
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    <div className="flex flex-col bg-neutral-300 w-1/3 gap-4">
                                            
                                        <div className="bg-white h-[421px]">
                                            <img className="w-full h-[223px]" src={ImageKPU} alt="Image-KPU"/>
                                            <div className="px-6 pt-6">
                                                <span className="inline-block bg-red-500 rounded-lg px-3 py-1 text-sm font-semibold text-white">Senin, 03 Januari 2023</span>
                                            </div>
                                            <div className="px-6 py-4">
                                                <div className="font-bold text-3xl">KPU TETAPKAN 3 MENTOR TERBAIK</div>
                                                <p className=" text-base text-xl font-semibold">
                                                    Super Admin
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white h-[421px]">
                                            <img className="w-full h-[223px]" src={ImageKPU} alt="Image-KPU"/>
                                            <div className="px-6 pt-6">
                                                <span className="inline-block bg-red-500 rounded-lg px-3 py-1 text-sm font-semibold text-white">Senin, 03 Januari 2023</span>
                                            </div>
                                                <div className="px-6 py-4">
                                                    <div className="font-bold text-3xl">KPU TETAPKAN 3 MENTOR TERBAIK</div>
                                                    <p className=" text-base text-xl font-semibold">
                                                        Super Admin
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center bg-white h-[384px] p-12">
                    <div >
                        <p className="text-4xl font-bold text-center">PILIHLAH CALON PRESIDEN MENTOR DARI REKAM JEJAK YANG JELAS PASTIKAN 
                        MEREKA TIDAK MEMILIKI VISI MISI UNTUK MELEGALKAN SLOT</p> 
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;


    
    {/* <div className="pt-16 ">
        <div className="flex flex-col bg-neutral-200 h-[867px] rounded-xl gap-4">
                
            <div className="flex flex-row bg-neutral-200 h-[421px] gap-4"> 
                <div className="bg-cover w-2/3" style={{backgroundImage: `url(${ImageKPU})`}} >
                    <div className="px-6 pt-[297px]">
                        <span className="inline-block bg-red-500 rounded-lg px-3 py-1 text-sm font-semibold text-white">Senin, 03 Januari 2023</span>
                    </div>
                    <div className="px-6 py-4 bg-gradient-to-t from-black">
                        <div className="font-bold text-white text-3xl">KPU TETAPKAN 3 MENTOR TERBAIK</div>
                        <p className=" text-base text-white text-xl font-semibold">
                         Super Admin
                        </p>
                    </div>
                </div>
                    
                <div className="bg-white w-1/3">
                    <img className="w-full h-[223px]" src={ImageKPU} alt="Image-KPU"/>
                    <div className="px-6 pt-6">
                         <span className="inline-block bg-red-500 rounded-lg px-3 py-1 text-sm font-semibold text-white">Senin, 03 Januari 2023</span>
                     </div>
                     <div className="px-6 py-4">
                         <div className="font-bold text-3xl">KPU TETAPKAN 3 MENTOR TERBAIK</div>
                         <p className=" text-base text-xl font-semibold">
                        Super Admin
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row bg-neutral-200 w-full h-[421px] gap-4">
                <div className="bg-white w-1/3">
                    <img className="w-full h-[223px]" src={ImageKPU} alt="Image-KPU"/>
                    <div className="px-6 pt-6">
                        <span className="inline-block bg-red-500 rounded-lg px-3 py-1 text-sm font-semibold text-white">Senin, 03 Januari 2023</span>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-3xl">KPU TETAPKAN 3 MENTOR TERBAIK</div>
                        <p className=" text-base text-xl font-semibold">
                        Super Admin
                        </p>
                    </div>
                </div>
                <div className="bg-white w-1/3">
                    <img className="w-full h-[223px]" src={ImageKPU} alt="Image-KPU"/>
                    <div className="px-6 pt-6">
                        <span className="inline-block bg-red-500 rounded-lg px-3 py-1 text-sm font-semibold text-white">Senin, 03 Januari 2023</span>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-3xl">KPU TETAPKAN 3 MENTOR TERBAIK</div>
                        <p className=" text-base text-xl font-semibold">
                        Super Admin
                        </p>
                    </div>
                </div>
                <div className="bg-white w-1/3">
                    <img className="w-full h-[223px]" src={ImageKPU} alt="Image-KPU"/>
                    <div className="px-6 pt-6">
                        <span className="inline-block bg-red-500 rounded-lg px-3 py-1 text-sm font-semibold text-white">Senin, 03 Januari 2023</span>
                    </div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-3xl">KPU TETAPKAN 3 MENTOR TERBAIK</div>
                            <p className=" text-base text-xl font-semibold">
                            Super Admin
                            </p>
                        </div>
                </div>
            </div>
        </div>
    </div> */}