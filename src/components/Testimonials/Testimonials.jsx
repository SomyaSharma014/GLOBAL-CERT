import React from 'react';
import TestimonialsDetails from '../TestimonialsDetails/TestimonialsDetails';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from '../../assets/image/icons/doubt.png';
import './Testimonials.css';
const Testimonials = () => {
  
    const testiMonials = [
        {
            name: 'Madhav Dhir',
            description: "Dreams are dime a dozen. Enrolling ourselves in this programme is what helped us to explore our ideas. At first, I was not willing to participate in this programme but by God's grace, I changed my mind and participated in it. There are many things which can only be learnt through experience and not by mere reading of books. In a way, the program has helped us all in having a clear view of our exalted lives.",
            address: 'Pinegrove School, June 2022 Batch',
            img: require('../../assets/image/carousel/men.jpg')
        },
        {
            name: 'Vidushi',
            description: "Words wouldn't be enough to express my gratitude to my school authorities for giving me a lifetime learning through this great experience. The decision to be a part of CIP during my summer vacations proved to be truly productive and made me aware of the possible lateral moves that might be necessary for acquiring my dream job.",
            address: 'Pinegrove School, June 2022 Batch',
            img: require('../../assets/image/carousel/men.jpg')
        },
        {
            name: 'Rachit Bansal',
            description: 'The Corporate Initiation Programme hosted by GlobalCert was a new and insightful experience which guided me to gain a better view on my future plans and possible career prospects. The CIP team made our learning an engaging activity which was sprinkled with fun and frolic in right amount.',
            address: 'Pinegrove School, June 2022 Batch',
            img: require('../../assets/image/carousel/men.jpg')
        },
        {
            name: 'Diya Chopra',
            description: "The CIP program wasn't just a 'party trip' to the 'fun city Singapore', it was a lifetime experience, an exposure like nothing else. Each day, we learnt about new professions of the 21st Century and were assigned various tasks according to our job profiles to get to know more about them. Career guidance sessions were conducted which gave me a clear vision of my professional life ahead.",
            address: 'Pinegrove School, June 2022 Batch',
            img: require('../../assets/image/carousel/men.jpg')
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials mt-14 bg-gray-100 py-8">
            <div className="mt-5">
                <h4 className="text-2xl font-bold text-center">TESTIMONIALS</h4>
                <h3 className="text-lg italic text-center">What Our Students Said about CIP?</h3>
                {/*<p className="text-center w-1/2 block my-0 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>*/}
                <div className="carousel">
                    <div className="">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div className="item">
                                        <div className="shadow-effect">
                                            <img className="img-circle" src={userPic} alt = "carousel-pic"/>

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div className="testimonial-name">
                                            <h5>Rajon Rony</h5>
                                            <small>ITALY</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestimonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;