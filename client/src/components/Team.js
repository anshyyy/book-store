import React from 'react';
import Rachit from '../assets/Rachit.jpeg'
import {teamMembers} from '../constant'
const Team = () => {
    return (
        <div className="bg-bgColor py-10">
          <div className="max-w-7xl mx-auto px-5">
            <h1 className="text-5xl font-serif font-bold text-center mb-10 text-gray-800">Our Team</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div className="bg-white shadow-lg rounded-lg p-8 mb-6" key={index}>
                  <img src={member?.imageUrl == "" ? Rachit : member?.imageUrl} alt={index + 1}className="w-full mb-4 rounded-lg aspect-square filter grayscale" />
                  <h2 className="text-2xl font-serif font-bold mb-2 text-gray-800">{member.name}</h2>
                  <p className="text-gray-600 mb-2">Registration No: {member.regNo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default Team;