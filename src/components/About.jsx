import photo from "../assets/photos/wppool.png"
const About =()=>{
    return(
        <div className="grid grid-cols-2 items-center justify-between w-4/5 mx-auto mt-36 bg-white rounded-[12px]">
            <section className="pl-14">
                <h1 className="text-[48px] text-[#191618]">About WPPOOL</h1>
                <h2 className="text-[30px] text-[#7D7F81]">Investing in wppool for over 50 years</h2>
                <p className="text-[16px] text-[#191618]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam
                    blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident
                    similique accusantium nemo autem.</p>
                <button className="mt-3 text-white px-[18px] py-[16px] rounded-[124px] drop-shadow bg-[#2042B6]">Contact
                    Wppool</button>
            </section>
            <section>
                <figure>
                    <img className="w-full" src={photo} alt=""/>
                </figure>
            </section>
        </div>
    )
}
export default About