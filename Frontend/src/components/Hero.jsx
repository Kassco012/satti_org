import React from 'react';

const Hero = () => {
    return (
        <div className='min-h-screen relative overflow-hidden'>
            <div
                className='absolute inset-0 bg-cover bg-center'
                style={{
                    backgroundImage: `url('./src/assets/satty.pdf')`,
                }}
            ></div>
        </div>
    );
};

export default Hero;