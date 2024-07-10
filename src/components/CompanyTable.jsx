const CompanyTable =()=>{
    return(
        <>
        <div className="bg-white w-11/12 mx-auto rounded-[20px] p-5 drop-shadow-sx mt-[60px]">
            <section className="grid grid-cols-2 items-center justify-between p-4">
                <div>
                    <h1 className="text-[48px] text-[#191618]">All Companies</h1>
                </div>
                <div
                    className="h-[58px] bg-[#F3F3F3] p-2 flex flex-row gap-2 items-center justify-center rounded-[8px] border border-[#DADADA]">
                    <span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L17.3 15.9C17.4833 16.0833 17.575 16.3167 17.575 16.6C17.575 16.8833 17.4833 17.1167 17.3 17.3C17.1167 17.4833 16.8833 17.575 16.6 17.575C16.3167 17.575 16.0833 17.4833 15.9 17.3L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                                fill="#191618" />
                        </svg>
                    </span>
                    <input
                        className="w-full bg-[#F3F3F3] border-none outline-none active:outline-none active:border-none focus:outline-none"
                        type="text" name="" placeholder="Search companies" id=""/>
                </div>
            </section>
            <section className="h-[438px] overflow-auto scrollbar px-4">
                <table className="border-collapse table-auto w-full">
                    <thead>
                        <tr>
                            <th className="text-[14px] text-black text-left p-4">Company</th>
                            <th className="text-[14px] text-black p-4 text-center">
                                <span>Ticket</span>
                                <svg className="inline" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path
                                            d="M9.4177 11.9193L7.25104 9.7526C6.98715 9.48872 6.92812 9.18663 7.07395 8.84635C7.21979 8.50608 7.4802 8.33594 7.8552 8.33594H12.1469C12.5219 8.33594 12.7823 8.50608 12.9281 8.84635C13.074 9.18663 13.0149 9.48872 12.751 9.7526L10.5844 11.9193C10.501 12.0026 10.4108 12.0651 10.3135 12.1068C10.2163 12.1484 10.1121 12.1693 10.001 12.1693C9.88993 12.1693 9.78576 12.1484 9.68854 12.1068C9.59132 12.0651 9.50104 12.0026 9.4177 11.9193Z"
                                            fill="black" />
                                    </g>
                                </svg>
                            </th>
                            <th className="text-[14px] text-black text-center p-4">Vertical</th>
                            <th className="text-[14px] text-black text-center p-4">Price</th>
                            <th className="text-[14px] text-black text-center p-4">Market Cap ($B)</th>
                            <th className="text-[14px] text-black text-center p-4">Revenue Growth</th>
                            <th className="text-[14px] text-black text-center p-4">Gross Margin</th>
                            <th className="text-[14px] text-black text-center p-4">EV/Revenue</th>
                            <th className="text-[14px] text-black text-center p-4">YTD Performance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Adyen</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Payments</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>

                        </tr>
                        <tr>
                            <td className="text-[14px] text-black text-center p-4">Alkami Technology</td>
                            <td className="text-[14px] text-black text-center p-4">AFRM</td>
                            <td className="text-[14px] text-black text-center p-4">Lending</td>
                            <td className="text-[14px] text-black text-center p-4">$17.15</td>
                            <td className="text-[14px] text-black text-center p-4">$50.5</td>
                            <td className="text-[14px] text-black text-center p-4">49.0%</td>
                            <td className="text-[14px] text-black text-center p-4">15.8%</td>
                            <td className="text-[14px] text-black text-center p-4">6.3</td>
                            <td className="text-[14px] text-black text-center p-4">24.3%</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
        <section className="mt-10">
            <div className="flex flex-wrap items-center gap-2 justify-center">
                <button
                    className="bg-[#2042B6] drop-shadow text-white rounded-[124px] text-[16px] px-[18px] py-[15px]">DownloadAll
                    Companies Data</button>
                <button className="bg-[#2042B6] drop-shadow text-white rounded-[124px] text-[16px] px-[18px] py-[15px]">View
                    Methodology</button>
            </div>
        </section>
        </>
    )
}

export default CompanyTable