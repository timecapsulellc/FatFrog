import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  );
};

export default Home;
