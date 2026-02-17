import React, { useEffect, useState } from 'react';

// A vertical column of numbers 0-9 for the slot machine effect
function Digit({ value }: { value: string }) {
  // If value is not a number (e.g. space), just render it static
  if (!/[0-9]/.test(value)) {
    return (
      <span className="w-[0.3em] text-center text-gray-500 flex items-center justify-center h-[1.1em] pb-1 font-display">
        {value}
      </span>
    );
  }

  const num = parseInt(value, 10);

  return (
    <div className="relative w-[0.6em] h-[1.1em] overflow-hidden inline-block align-bottom mx-[1px]">
      {/* 
        The strip contains numbers 0-9. 
        We translate Y based on the digit value. 
        Each number is 10% of the strip height (since there are 10 numbers).
      */}
      <div
        className="flex flex-col absolute top-0 left-0 w-full transition-transform duration-[1500ms] ease-smooth"
        style={{ transform: `translateY(-${num * 10}%)` }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span
            key={n}
            className="flex items-center justify-center h-[1.1em] text-primary"
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function OrderCounter() {
  const [countStr, setCountStr] = useState<string>("12889");

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch('https://api.ente.io/files/count');
        const data = await res.json();
        
        if (data && data.count) {
          const fullStr = data.count.toString();
          // Rule: Ignore first 2 and last 2 digits
          if (fullStr.length > 4) {
            const trimmed = fullStr.slice(2, -2);
            setCountStr(trimmed);
          }
        }
      } catch (error) {
        console.error("Failed to fetch order count", error);
      }
    };

    // Initial fetch
    fetchCount();

    // Poll every 5 seconds
    const interval = setInterval(fetchCount, 5000);
    return () => clearInterval(interval);
  }, []);

  // Format with spaces (12889 -> "12 889")
  const formatted = countStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <div className="mt-8 inline-block">
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl hover:border-primary/20 transition-colors cursor-default group">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mb-2 text-center group-hover:text-primary/80 transition-colors">
                Commandes livrées
            </p>
            <div className="flex justify-center text-4xl md:text-5xl font-display font-bold text-white tracking-wider leading-none h-[1.1em] overflow-hidden">
                {formatted.split('').map((char, i) => (
                    <Digit key={`digit-${i}`} value={char} />
                ))}
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>En direct</span>
            </div>
        </div>
    </div>
  );
}