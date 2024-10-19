import React, {useEffect} from 'react';
import  '../../styles/css/ServicePage/ServiceCover.css';
import { TopObserver, BottomObserver } from '../../utils/Animation';

const ServiceCover: React.FC =()=>{

    useEffect(()=>{
        const titleLine = document.querySelectorAll('.text-section-header') as NodeListOf<HTMLElement>;
        titleLine.forEach((element, index) => {
            TopObserver.observe(element);
        });
        
        const paraLine = document.querySelectorAll('.text-section p') as NodeListOf<HTMLElement>;
        paraLine.forEach((element, index) => {
            BottomObserver.observe(element);
        });
    },[])
   

    return(
        <><div className='service-cover-container'>
            <div className="service-cover" >
                <div className="text-section">
                    <div className='text-section-heading'>
                        <h1 className='text-section-header'>Innovative and Customized<br/>
                        Solutions for Your Business</h1>
                    </div>
                    <p>
                        From design to development, we provide export services that help you grow and succeed.
                    </p>
                </div>
            </div>
            </div>
        </>
    )
}

export default ServiceCover;