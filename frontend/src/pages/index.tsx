import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>FatFrog Kingdom Quest</title>
        <meta name="description" content="A Web3 Gaming Ecosystem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to FatFrog Kingdom Quest
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">🐸 FROG Token</h2>
            <p className="text-gray-600">
              Explore our native token and its utilities in the ecosystem.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">🎮 Gaming Platform</h2>
            <p className="text-gray-600">
              Immerse yourself in our interactive gaming experience.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">💰 Staking & Rewards</h2>
            <p className="text-gray-600">
              Stake your tokens and earn rewards in the kingdom.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
