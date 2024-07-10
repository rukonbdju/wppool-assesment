import LineChart from "./LineChart"

const WppoolIndex = () => {
    return (
        <div className="flex flex-row gap-2 mt-[60px] bg-white w-11/12 mx-auto">
            <section className="basis-1/5 bg-[#EFF3F6] m-2 p-2 rounded-[14px]">
                <div className="flex flex-col gap-2">
                    <p
                        className="p-2 rounded-[6px] text-white flex flex-row items-center justify-between bg-[#2042B6] drop-shadow-lg">
                        <span className="text-[16px]">The Index</span>
                        <span>-</span>
                    </p>
                    <p className="p-2 rounded-[6px] text-[#647888] flex flex-row items-center justify-between">
                        <span className="text-[16px]">The Index Tab Two</span>
                        <span>+</span>
                    </p>
                    <p className="p-2 rounded-[6px] text-[#647888] flex flex-row items-center justify-between">
                        <span className="text-[16px]">The Index Tab Three</span>
                        <span>+</span>
                    </p>
                    <p className="p-2 rounded-[6px] text-[#647888] flex flex-row items-center justify-between">
                        <span className="text-[16px]">The Index Tab Four</span>
                        <span>+</span>
                    </p>
                    <p className="p-2 rounded-[6px] text-[#647888] flex flex-row items-center justify-between">
                        <span className="text-[16px]">The Index Tab Five</span>
                        <span>+</span>
                    </p>
                </div>
            </section>
            <section className="basis-4/5  m-2 p-2">
                <header className="flex flex-row items-center">
                    <svg width="46" height="41" viewBox="0 0 46 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.914491 40.5L26.5591 0.5H45.0855L19.4409 40.5H0.914491Z" stroke="#191618" />
                    </svg>
                    <h1 className="text-[36px]">The WPPOOL Index</h1>
                </header>
                <div className="grid grid-cols-4 gap-4 items-center justify-between my-2">
                    <div className="p-2 bg-[#F3F3F3] rounded-[6px] flex flex-row items-center justify-between">
                        <h2 className="text-[30px] text-[#FC714D]">+66.2%</h2>
                        <div className="flex flex-row gap-2 items-center">
                            <p className="text-right text-[12px]">WPPOOL <br /> Index</p>
                            <div className="w-1 min-h-[30px] rounded-[1px] bg-[#FC714D]"></div>
                        </div>
                    </div>
                    <div className="p-2 bg-[#F3F3F3] rounded-[6px] flex flex-row items-center justify-between">
                        <h2 className="text-[30px] text-[#FC714D]">+26.6%</h2>
                        <div className="flex flex-row gap-2 items-center">
                            <p className="text-right text-[12px]">Google <br /> Index</p>
                            <div className="w-1 min-h-[30px] rounded-[1px] bg-[#FC714D]"></div>
                        </div>
                    </div>
                    <div className="p-2 bg-[#F3F3F3] rounded-[6px] flex flex-row items-center justify-between">
                        <h2 className="text-[30px] text-[#FC714D]">+34.1%</h2>
                        <div className="flex flex-row gap-2 items-center">
                            <p className="text-right text-[12px]">Microsoft <br /> Index</p>
                            <div className="w-1 min-h-[30px] rounded-[1px] bg-[#FC714D]"></div>
                        </div>
                    </div>
                    <div className="p-2 bg-[#F3F3F3] rounded-[6px] flex flex-row items-center justify-between">
                        <h2 className="text-[30px] text-[#FC714D]">+17%</h2>
                        <div className="flex flex-row gap-2 items-center">
                            <p className="text-right text-[12px]">Twitter <br /> Index</p>
                            <div className="w-1 min-h-[30px] rounded-[1px] bg-[#FC714D]"></div>
                        </div>
                    </div>
                </div>
                <div className="my-4 flex flex-row items-center justify-between">
                    <div>
                        <button
                            className="inline-flex w-[178px] items-center justify-between rounded-[124px] px-2 text-white bg-[#2042B6]">Sector
                            <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.4177 3.91732L0.251037 1.75065C-0.0128516 1.48676 -0.0718794 1.18468 0.0739539 0.844401C0.219787 0.504123 0.480204 0.333984 0.855204 0.333984H5.14687C5.52187 0.333984 5.78229 0.504123 5.92812 0.844401C6.07395 1.18468 6.01493 1.48676 5.75104 1.75065L3.58437 3.91732C3.50104 4.00065 3.41076 4.06315 3.31354 4.10482C3.21632 4.14648 3.11215 4.16732 3.00104 4.16732C2.88993 4.16732 2.78576 4.14648 2.68854 4.10482C2.59132 4.06315 2.50104 4.00065 2.4177 3.91732Z"
                                    fill="white" />
                            </svg>
                        </button>
                        <button
                            className="inline-flex w-[178px] items-center justify-between rounded-[124px] px-2 text-white bg-[#2042B6]">Type
                            <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.4177 3.91732L0.251037 1.75065C-0.0128516 1.48676 -0.0718794 1.18468 0.0739539 0.844401C0.219787 0.504123 0.480204 0.333984 0.855204 0.333984H5.14687C5.52187 0.333984 5.78229 0.504123 5.92812 0.844401C6.07395 1.18468 6.01493 1.48676 5.75104 1.75065L3.58437 3.91732C3.50104 4.00065 3.41076 4.06315 3.31354 4.10482C3.21632 4.14648 3.11215 4.16732 3.00104 4.16732C2.88993 4.16732 2.78576 4.14648 2.68854 4.10482C2.59132 4.06315 2.50104 4.00065 2.4177 3.91732Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>
                    <div className="bg-[#EFF3F6] rounded-[124px] pl-8 pr-2 py-1">
                        <button
                            className="text-[12px] text-[#748DA1] rounded-[124px] hover:bg-[#2042B6] hover:text-white px-2 py-1">1Y</button>
                        <button
                            className="text-[12px] text-[#748DA1] rounded-[124px] hover:bg-[#2042B6] hover:text-white px-2 py-1">YTD</button>
                        <button className="text-[12px] rounded-[124px] bg-[#2042B6] text-white px-2 py-1">6M</button>
                        <button
                            className="text-[12px] text-[#748DA1] rounded-[124px] hover:bg-[#2042B6] hover:text-white px-2 py-1">1M</button>
                        <button
                            className="text-[12px] text-[#748DA1] rounded-[124px] hover:bg-[#2042B6] hover:text-white px-2 py-1">1W</button>
                    </div>
                </div>
                <div className=" w-full">
                    <LineChart></LineChart>
                </div>
            </section>
        </div>
    )
}
export default WppoolIndex