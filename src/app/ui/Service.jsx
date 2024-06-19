import React from 'react';

import ServicCard from './ServicCard';
import { service } from './connectDb';









const Service = async() => {

    const serviceData = await service()
    return (
        <div className=" w-full bg-[#95B9C7] lg:mt-[-20px] md:mt-[-20px]  lg:flex gap-4 md:flex md:flex-wrap lg:flex-nowrap  lg:flex-row md:flex-row flex-col">
            {
              serviceData.map(service=> <ServicCard key={service.id} service={service}></ServicCard>)
            }
            
        </div>
    );
};

export default Service;