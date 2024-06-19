import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({book}) => {
    const {_id,ima,author,title,price} = book
    return (
        <div className="card w-96  m-auto rounded-none  mb-10 bg-[#076d5c] shadow-xl">
        <figure className="px-10 pt-10">
          <Image priority 
            src={ima}
           alt="book"
            width={200}
             height={200}
              ></Image> 
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title lg:text-2xl sm-text-2xl mt-0 pt-0 text-[#f3d83e]">Book : {title}</h2>
          <p className="  text-md lg:text-2xl text-[#e1ee70]">{author}</p>
          <p className="text-lg text-md text-[#292929]">Price : ${price}</p>
          <div className="card-actions">
           <Link href={`${_id}`}> <button className="btn btn-secondary">Book Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default BookCard;