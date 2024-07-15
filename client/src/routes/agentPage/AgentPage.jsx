import React from 'react';
import './AgentPage.scss';

const Agents = () => {
  // Dummy data for agents
  const agents = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (123) 456-7890',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1 (234) 567-8901',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      phone: '+1 (345) 678-9012',
    },
  ];

  return (
    // <div className='agents-container'>
    //   <h1 className='agents-title'>Our Agents</h1>
    //   <div className='agents-list'>

    //   </div>
    // </div>
    <div className='agentPage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Our Agents</h1>
          <p>
            Urban Nest agents are dedicated real estate professionals who
            provide exceptional, personalized service to help you navigate the
            complex world of real estate. With in-depth local market knowledge
            and a passion for client success, our agents offer expert advice,
            detailed market analyses, and tailored property recommendations.
            Whether you're buying, selling, or renting, our agents are committed
            to ensuring a seamless, informed, and successful real estate
            experience. Trust Urban Nest agents to be your reliable partners in
            achieving your real estate goals.
          </p>
          <div className='boxes'>
            {agents.map((agent) => (
              <div key={agent.id} className='agent-card'>
                <h2 className='agent-name'>{agent.name}</h2>
                <p className='agent-info'>
                  Email: <a href={`mailto:${agent.email}`}>{agent.email}</a>
                </p>
                <p className='agent-info'>
                  Phone: <a href={`tel:${agent.phone}`}>{agent.phone}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='/agent.jpg' alt='' />
      </div>
    </div>
  );
};

export default Agents;
