import person from "../assets/photos/people1.png"
import person2 from "../assets/photos/people 2.png"
const Stories =()=>{
    return(
        <section className="mt-24 w-4/5 mx-auto">
            <header>
                <h1 className="text-[48px] text-[#191618]">Stories & Ideas</h1>
                <p className="text-[20px] text-[#191618]">The latest news and updates</p>
            </header>
            <div className="grid grid-cols-3 gap-5 gap-y-24 items-center justify-between w-full mt-36">

                <div className="">
                    <div className="relative h-[220px] w-[380px] bg-white rounded-[12px]">
                        <figure className="absolute left-[10px] -top-[60px]">
                            <img className="rounded-[4px]" height="120px" width="120px"
                                src={person2} alt=""/>
                        </figure>
                        <div className="absolute left-[10px] bottom-[10px]">
                            <h3 className="text-[#2042B6] text-[14px]">Hasan Mahmud</h3>
                            <p className="text-[#191618] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.</p>
                            <button className="px-[12px] py-[10px] mt-3 rounded-[124px] text-white bg-[#2042B6]">Read
                                more</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="relative h-[220px] w-[380px] bg-white rounded-[12px]">
                        <figure className="absolute left-[10px] -top-[60px]">
                            <img className="rounded-[4px]" height="120px" width="120px"
                                src={person} alt=""/>
                        </figure>
                        <div className="absolute left-[10px] bottom-[10px]">
                            <h3 className="text-[#2042B6] text-[14px]">Hasan Mahmud</h3>
                            <p className="text-[#191618] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.</p>
                            <button className="px-[12px] py-[10px] mt-3 rounded-[124px] text-white bg-[#2042B6]">Read
                                more</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="relative h-[220px] w-[380px] bg-white rounded-[12px]">
                        <figure className="absolute left-[10px] -top-[60px]">
                            <img className="rounded-[4px]" height="120px" width="120px"
                                src={person} alt=""/>
                        </figure>
                        <div className="absolute left-[10px] bottom-[10px]">
                            <h3 className="text-[#2042B6] text-[14px]">Hasan Mahmud</h3>
                            <p className="text-[#191618] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.</p>
                            <button className="px-[12px] py-[10px] mt-3 rounded-[124px] text-white bg-[#2042B6]">Read
                                more</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="relative h-[220px] w-[380px] bg-white rounded-[12px]">
                        <figure className="absolute left-[10px] -top-[60px]">
                            <img className="rounded-[4px]" height="120px" width="120px"
                                src={person2} alt=""/>
                        </figure>
                        <div className="absolute left-[10px] bottom-[10px]">
                            <h3 className="text-[#2042B6] text-[14px]">Hasan Mahmud</h3>
                            <p className="text-[#191618] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.</p>
                            <button className="px-[12px] py-[10px] mt-3 rounded-[124px] text-white bg-[#2042B6]">Read
                                more</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="relative h-[220px] w-[380px] bg-white rounded-[12px]">
                        <figure className="absolute left-[10px] -top-[60px]">
                            <img className="rounded-[4px]" height="120px" width="120px"
                                src={person} alt=""/>
                        </figure>
                        <div className="absolute left-[10px] bottom-[10px]">
                            <h3 className="text-[#2042B6] text-[14px]">Hasan Mahmud</h3>
                            <p className="text-[#191618] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.</p>
                            <button className="px-[12px] py-[10px] mt-3 rounded-[124px] text-white bg-[#2042B6]">Read
                                more</button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="relative h-[220px] w-[380px] bg-white rounded-[12px]">
                        <figure className="absolute left-[10px] -top-[60px]">
                            <img className="rounded-[4px]" height="120px" width="120px"
                                src={person2} alt=""/>
                        </figure>
                        <div className="absolute left-[10px] bottom-[10px]">
                            <h3 className="text-[#2042B6] text-[14px]">Hasan Mahmud</h3>
                            <p className="text-[#191618] text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.</p>
                            <button className="px-[12px] py-[10px] mt-3 rounded-[124px] text-white bg-[#2042B6]">Read
                                more</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Stories