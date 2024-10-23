import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col font-[Poppins] font-[400]  text-white">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb018cc2e0b33e89b7a6d519ac9adc7b801818a4f21e232572d25d34bb366f8c?placeholderIfAbsent=true&apiKey=8087bcd0ce0c468e9ae5395d126ea30e" className="object-contain aspect-[1.09] w-[73px]" alt="Ripple Nexus Logo" />
      <h2 className="mt-3 text-xl max-md:mr-2.5">
        Driving Innovation through <br /> Technology and Expertise.
      </h2>
      <p className="mt-3.5 text-xs font-[300]">
        contact@ripplenexus.tech | +917599756826
      </p>
    </div>
  );
};

export default Logo;