import React, { Suspense } from 'react';
import { team } from './connectDb';
import TeamCard from './TeamCard';

const Team = async () => {
    const teams = await team()
    return (
        <div className="bg-[#ddc4378a] text-center">
        <h1 className="lg:text-4xl md:text-4xl text-2xl">Our Team Member</h1>
        <p className="text-justify p-5">Teamwork at a mosque encompasses the coordinated efforts of individuals within the community to facilitate the smooth operation of various activities and services. It involves a range of tasks, including organizing events, maintaining the mosque premises, conducting religious education programs, providing support to community members in need, and managing administrative responsibilities. Every member contributes their skills and time to uphold the values of unity, service, and spiritual growth within the community.</p>
        <div className="lg:flex md:flex justify-center ">
            <Suspense fallback={<h1>loading</h1>}>
            {
                teams.map(team=><TeamCard
                key={team.id}
                team={team}>

                </TeamCard>)
            }
            </Suspense>
        </div>
        
    </div>
    );
};

export default Team;