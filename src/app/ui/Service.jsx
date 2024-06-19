import React from 'react';
import { service } from '../../../public/Service';
import ServicCard from './ServicCard';



const data = service;





const Service = () => {
    return (
        <div className=" w-full bg-[#95B9C7] lg:mt-[-20px] md:mt-[-20px]  lg:flex gap-4 md:flex md:flex-wrap lg:flex-nowrap  lg:flex-row md:flex-row flex-col">
            {
              data.map(service=> <ServicCard key={service.id} service={service}></ServicCard>)
            }
            
        </div>
    );
};

export default Service;