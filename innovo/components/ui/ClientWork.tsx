import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ClientWork: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  const clients = [
    {
      id: 'purchaser',
      label: "REC purchaser",
      description: "Price Sourcing: Request and compare REC pricing from verified suppliers.\n\nSeamless Retirement: Retire certificates from every registry in one place.\n\nCompliance Reporting: Access audit-ready data for effortless compliance.\n\nDynamic Forecasting: Stay ahead of Renewable Portfolio Standard deadlines.\n\nRisk Mitigation: Ensure authenticity with verified and traceable RECs.\n\nAggregate Inventory: View all registry accounts and holdings on a single screen."
    },
    {
      id: 'supplier',
      label: "REC supplier",
      description: "Maximized Revenue: Market RECs with high-quality, verified data to increase returns.\n\nDistribution Channel: Reach a nationwide network of qualified REC buyers.\n\nList RECs: Originate and publish certificates on a single, streamlined interface.\n\nDeal Settlement: Close transactions faster with instant settlement capabilities.\n\nLiquidity Network: Provide or access liquidity for real-time REC demand.\n\nConnect Counterparties: Manage all buyer and broker relationships in one place."
    },
    {
      id: 'netzero',
      label: "Net zero company",
      description: "Simplified Compliance: Meet regulatory and sustainability goals effortlessly.\n\nTransparent Purchasing: Procure verified green assets aligned with company targets.\n\nCost Optimization: Lower expenses through efficient REC procurement and management.\n\nEnvironmental Impact: Decarbonize operations and supply chains with ease.\n\nAudit Trail: Strengthen reporting with verified records and documentation.\n\nCompetitive Advantage: Showcase credible progress toward net-zero commitments."
    },
    {
      id: 'marketplace',
      label: "REC marketplace",
      description: "Increased Volume: Unlock participation from smaller buyers and sellers with no minimums.\n\nSeamless Delivery: Enable real-time settlement for faster, smoother transactions.\n\nRegulatory Compliance: Maintain confidence with built-in compliance and reporting tools.\n\nEnhanced Security: Protect all trades with advanced encryption and authentication.\n\nTransparent Transactions: Build trust through verified procurement and retirement records.\n\nMarket Growth: Expand participation with tools that attract and retain users."
    }
  ];

  const currentClient = clients.find(c => c.id === selectedClient) || null;

  return (
    <motion.section 
      className="pt-0 pb-12 relative overflow-hidden"
      style={{ backgroundColor: '#1A1A1A', minHeight: '100vh' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-0">
        {/* Top label section - Larger and navigation bar color */}
        <div className="flex items-center mb-24 justify-between">
          <span className="text-3xl font-hacker flex-1" style={{ color: '#262626' }}>Where</span>
          <span className="text-3xl font-hacker flex-1 text-center" style={{ color: '#262626' }}>Energy Markets</span>
          <span className="text-3xl font-hacker flex-1 text-right" style={{ color: '#262626' }}>Run</span>
        </div>

        {/* Main title */}
        <h2 className="text-6xl font-bold text-center mb-32 mt-32 font-hacker" style={{ color: '#E0E0E0' }}>
          Innovo Users
        </h2>

        {/* Client buttons */}
        <div className="grid grid-cols-4 gap-4 mb-48">
          {clients.map((client, index) => (
            <div key={client.id}>
              {/* Label Button */}
              <motion.button
                onClick={() => setSelectedClient(selectedClient === client.id ? null : client.id)}
                className="w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={selectedClient === null ? {
                  opacity: [0.4, 1, 0.4],
                } : {}}
                transition={{
                  opacity: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: selectedClient === client.id ? '#FF4500' : '#3670A3' }}
                    animate={selectedClient === null ? {
                      opacity: [0.3, 1, 0.3],
                      backgroundColor: ['#3670A3', '#66a6ff', '#3670A3'],
                    } : {}}
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
                  ></motion.div>
                  <motion.span 
                    className={`text-lg font-hacker px-3 py-1 rounded-full transition-colors ${
                      selectedClient === client.id ? 'bg-[#FF4500] text-white' : 'bg-[#262626]'
                    }`}
                    animate={selectedClient === null ? {
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
                    style={{ color: selectedClient === client.id ? 'white' : '#E0E0E0' }}
                  >
                    {client.label}
                  </motion.span>
                </div>
              </motion.button>

              {/* Box description - Only appears when clicked */}
              {selectedClient === client.id && (
                <motion.div 
                  className="bg-[#262626] rounded-lg p-6 border-l-4 mt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ borderLeftColor: '#FF4500' }}
                >
                <p className="text-sm leading-relaxed font-hacker whitespace-pre-line" style={{ color: '#E0E0E0' }}>
                  {client.description.split('\n').map((line, index) => {
                    const parts = line.split(':');
                    if (parts.length > 1) {
                      return (
                        <span key={index}>
                          <span className="font-bold" style={{ color: '#3670A3' }}>{parts[0]}:</span>
                          <br />
                          {parts.slice(1).join(':')}
                          {index < client.description.split('\n').length - 1 && <br />}
                        </span>
                      );
                    }
                    return <span key={index}>{line}{index < client.description.split('\n').length - 1 && <br />}</span>;
                  })}
                </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom features text */}
        <div className="mt-96 text-center">
          <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
            <p className="text-sm font-hacker" style={{ color: '#E0E0E0' }}>
              SECURE NETWORK
            </p>
            <div className="h-4 w-px" style={{ backgroundColor: '#E0E0E0' }}></div>
            <p className="text-sm font-hacker" style={{ color: '#E0E0E0' }}>
              CENTRALIZED DATA
            </p>
            <div className="h-4 w-px" style={{ backgroundColor: '#E0E0E0' }}></div>
            <p className="text-sm font-hacker" style={{ color: '#E0E0E0' }}>
              TRANSPARENT TRANSACTIONS
            </p>
          </div>
          
          {/* Blue line */}
          <div className="h-1 mx-auto" style={{ width: '200px', backgroundColor: '#3670A3' }}></div>
        </div>
      </div>
    </motion.section>
  );
};

export default ClientWork;
