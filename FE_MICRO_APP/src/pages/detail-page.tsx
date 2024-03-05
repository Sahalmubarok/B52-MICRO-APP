import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Arrow from "../assets/images/Arrow.png"
import ImageKPU from "../assets/images/imagekpu.png"

const DetailPage : React.FC = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>

            <div className="bg-[#cecece] h-[1934px] flex justify-center">
                <div className="bg-white w-4/5 pt-5">
                    <div className="flex">
                        <div className="flex gap-3 w-1/3 ml-10">
                            <img className="w-6 h-4 mt-1" src={Arrow} alt="Logo-Arrow" />
                            <a className="text-l" href="">Beranda</a>
                        </div>
                        <div className="flex w-2/3 text-l ml-32">
                            BERITA HARI INI
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <p className="text-[37px] font-bold text-[#5d5a00] "> KPU DUMBWAYS TETAPKAN 3 MENTOR TERBAIK </p>
                    </div>
                    <div className="flex justify-center text-xl">
                        <div>
                            <p className="flex justify-center">Super Admin</p>
                            <p className="flex justify-center">Senin, 03 Januari 2023</p>
                        </div>
                    </div>
                    <div className="h-[540px] mt-6 flex justify-center">
                        <img className="w-[960px]" src={ImageKPU} alt="Image KPU" />
                    </div>
                    
                    <div className="p-6 text-justify mt-6 text-xl">
                        <p>
                            Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. 
                            Sed a lacinia elit. Curabitur eu dapibus tellus. Proin fermentum purus id lectus imperdiet, 
                            vel feugiat enim interdum. Sed non diam vel mi tristique interdum. Integer bibendum, 
                            nulla ac euismod commodo, quam mi vehicula justo, eu dapibus ligula massa vel ligula. 
                            Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti. Sed interdum, 
                            lacus ac ultrices facilisis, ligula enim pellentesque elit, vel varius nisi odio at purus. 
                            Sed suscipit purus quis tortor posuere, in varius est euismod. Mauris aliquam urna non elit 
                            faucibus, eu fermentum turpis mattis. Quisque vel nisl vitae sapien congue dapibus. Vivamus auctor, 
                            velit ut condimentum bibendum, purus lacus scelerisque ligula, nec gravida arcu velit id libero. 
                            In hac habitasse platea dictumst. 
                        </p>
                        <p className="mt-5">
                            Fusce eu ex vel turpis pellentesque iaculis. Praesent sit amet mi ut turpis malesuada aliquam 
                            a eu orci. Maecenas ut purus eu sapien vestibulum vulputate. Fusce tincidunt fringilla arcu, 
                            non efficitur sapien scelerisque et. Maecenas facilisis eros id enim tincidunt, ac vestibulum 
                            quam fringilla. Nullam vel malesuada mi, vitae convallis libero. In hac habitasse platea dictumst. 
                            Duis cursus nunc vel metus rhoncus, id cursus justo imperdiet. Integer vitae ex ac libero fermentum 
                            volutpat ut vitae sapien. Aliquam id luctus nisl. Curabitur et augue ut justo tincidunt varius vel 
                            sit amet nunc. Integer tincidunt risus sit amet odio euismod, a finibus ligula blandit. 
                            Integer euismod, purus ut malesuada varius, lectus orci feugiat massa, ut egestas enim massa vel urna.
                        </p>
                        <p className="mt-5">
                            Vivamus id dictum augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames 
                            ac turpis egestas. Nulla facilisi. Curabitur aliquet ligula eu nisl bibendum, vel tincidunt justo 
                            feugiat. Nam dapibus, ligula id dapibus fermentum, odio libero luctus nunc, et scelerisque sapien 
                            libero vel ante. Etiam id odio nec nunc rhoncus lacinia nec eu massa. Nullam fermentum, felis ac 
                            bibendum malesuada, lectus felis fermentum dolor, a fermentum sapien mauris vel dui. Fusce vel turpis 
                            eu purus fermentum tincidunt a vel elit. Phasellus efficitur sapien vel efficitur rhoncus. 
                            Integer vel risus ut neque elementum gravida. Morbi rhoncus, ligula nec posuere tristique, 
                            ligula lacus dapibus urna, a lacinia sem metus id libero. Suspendisse luctus ligula eu mauris auctor, non semper elit feugiat.
                        </p>
                        <p className="mt-5">
                            Praesent ac tortor vel urna fermentum luctus. Nam posuere justo ut efficitur dapibus. Sed a lacinia elit. 
                            Curabitur eu dapibus tellus. Proin fermentum purus id lectus imperdiet, vel feugiat enim interdum. 
                            Sed non diam vel mi tristique interdum. Integer bibendum, nulla ac euismod commodo, quam mi vehicula justo, 
                            eu dapibus ligula massa vel ligula. Nulla facilisi. Integer sit amet congue massa. Suspendisse potenti.
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

export default DetailPage;