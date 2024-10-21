import React, {useState} from 'react';

interface ImgDetails{
    src: string;
    alt?: string;
    fallbackSrc?: string;
    className?: string;
}
const ImgWithFallback: React.FC<ImgDetails> = ({src, alt, fallbackSrc, className})=>{
    const [imgSrc, setImgSrc] = useState(src);

    const handleError =()=>{
        if(fallbackSrc){
            setImgSrc(fallbackSrc);
            // console.log("fall back occured");
        }
    }
    return <img src={imgSrc} alt={alt} className={className} onError={handleError}/>
}

export default ImgWithFallback;
