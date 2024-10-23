import React, {useState} from 'react';
import profile from '../assets/img/profile.png'

interface ImgDetails{
    src: string;
    alt?: string;
    fallbackSrc?: string;
    className?: string;
    dataTitle?:string;
}
const ImgWithFallback: React.FC<ImgDetails> = ({src, alt, fallbackSrc=profile, className, dataTitle})=>{
    const [imgSrc, setImgSrc] = useState(src);
    console.log(dataTitle);
    console.log(className);
    const handleError =()=>{
        if(fallbackSrc){
            setImgSrc(fallbackSrc);
            // console.log("fall back occured");
        }
    }
    return <img src={imgSrc} alt={alt} className={className} onError={handleError} data-title={dataTitle}/>
}

export default ImgWithFallback;
