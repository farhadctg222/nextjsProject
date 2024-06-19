import Image from 'next/image';
import React from 'react';

const PhilosopyCard = ({philosopy}) => {
    const {name,ima,description}= philosopy

    return (
        <div className="card w-[350px] h-[400px] m-auto rounded-none  mb-5  bg-[#38758d] shadow-xl ">
        <figure className="px-10 pt-10">
          <Image src={ima} width={100} height={100} alt={name} className=" lg:w-30 md:w-30 w-[100px]"></Image> 
        </figure>
        <div className="card-body items-center text-center">
          <h1 className="card-title lg:text-2xl md:text-2xl sm:text-2xl text-amber-400">{name}</h1>
          <p className="text-justify text-white">{description}</p>
          <div className="card-actions">
            
          </div>
        </div>
      </div>
    );
};

export default PhilosopyCard;