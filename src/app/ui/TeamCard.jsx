import Image from 'next/image';
import React, { Suspense } from 'react';

const TeamCard = ({team}) => {
    const {image,name,role,email,phone} = team
    return (<Suspense fallback={<p>Loading......</p>}>  
        <div className="card w-[350px] m-auto h-[400px] bg-base-300  shadow-xl  mb-4">
        <figure className="px-10 pt-10">
      <Image src={image} width={4000} height={400} alt={name}></Image>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h3>{role}</h3>
          <p>{email}</p>
          <div className="card-actions">
         <a href={`tel:${phone}`}><button className="btn btn-primary">Call Now</button>
</a>         
</div>
        </div>
      </div>
      </Suspense>
    );
};

export default TeamCard;