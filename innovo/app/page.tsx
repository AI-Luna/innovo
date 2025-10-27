'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ModernHero, ModernFeatures, TechStack, ScrollReveal } from '../components/ui';

export default function Home() {
  const [activeTab, setActiveTab] = useState('aar');

  const tabContent = {
    dlr: {
      title: "Heimdall DLR",
      description: "Dynamic Line Rating technology for real-time transmission capacity optimization. Automatically adjusts thermal ratings based on live weather conditions, wind speed, and ambient temperature data.",
      features: [
        "Real-time thermal ratings",
        "Weather-based adjustments",
        "Increased transmission capacity",
        "Automated compliance reporting",
        "Integration with SCADA systems",
        "Historical data analytics"
      ]
    },
    ratings: {
      title: "Facility Ratings",
      description: "Comprehensive facility rating management for power infrastructure. Calculate and manage thermal, sag, and tension ratings across your entire transmission network.",
      features: [
        "Multi-parameter rating calculations",
        "Asset lifecycle management",
        "Compliance documentation",
        "Risk assessment tools",
        "Maintenance scheduling",
        "Regulatory reporting"
      ]
    },
    aar: {
      title: "Heimdall AAR",
      description: "Deployable in minutes, Heimdall Ambient Adjusted Ratings uses live weather data and asset info to calculate accurate thermal ratings. It's the fastest path to FERC 881 compliance and an easy first step toward grid optimization.",
      features: [
        "Forecasts up to 10 days (240 hours)",
        "Fully virtual deployment",
        "Rules & events engine",
        "Contingency analysis",
        "SCADA/EMS integration",
        "API and user interface access"
      ]
    }
  };

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  return (
    <motion.div 
      className="min-h-screen bg-gray-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <main>
        {/* Modern Hero Section */}
        <ModernHero />

        {/* Modern Features Section */}
        <ModernFeatures />
      </main>

      <main>
        {/* Capacity Solutions Section */}
        <motion.section 
          className="pt-8 pb-20 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Product Details Card */}
              <div className="bg-gray-800 rounded-3xl p-8 shadow-2xl">
                {/* Tabs */}
                <div className="flex gap-2 mb-8">
                  <button 
                    onClick={() => setActiveTab('dlr')}
                    className={`px-4 py-2 rounded-full text-white text-sm font-medium transition-colors ${
                      activeTab === 'dlr' ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    Heimdall DLR
                  </button>
                  <button 
                    onClick={() => setActiveTab('ratings')}
                    className={`px-4 py-2 rounded-full text-white text-sm font-medium transition-colors ${
                      activeTab === 'ratings' ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    Facility Ratings
                  </button>
                  <button 
                    onClick={() => setActiveTab('aar')}
                    className={`px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 transition-colors ${
                      activeTab === 'aar' ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${activeTab === 'aar' ? 'bg-[#FF4500]' : 'bg-gray-500'}`}></span>
                    Heimdall AAR
                  </button>
                </div>

                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {/* Left column - Features */}
                  <div>
                    <p className="text-white mb-6">
                      {currentContent.description}
                    </p>
                    
                    <h3 className="text-white font-bold mb-4">Features:</h3>
                    <ul className="text-white/80 space-y-2 text-sm">
                      {currentContent.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Right column - Graph placeholder */}
                  <div className="bg-gray-900 rounded-xl p-6">
                    <h4 className="text-white font-bold mb-4">{currentContent.title}</h4>
                    <div className="text-xs text-gray-400 mb-3">Forecast confidence levels</div>
                    <div className="flex gap-3 mb-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span>80%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        <span>90%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>95%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>99%</span>
                      </div>
                    </div>
                    {/* Graph visualization placeholder */}
                    <div className="bg-gray-800 rounded p-4 h-48 flex items-center justify-center">
                      <div className="text-gray-500 text-sm">Graph visualization</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Solutions Overview */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Our Capacity Solutions</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  Unlock more capacity. Operate with confidence. Heimdall Power's capacity tools help utilities safely adjust transmission limits, improve operational planning, and stay compliant with industry standards. All powered by real-time and forecast-based insights from a unified data stream.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <TechStack />

        {/* CTA Section */}
        <section className="py-20" style={{ background: 'linear-gradient(to right, #FF4500, #3670A3)' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal direction="up">
              <h2 className="text-4xl font-bold text-white mb-8">
                Ready to Transform Your Energy Trading?
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Join leading energy companies using Innovo Markets for automated, efficient trading.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Get Started Today
              </motion.button>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <Image 
                src="/innovo-logo.png" 
                alt="Innovo Markets" 
                width={120} 
                height={40}
                className="object-contain"
              />
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2024 Innovo Markets. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
