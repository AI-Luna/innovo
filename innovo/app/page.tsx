'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ModernHero, ModernFeatures, TechStack, ClientWork, CTAOrange } from '../components/ui';

export default function Home() {
  const [activeTab, setActiveTab] = useState('settlement');

  const tabContent = {
    settlement: {
      title: "Settlement",
      description: "Innovo achieves instant settlement of funds at the time of purchase. REC transfers, with their exact serial numbers, are verified at the registry level to ensure speed and security across 11+ registries. Real-time data exchange is unlocked between connected registries, marketplaces, and participants.",
      image: "/Screenshot 2025-10-27 at 12.41.54.png"
    },
    procurement: {
      title: "Procurement",
      description: "Innovo is revolutionizing the energy procurement process by enabling users to transact environmental commodities from multiple energy suppliers and generators all in a single screen. Search and refine for energy types, key attributes, geography, and much more.",
      image: "/Screenshot 2025-10-27 at 12.54.58.png"
    },
    verification: {
      title: "Verification",
      description: "Innovo's digital infrastructure aggregates historically opaque and siloed processes and assets online, enhancing transparency, traceability, and auditability. By capturing real-world data on assets and projects, we increase visibility into what is created, where, and when.",
      image: "/Screenshot 2025-10-27 at 12.57.30.png"
    },
    reports: {
      title: "Reports",
      description: "Innovo offers a full suite of retirement and reporting tools to simplify the process down to a few clicks. Innovo's assets are enriched with up to 16 data points, strengthening reporting and storytelling capabilities.",
      image: "/Screenshot 2025-10-27 at 15.18.34.png"
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
        {/* All Features You Need Section */}
        <TechStack />

        {/* Capacity Solutions Section */}
        <motion.section 
          className="pt-8 pb-20"
          style={{ backgroundColor: '#E0E0E0' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div 
              className="bg-[#262626] rounded-2xl p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {/* Buttons */}
              <div className="flex gap-2 mb-8 justify-center flex-wrap">
                {['settlement', 'procurement', 'verification', 'reports'].map((tab, index) => {
                  const tabs = ['settlement', 'procurement', 'verification', 'reports'];
                  const labels = ['Settlement', 'Procurement', 'Verification', 'Reports'];
                  const isActive = activeTab === tab;
                  
                  return (
                    <motion.button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-2xl text-sm font-medium font-hacker flex items-center gap-2 ${
                        isActive ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      animate={!isActive ? {
                        textShadow: ['0 0 0px #3670A3', '0 0 8px #3670A3, 0 0 12px #3670A3', '0 0 0px #3670A3'],
                      } : {}}
                      transition={{
                        textShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }
                      }}
                      style={{ color: '#E0E0E0' }}
                    >
                      {isActive && (
                        <motion.span 
                          className="w-2 h-2 rounded-full bg-[#FF4500]"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      {!isActive && (
                        <motion.span 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: '#3670A3' }}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            backgroundColor: ['#3670A3', '#66a6ff', '#3670A3'],
                          }}
                          transition={{
                            opacity: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.5
                            },
                            backgroundColor: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.5
                            }
                          }}
                        />
                      )}
                      {labels[index]}
                    </motion.button>
                  );
                })}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Screenshot inside box */}
                <div className="mb-6 flex justify-center">
                  <Image 
                    src={currentContent.image} 
                    alt={`Innovo ${currentContent.title} Interface`} 
                    width={400} 
                    height={300}
                    className="object-contain rounded-xl"
                  />
                </div>

                {/* Description */}
                <p className="text-lg leading-relaxed text-center" style={{ color: '#E0E0E0' }}>
                  {currentContent.description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Client Work Section */}
        <ClientWork />

        {/* Orange CTA Section */}
        <CTAOrange />
      </main>

      {/* Modern Footer */}
      <footer className="bg-black py-12 relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/5324177-hd_1280_720_30fps.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"
          style={{ zIndex: 1 }}
        />

        <div className="max-w-7xl mx-auto px-6 relative" style={{ zIndex: 2 }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <Image 
                src="/innovo-logo.png" 
                alt="Innovo Markets" 
                width={180} 
                height={60}
                className="object-contain"
              />
            </div>
            
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-hacker">PRIVACY</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-hacker">TERMS</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors font-hacker">CONTACT</a>
              <a href="https://x.com/InnovoMarkets" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-hacker">X</a>
              <a href="https://www.linkedin.com/company/innovo-markets/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-hacker">LINKEDIN</a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm font-hacker">© 2025 INNOVO MARKETS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
