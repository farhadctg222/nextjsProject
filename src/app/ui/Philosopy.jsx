import React from 'react';
import PhilosopyCard from './PhilosopyCard';
import { respone } from './connectDb';






const Philosopy = async () => {
    const data = await respone()
    console.log(data)
    return (
        <div>
        <div className='text-center mt-10 border-t-[20px] border-[#eedf0a]  border-l-[#024399] border-l-[5px]'>
            <h1 className='lg:text-4xl text-2xl m-5 md:text-2xl text-blue-800'>OUR PHILOSOPHY</h1>
            <p className='text-justify m-10'>In the philosophy section of the mosque website, we engage in profound discussions that delve into the essence of Islamic teachings and their philosophical implications. From contemplating the purpose of life to navigating the intricate balance between free will and divine decree, our conversations explore the profound questions that shape our understanding of faith, ethics, and existence. We reflect on the attributes of Allah, the concept of justice, and the pursuit of knowledge, seeking to deepen our spiritual insight and moral understanding. Through these discussions, we aim to inspire contemplation, foster dialogue, and nurture a deeper connection to the guiding principles of Islam in our everyday lives.</p>
        </div>
        <div className='mt-[-20px]   lg:flex  gap-4 md:flex md:flex-wrap lg:flex-wrap justify-center lg:flex-row md:flex-row flex-col">
      '>
            {
             data.map(data=> <PhilosopyCard key={data.id} philosopy={data}></PhilosopyCard>)
             }
        </div>

        
    </div>
    );
};

export default Philosopy;
