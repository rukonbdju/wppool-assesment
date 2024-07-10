import { useState } from "react";
import { useEffect } from "react";
import Menu from "./Menu";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen,setIsOpen]=useState(false)
    console.log(scrolled)

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    if (scrolled) {
        return (
            <nav 
                className="fixed w-4/5 left-1/2 -translate-x-1/2 bg-[#F3F3F3] h-[58px] z-50 top-5 flex items-center justify-center drop-shadow rounded-[8px]">
                <div className=" w-full p-4 grid grid-cols-2 justify-between items-center">
                    {isOpen &&<Menu setIsOpen={setIsOpen}></Menu>}
                
                    <section>
                        <figure>
                            <img src="../src/assets/logos/logo-black.png" alt="wppool-logo" />
                        </figure>
                    </section>
                    <section>
                        <div className="flex flex-row justify-end gap-[10px] h-[42px] items-center">
                            <div>
                                <svg className="p-[14px] border border-[#AFCD80] rounded-full" width="42" height="42"
                                    viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path
                                            d="M10.5 12.8334C10.0139 12.8334 9.60069 12.6633 9.26042 12.323C8.92014 11.9827 8.75 11.5695 8.75 11.0834C8.75 11.0154 8.75486 10.9449 8.76458 10.872C8.77431 10.799 8.78889 10.7334 8.80833 10.6751L4.69583 8.28342C4.53056 8.42925 4.34583 8.54348 4.14167 8.62612C3.9375 8.70876 3.72361 8.75008 3.5 8.75008C3.01389 8.75008 2.60069 8.57994 2.26042 8.23967C1.92014 7.89939 1.75 7.48619 1.75 7.00008C1.75 6.51397 1.92014 6.10078 2.26042 5.7605C2.60069 5.42022 3.01389 5.25008 3.5 5.25008C3.72361 5.25008 3.9375 5.2914 4.14167 5.37404C4.34583 5.45668 4.53056 5.57092 4.69583 5.71675L8.80833 3.32508C8.78889 3.26675 8.77431 3.20112 8.76458 3.12821C8.75486 3.05529 8.75 2.9848 8.75 2.91675C8.75 2.43064 8.92014 2.01744 9.26042 1.67716C9.60069 1.33689 10.0139 1.16675 10.5 1.16675C10.9861 1.16675 11.3993 1.33689 11.7396 1.67716C12.0799 2.01744 12.25 2.43064 12.25 2.91675C12.25 3.40286 12.0799 3.81605 11.7396 4.15633C11.3993 4.49661 10.9861 4.66675 10.5 4.66675C10.2764 4.66675 10.0625 4.62543 9.85833 4.54279C9.65417 4.46015 9.46944 4.34592 9.30417 4.20008L5.19167 6.59175C5.21111 6.65008 5.22569 6.71571 5.23542 6.78862C5.24514 6.86154 5.25 6.93203 5.25 7.00008C5.25 7.06814 5.24514 7.13862 5.23542 7.21154C5.22569 7.28446 5.21111 7.35008 5.19167 7.40841L9.30417 9.80008C9.46944 9.65425 9.65417 9.54001 9.85833 9.45737C10.0625 9.37473 10.2764 9.33342 10.5 9.33342C10.9861 9.33342 11.3993 9.50355 11.7396 9.84383C12.0799 10.1841 12.25 10.5973 12.25 11.0834C12.25 11.5695 12.0799 11.9827 11.7396 12.323C11.3993 12.6633 10.9861 12.8334 10.5 12.8334Z"
                                            fill="black" />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <button
                                    className=" px-[17px] py-[12px] border border-[#2042B6] rounded-[124px] text-[12px] font-normal">Download
                                    the 2024 Report</button>
                            </div>
                            <div onClick={()=>setIsOpen(true)}>

                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="19" height="1" fill="black" stroke="black" />
                                    <rect x="0.5" y="7.5" width="19" height="1" fill="black" stroke="black" />
                                    <rect x="0.5" y="14.5" width="19" height="1" fill="black" stroke="black" />
                                </svg>
                            </div>
                        </div>

                    </section>
                </div>
            </nav>
        )
    }
    else {
        console.log(scrolled)
        return (
            <>
                <nav id="topbar" className="fixed w-full z-50 top-0 ">
                    <div className=" w-full p-4 grid grid-cols-2 justify-between items-center">
                    {isOpen &&<Menu setIsOpen={setIsOpen}></Menu>}
                        <section>
                            <figure>
                                <img src="../src/assets/logos/logo-white.png" alt="wppool-logo" />
                            </figure>
                        </section>
                        <section>
                            <div className="flex flex-row justify-end gap-[10px] h-[42px] items-center">
                                <div>
                                    <svg className="p-[14px] border border-white rounded-full" width="42" height="42"
                                        viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path
                                                d="M10.5 12.8334C10.0139 12.8334 9.60069 12.6633 9.26042 12.323C8.92014 11.9827 8.75 11.5695 8.75 11.0834C8.75 11.0154 8.75486 10.9449 8.76458 10.872C8.77431 10.799 8.78889 10.7334 8.80833 10.6751L4.69583 8.28342C4.53056 8.42925 4.34583 8.54348 4.14167 8.62612C3.9375 8.70876 3.72361 8.75008 3.5 8.75008C3.01389 8.75008 2.60069 8.57994 2.26042 8.23967C1.92014 7.89939 1.75 7.48619 1.75 7.00008C1.75 6.51397 1.92014 6.10078 2.26042 5.7605C2.60069 5.42022 3.01389 5.25008 3.5 5.25008C3.72361 5.25008 3.9375 5.2914 4.14167 5.37404C4.34583 5.45668 4.53056 5.57092 4.69583 5.71675L8.80833 3.32508C8.78889 3.26675 8.77431 3.20112 8.76458 3.12821C8.75486 3.05529 8.75 2.9848 8.75 2.91675C8.75 2.43064 8.92014 2.01744 9.26042 1.67716C9.60069 1.33689 10.0139 1.16675 10.5 1.16675C10.9861 1.16675 11.3993 1.33689 11.7396 1.67716C12.0799 2.01744 12.25 2.43064 12.25 2.91675C12.25 3.40286 12.0799 3.81605 11.7396 4.15633C11.3993 4.49661 10.9861 4.66675 10.5 4.66675C10.2764 4.66675 10.0625 4.62543 9.85833 4.54279C9.65417 4.46015 9.46944 4.34592 9.30417 4.20008L5.19167 6.59175C5.21111 6.65008 5.22569 6.71571 5.23542 6.78862C5.24514 6.86154 5.25 6.93203 5.25 7.00008C5.25 7.06814 5.24514 7.13862 5.23542 7.21154C5.22569 7.28446 5.21111 7.35008 5.19167 7.40841L9.30417 9.80008C9.46944 9.65425 9.65417 9.54001 9.85833 9.45737C10.0625 9.37473 10.2764 9.33342 10.5 9.33342C10.9861 9.33342 11.3993 9.50355 11.7396 9.84383C12.0799 10.1841 12.25 10.5973 12.25 11.0834C12.25 11.5695 12.0799 11.9827 11.7396 12.323C11.3993 12.6633 10.9861 12.8334 10.5 12.8334Z"
                                                fill="white" />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <button
                                        className="text-white px-[17px] py-[12px] border border-white rounded-[124px] text-[12px] font-normal">Download
                                        the 2024 Report</button>
                                </div>
                                <div  onClick={()=>setIsOpen(true)}>
                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="19" height="1" fill="white" stroke="white" />
                                        <rect x="0.5" y="7.5" width="19" height="1" fill="white" stroke="white" />
                                        <rect x="0.5" y="14.5" width="19" height="1" fill="white" stroke="white" />
                                    </svg>
                                </div>
                            </div>

                        </section>
                    </div>
                </nav>
            </>
        )
    }
}
export default Navbar