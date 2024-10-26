import React from 'react';

const features = [
  {
    name: 'Staking Rewards',
    description: 'Put your FROG tokens to work and reap generous rewards.',
    icon: '💰'
  },
  {
    name: 'Unique NFTs',
    description: 'Collect, trade, and evolve your own FatFrog NFTs.',
    icon: '🖼️'
  },
  {
    name: 'Play-to-Earn Gaming',
    description: 'Embark on epic quests in our immersive FatFrog Kingdom Quest game.',
    icon: '🎮'
  },
  {
    name: 'ERC-20 Staking',
    description: 'Stake your tokens and enjoy cross-chain benefits.',
    icon: '⛓️'
  },
  {
    name: 'Community Governance',
    description: 'Have a say in the project's future and developments.',
    icon: '🏛️'
  },
  {
    name: 'Future Utilities',
    description: 'Exclusive tournaments, cross-chain staking, and more exciting features!',
    icon: '🚀'
  }
];

const Features: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-frog-green font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need in the FatFrog Kingdom
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-frog-green text-white text-2xl">
                  {feature.icon}
                </div>
                <div className="ml-16">
                  <dt className="text-lg leading-6 font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
