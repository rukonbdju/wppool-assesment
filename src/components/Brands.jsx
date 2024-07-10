import img1 from "../assets/brands/brex.png"
import img2 from "../assets/brands/checkout.png"
import img3 from "../assets/brands/chime.png"
import img4 from "../assets/brands/deel.png"
import img5 from "../assets/brands/gusto.png"
import img6 from "../assets/brands/klarna.png"
import img7 from "../assets/brands/n26.png"
import img8 from "../assets/brands/plaid.png"
import img9 from "../assets/brands/revolut.png"
import img10 from "../assets/brands/stripe.png"
const Brands =()=>{
    return(
        <div className="mt-24 w-4/5 mx-auto">
            <header className="mb-12">
                <h2 className="text-[48px]">Potential Future Listings</h2>
                <p className="text-[16px]">Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                    velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. </p>
            </header>
            <section className="grid grid-cols-5 gap-5 ">
                <figure className="h-[120px] w-[220px] bg-white flex items-center justify-center rounded-[6px]">
                    <img src={img1} alt="alibaba"/>
                </figure>
                <figure className="h-[120px] w-[220px] bg-white flex items-center justify-center rounded-[6px]">
                    <img src={img2} alt="alibaba"/>
                </figure>
                <figure className="h-[120px] w-[220px] bg-white flex items-center justify-center rounded-[6px]">
                    <img src={img3} alt="alibaba"/>
                </figure>
                <figure className="h-[120px] w-[220px] bg-white flex items-center justify-center rounded-[6px]">
                    <img src={img4} alt="alibaba"/>
                </figure>
                <figure className="h-[120px] w-[220px] bg-white flex items-center justify-center rounded-[6px]">
                    <img src={img5} alt="alibaba"/>
                </figure>
                <figure className="h-[120px] w-[220px] bg-white flex items-center justify-center rounded-[6px]">
                    <img src={img6} alt="alibaba"/>
                </figure>
                <figure className="h-[120px] w-[220px] bg-white flex items-center justify-center rounded-[6px]">
                    <img src={img7} alt="alibaba"/>
                </figure>
                <figure className="h-[120px] w-[220px] bg-white flex items-center justify-center rounded-[6px]">
                    <img src={img8} alt="alibaba"/>
                </figure>
                <figure className="h-[120px] w-[220px] bg-white flex items-center justify-center rounded-[6px]">
                    <img src={img9} alt="alibaba"/>
                </figure>
                <figure className="h-[120px] w-[220px] bg-white flex items-center justify-center rounded-[6px]">
                    <img src={img10} alt="alibaba"/>
                </figure>

            </section>
        </div>
    )
}
export default Brands