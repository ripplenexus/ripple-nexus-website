import React, { useEffect, useState } from 'react';
import '../../styles/css/MacBookAir/Testimonials.css';
import { BottomObserver } from '../../utils/Animation';
import profile from '../../assets/img/profile.png'
import testimonials from '../../utils/TestimonialsData';
import ImgWithFallback from '../../utils/ImgFallback';

const Testimonials: React.FC = () => {
    const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

    const handleReadMoreClick = (index: number) => {
        setExpanded(prevState => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };


    useEffect(() => {
        const cards = document.querySelectorAll('.testimonial-cards') as NodeListOf<HTMLElement>;
        cards.forEach((element, index) => {
            BottomObserver.observe(element);
        });
    }, []);

    return (
        <div className='testimonials-container'>
            <div className="testimonials">
                <h2 className='testimonial-header'>Testimonials</h2>
                <div className="testimonial-cards">
                    {testimonials.map((testimonial, index) => (
                        <div className='testimonial-card-container' style={{zIndex:`${599-index}`}}>
                        <div key={index} className={`testimonial-card ${expanded[index] ? 'expanded' : ''}`} style={{zIndex:`${600-index}`}}>
                            <div className="rating">
                                {'★'.repeat(testimonial.rating)}
                                {'☆'.repeat(5 - testimonial.rating)}
                            </div>
                            <h3 className='testimonial-service'>{testimonial.service}</h3>
                            <p className={`testimonial-body ${expanded[index] ? 'expanded' : ''}`}>

                                {expanded[index] ? (
                                    <>
                                        {testimonial.reviewBody}
                                        <span className='read-more-text' onClick={() => handleReadMoreClick(index)}> Read less</span>
                                    </>
                                ) : (
                                    <>
                                        {testimonial.reviewBody.length > 50 ? (
                                            <>
                                                {testimonial.reviewBody.substring(0, 100)}...
                                                <span className='read-more-text' onClick={() => handleReadMoreClick(index)}> Read more</span>
                                            </>
                                        ) : (
                                            testimonial.reviewBody
                                        )}
                                    </>)
                                }


                            </p>
                            <div className="reviewer"  onClick={() => window.open(testimonial.linkedInProfile, '_blank')} >
                                {/* <img src={testimonial.reviewerImage} alt={testimonial.reviewer} /> */}
                                {/* <a className='profile-link' href={testimonial.linkedInProfile} target='_blank' rel='noreferrer'> */}
                                <ImgWithFallback src={testimonial.reviewerImage} fallbackSrc={profile} alt={testimonial.reviewer}  />
                                {/* </a> */}
                                <span className='reviewer-name tooltip' data-title={`LinkedIn`}>{testimonial.reviewer}</span>
                                
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
