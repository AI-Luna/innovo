import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ClientWork: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);

  const clients = [
    {
      id: 'purchaser',
      label: "REC purchaser",
      description: "Request pricing from Innovo's supplier network. Retire RECs from every registry in one place. Use easy-to-use data for compliance audits. Stay ahead on RPS required deadlines with dynamic forecasting. Ensure authenticity and reduce regulatory risks with verified RECs. View all registry subaccounts on a single screen."
    },
    {
      id: 'supplier',
      label: "REC supplier",
      description: "Maximized Revenue: Market your RECs better with higher fidelity data. Distribution Channel: Gain access to a nationwide market of buyers. List RECs: Originate and list RECs on a single screen."
    },
    {
      id: 'netzero',
      label: "Net zero company",
      description: "Simplified Compliance: Effortlessly meet regulatory requirements and sustainability goals. Transparent Purchasing: Procure verifiable green assets in alignment with purchasing goals. Cost Optimization: Reduce expenses with efficient REC procurement and management. Environmental Impact: Decarbonize supply chain with multiple profile management. Audit Trail: Enhance reporting with immutable records and related documentation. Competitive Advantage: Demonstrate clear commitment to sustainability efforts."
    },
    {
      id: 'marketplace',
      label: "REC marketplace",
      description: "Platforms and registries leveraging Innovo's infrastructure to facilitate REC trading with automated settlement and comprehensive data enrichment."
    }
  ];

  const currentClient = clients.find(c => c.id === selectedClient) || null;

  return (
    <motion.section 
      className="pt-0 pb-24 relative overflow-hidden"
      style={{ backgroundColor: '#1A1A1A' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 pt-8">
        {/* Top label section - Larger and navigation bar color */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-3xl font-hacker" style={{ color: '#262626' }}>THE FUTURE</span>
          <span className="text-3xl font-hacker" style={{ color: '#262626' }}>OF</span>
          <span className="text-3xl font-hacker" style={{ color: '#262626' }}>THE GRID</span>
        </div>

        {/* Main title */}
        <h2 className="text-6xl font-hacker text-center mb-16" style={{ color: '#E0E0E0' }}>
          Innovo Client Work
        </h2>

        {/* Client buttons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clients.map((client) => (
            <motion.button
              key={client.id}
              onClick={() => setSelectedClient(client.id)}
              className="text-left"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Label */}
              <div className="mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedClient === client.id ? '#FF4500' : '#666' }}></div>
                <span className={`text-sm font-hacker px-3 py-1 rounded-full transition-colors ${
                  selectedClient === client.id ? 'bg-[#FF4500] text-white' : 'bg-[#262626]'
                }`} style={{ color: selectedClient === client.id ? 'white' : '#E0E0E0' }}>
                  {client.label}
                </span>
              </div>

              {/* Box description */}
              <div className={`bg-[#262626] rounded-lg p-6 border-l-4 transition-all ${
                selectedClient === client.id ? 'shadow-lg' : ''
              }`} style={{ 
                borderLeftColor: selectedClient === client.id ? '#FF4500' : '#666' 
              }}>
                <p className="text-sm leading-relaxed font-hacker whitespace-pre-line" style={{ color: '#E0E0E0' }}>
                  {client.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Bottom features text */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-4 mb-4 flex-wrap">
            <p className="text-sm font-hacker" style={{ color: '#E0E0E0' }}>
              Self-powered | Maintenance-free
            </p>
            <div className="h-4 w-px" style={{ backgroundColor: '#E0E0E0' }}></div>
            <p className="text-sm font-hacker" style={{ color: '#E0E0E0' }}>
              Built-in cellular and satellite communications
            </p>
            <div className="h-4 w-px" style={{ backgroundColor: '#E0E0E0' }}></div>
            <p className="text-sm font-hacker" style={{ color: '#E0E0E0' }}>
              On-board programmable intelligence
            </p>
          </div>
          
          {/* Orange line */}
          <div className="h-1 mx-auto" style={{ width: '200px', backgroundColor: '#FF4500' }}></div>
        </div>
      </div>
    </motion.section>
  );
};

export default ClientWork;
