const Slider = () => {
    return (
        <section className="bg-[url(../src/assets/photos/vector-bg.png)] bg-right bg-no-repeat w-4/5 mx-auto mt-24">
            <header>
                <h2 className="text-[48px] text-[#191618]">State of USA</h2>
                <button
                    className="bg-[#2042B6] text-[36px] text-white rounded-[124px] px-4 flex items-center justify-between gap-8">
                    <span>2024</span>

                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 7L0 0H14L7 7Z" fill="white" />
                    </svg>

                </button>
                <p className="text-[#191618] text-[16px] mt-2">Click through the slides or download the report to view
                    natively on your device.</p>
            </header>
            <div className="h-[326px] my-5 relative">
                <div className="absolute top-0 flex flex-row  gap-4 ">
                        <img className="h-[326px] w-[580px" src="../src//assets//photos/poster-1.png" alt="" />
                        <img className="h-[326px] w-[580px" src="../src//assets//photos/poster-2.png" alt="" />
                        <img className="h-[326px] w-[580px" src="../src//assets//photos/poster-3.png" alt="" />
                </div>
            </div>

            <section className="flex flex-rows items-center justify-between">
                <div className="inline-flex gap-2">
                    <button id="prevButton" className="p-4 bg-white rounded-[124px] drop-shadow">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.92437 7.99881L8.0013 0.921875L8.9449 1.86548L3.47824 7.33214L16.668 7.33214L16.668 8.66548L3.47824 8.66547L8.9449 14.1321L8.0013 15.0757L0.92437 7.99881Z"
                                fill="#2042B6" />
                        </svg>
                    </button>
                    <button id="nextButton" className="p-4 bg-white rounded-[124px] drop-shadow">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.0756 7.99881L8.9987 0.921875L8.0551 1.86548L13.5218 7.33214L0.332032 7.33214L0.332032 8.66548L13.5218 8.66547L8.0551 14.1321L8.9987 15.0757L16.0756 7.99881Z"
                                fill="#2042B6" />
                        </svg>
                    </button>
                    <span className="ml-4">Page</span>
                    <button className="p-3 bg-white rounded-[124px] drop-shadow inline-flex items-center gap-10">
                        <span>1 and 2</span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.00192 6.53841L0.130188 0.666672H11.8737L6.00192 6.53841Z" fill="#2042B6" />
                        </svg>
                    </button>
                    <span>of 30</span>

                </div>
                <div>
                    <button className="bg-[#2042B6] drop-shadow text-white rounded-[124px] text-[16px] px-4 py-3">Download
                        All Companies Data</button>
                </div>
            </section>
        </section>
    )
}

export default Slider