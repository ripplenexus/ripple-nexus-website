import React from 'react';
import '../../styles/css/MacBookAir/Testimonials.css';
import profile from '../../assets/img/profile.png'

interface Testimonial {
    rating: number;
    service: string;
    reviewBody: string;
    reviewer: string;
    reviewerImage: string;
}

const testimonials: Testimonial[] = [
    {
        rating: 4,
        service: 'UI/UX Services',
        reviewBody: 'Amazing work!',
        reviewer: 'Hariom',
        reviewerImage: profile,
    },
    {
        rating: 1,
        service: 'Seo optimization',
        reviewBody: 'Needs improvement.',
        reviewer: 'Shivam',
        reviewerImage: profile,
    },
];

const Testimonials: React.FC = () => {
    return (
        <div className='testimonials-container'>
            <div className="testimonials">
                <h2 className='testimonial-header'>Testimonials</h2>
                <div className="testimonial-cards">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="rating">
                                {'★'.repeat(testimonial.rating)}
                                {'☆'.repeat(5 - testimonial.rating)}
                            </div>
                            <h3 className='testimonial-service'>{testimonial.service}</h3>
                            <p className='testimonial-body'>{testimonial.reviewBody}</p>
                            <div className="reviewer">
                                <img src={testimonial.reviewerImage} alt={testimonial.reviewer} />
                                <span className='reviewer-name'>{testimonial.reviewer}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
