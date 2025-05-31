import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Server, LockKeyhole, Activity, Network } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-4">
      <header className="max-w-6xl mx-auto py-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">EthSales Analytics</h1>
        <Button className="text-lg" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Request Demo</Button>
      </header>

      <main className="max-w-5xl mx-auto mt-16 text-center">
        <motion.h2
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Blockchain Sales Intelligence
        </motion.h2>
        <p className="text-xl text-gray-300 mb-12">
          Institutional-grade analytics for Ethereum token sales, NFT marketplaces, and DeFi platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <FeatureCard icon={<Server size={40} />} title="High-Load Processing" desc="Scalable architecture built with Rust and Kafka to handle millions of transactions." />
          <FeatureCard icon={<LockKeyhole size={40} />} title="Security First" desc="Enterprise-grade security. Fully encrypted pipelines and isolated data processing." />
          <FeatureCard icon={<Activity size={40} />} title="Real-Time Monitoring" desc="Live streaming data from Ethereum mainnet and testnets." />
          <FeatureCard icon={<BadgeCheck size={40} />} title="Accurate Insights" desc="On-chain data parsing with full ABI decoding for precise sales metrics." />
          <FeatureCard icon={<Network size={40} />} title="MCP Protocol" desc="Cross-chain Modular Communication Protocol (MCP) integration for advanced multi-chain data aggregation." />
        </div>

        <section className="mt-24">
          <h3 className="text-3xl font-semibold mb-4">Request Access</h3>
          {submitted ? (
            <p className="text-green-400 text-lg">Thank you! We will contact you shortly.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-xl text-black w-80"
              />
              <Button type="submit" className="px-8 py-3 text-lg">Submit</Button>
            </form>
          )}
        </section>
      </main>

      <footer className="max-w-5xl mx-auto mt-32 text-center text-gray-500 text-sm">
        &copy; 2025 EthSales Analytics. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <Card className="bg-gray-800 text-white rounded-2xl shadow-lg">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="mb-4 text-blue-400">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-center">{desc}</p>
      </CardContent>
    </Card>
  );
