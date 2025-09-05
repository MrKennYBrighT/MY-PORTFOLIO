// src/pages/Home.jsx
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero'; // Adjust path if needed

function Home() {
  return (
    <Layout>
      <main className="w-full bg-white dark:bg-slate-900 transition-colors duration-300">
        <Hero />
        {/* About, Projects, Contact will go here */}
      </main>
    </Layout>
  );
}

export default Home;
