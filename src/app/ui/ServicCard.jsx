import Image from 'next/image';
import React from 'react';

const ServicCard = ({ service }) => {
    const {id,name,time,icon,description} = service

    return (
        <div className="card w-[350px] m-auto h-[400px] bg-base-300  shadow-xl  mb-4">
        <figure className="px-10 pt-10">
          <Image src={icon} width={100} height={100} alt={name}></Image>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h3>{time}</h3>
          <p>{description}</p>
          
        </div>
      </div>
    );
};

export default ServicCard;