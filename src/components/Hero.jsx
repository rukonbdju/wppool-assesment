const Hero=()=>{
    return(
        <div className="w-screen h-screen relative overflow-hidden">
            <div className="bg-[url('../src/assets/photos/dots.png')] bg-center bg-no-repeat mix-blend-multiply">
                <div className="w-screen h-screen bg-[#2042B6] mix-blend-multiply"></div>
                <div className="absolute top-0 left-0 h-full w-[calc(100vw-20px)]">
                    <div className="relative w-full h-full">
                        <header className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h1 className="text-[78px] text-white text-center">The WPPOOL Index</h1>
                            <p className="text-[21px] text-white font-[350px] text-center">Monitor the performance of
                                emerging, publicly traded, financial technology companie</p>
                        </header>
                        <div className="absolute flex flex-col gap-12 left-10 bottom-10">
                            <div>
                                <p className="text-[36px] text-white">60</p>
                                <p className="text-[16px] text-white">Companies</p>
                            </div>
                            <div>
                                <p className="text-[36px] text-white">$100B</p>
                                <p className="text-[16px] text-white">Market cap</p>
                            </div>
                            <div>
                                <p className="text-[36px] text-white">3.5x</p>
                                <p className="text-[16px] text-white">Revenue multiple</p>
                            </div>
                            <div>
                                <p className="text-[36px] text-white">60%</p>
                                <p className="text-[16px] text-white">LTM avg. revenue growth rate</p>
                            </div>
                        </div>
                        <div className="absolute right-10 bottom-10">
                            
                            <div>
                                <svg className="p-4 bg-white rounded-[124px] drop-shadow-md" width="64" height="64"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.99881 16.0769L0.921875 8.99992L1.86548 8.05632L7.33214 13.523V0.333252H8.66548V13.523L14.1321 8.05632L15.0757 8.99992L7.99881 16.0769Z"
                                        fill="#2042B6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero