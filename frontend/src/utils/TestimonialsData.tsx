interface Testimonial {
    rating: number;
    date: Date;
    service: string;
    reviewBody: string;
    reviewer: string;
    reviewerImage: string;
    linkedInProfile:string;
}

const testimonials: Testimonial[] = [
  
    {
        rating: 5,
        date: new Date("October 15, 2024"),
        service: 'Resume Writing',
        reviewBody: 'I recently had the pleasure of working with Ashutosh Shukla for my resume needs, and I couldn’t be more satisfied with the results. He crafted a highly professional and visually appealing resume that truly stands out. From the initial consultation to the final delivery, Ashutosh demonstrated exceptional expertise and attention to detail. He took the time to understand my career goals and tailored the resume to highlight my skills and achievements effectively.',
        reviewer: 'Aditya Pandey',
        reviewerImage: 'https://media.licdn.com/dms/image/v2/D5603AQHAy0qN5bygnQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728118884641?e=1735171200&v=beta&t=4iDqUglFCxBpj8_tuLoff3MaclacG5wXtfqa_snd2_M',
        linkedInProfile:"https://www.linkedin.com/in/aditya-pandey-40bab528b/",
    },
    {
        rating: 5,
        date: new Date("August 24, 2024"),
        service: 'Resume Writing',
        reviewBody: 'Enjoyed working with Ashutosh on my resume and cover letter project. Extremely responsive, knowledgeable, and very pleased with outcome.',
        reviewer: 'Vanessa Allen',
        reviewerImage: 'https://media.licdn.com/dms/image/v2/D5635AQENEkuKREDr1A/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1725739588963?e=1730052000&v=beta&t=z8u3qiXSfDU-Gu84fHZ9bH7ICRfNFlHyulXWLT5A6CE',
        linkedInProfile:"https://www.linkedin.com/in/vanessa-allenn/",
    },
    {
        rating: 5,
        date: new Date("July 24, 2024"),
        service: 'Resume Writing',
        reviewBody: 'The project went really well! I enjoyed collaborating with you and felt that we made solid progress. The teamwork and communication were great, and I’m happy with the results. Looking forward to any future opportunities we may have to work together again!',
        reviewer: 'Srikanth Nakka',
        reviewerImage: 'https://media.licdn.com/dms/image/v2/D5635AQFtxfzjrSDUqA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1729017415335?e=1730052000&v=beta&t=maNWxSn8HaqKF4WS2aW3sp9FOt99rOKZSpNnFhvvDlM',
        linkedInProfile:"https://www.linkedin.com/in/srikanth-nakka-a18aa8195/",
    },
   
];


export default testimonials;