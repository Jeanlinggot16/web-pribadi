import React, { useState } from 'react';

export function Dashboard() {
  // State untuk Kalkulator CAGR Interaktif
  const [beginningValue, setBeginningValue] = useState<number>(10000);
  const [endingValue, setEndingValue] = useState<number>(15000);
  const [years, setYears] = useState<number>(5);
  const [cagrResult, setCagrResult] = useState<string | null>(null);
  const [isComputing, setIsComputing] = useState<boolean>(false);

  const calculateCAGR = () => {
    if (beginningValue <= 0 || endingValue <= 0 || years <= 0) {
      alert("Mohon masukkan nilai lebih besar dari 0");
      return;
    }
    setIsComputing(true);
    
    setTimeout(() => {
      // Rumus: CAGR = ((Ending / Beginning) ^ (1 / n)) - 1
      const result = (Math.pow(endingValue / beginningValue, 1 / years) - 1) * 100;
      setCagrResult(result.toFixed(2) + "%");
      setIsComputing(false);
    }, 800);
  };

  return (
    <div className="p-4 md:p-8 flex flex-col gap-6 max-w-[1440px] mx-auto w-full text-[#d4e4fa] bg-[#051424] font-sans">
      {/* Welcome Banner */}
      <section className="relative overflow-hidden rounded-xl p-6 bg-[#1c2b3c] border border-[#3d494c]/20">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#4cd7f6]/10 blur-[100px] rounded-full"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#4cd7f6] to-[#bec6e0] bg-clip-text text-transparent">
            Welcome back, Jean Revo
          </h1>
          <p className="text-lg text-[#bcc9cd] mt-1">
            Finance Student at UNSRAT | Capital Market Enthusiast
          </p>
          <div className="flex gap-2 mt-4">
            <span className="px-3 py-1 bg-[#4cd7f6]/10 border border-[#4cd7f6]/20 text-[#4cd7f6] rounded-full text-xs font-semibold flex items-center gap-1">
              <span className="w-2 h-2 bg-[#4cd7f6] rounded-full animate-pulse"></span>
              Market Analysis Live
            </span>
            <span className="px-3 py-1 bg-[#273647]/50 border border-[#3d494c]/20 text-[#bcc9cd] rounded-full text-xs">
              Portfolio: $142,500.00
            </span>
          </div>
        </div>
      </section>

      {/* Metric Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#122131]/75 backdrop-blur-md border border-white/5 rounded-xl p-6 flex flex-col gap-4 hover:border-[#4cd7f6]/30 transition-all group">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-[#4cd7f6]/10 rounded-lg group-hover:bg-[#4cd7f6]/20 transition-colors">
              <span className="material-symbols-outlined text-[#4cd7f6]">monitoring</span>
            </div>
            <span className="px-2 py-0.5 bg-[#4cd7f6]/10 text-[#4cd7f6] text-[11px] font-medium rounded-full">Active Member</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">KSPM ESTOC</h3>
            <p className="text-sm text-[#bcc9cd] mt-1">Capital Market Study Club participation and analytics.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#122131]/75 backdrop-blur-md border border-white/5 rounded-xl p-6 flex flex-col gap-4 hover:border-[#4cd7f6]/30 transition-all group">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-[#4cd7f6]/10 rounded-lg">
              <span className="material-symbols-outlined text-[#4cd7f6]">query_stats</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Research Hub</h3>
            <p className="text-sm text-[#bcc9cd] mt-1">Focus: Stock Valuation & CAPM model integration.</p>
          </div>
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] text-[#bcc9cd]">Analysis Completion</span>
              <span className="text-[11px] text-[#4cd7f6]">85%</span>
            </div>
            <div className="w-full bg-[#273647] rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#4cd7f6] h-full rounded-full w-[85%]"></div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#122131]/75 backdrop-blur-md border border-white/5 rounded-xl p-6 flex flex-col gap-4 hover:border-[#4cd7f6]/30 transition-all group">
          <div className="flex justify-between items-start">
            <div className="p-2 bg-[#4cd7f6]/10 rounded-lg">
              <span className="material-symbols-outlined text-[#4cd7f6]">groups</span>
            </div>
            <span className="px-2 py-0.5 bg-[#273647] text-[#bcc9cd] text-[11px] font-medium rounded-full">Benang Merah</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Community Projects</h3>
            <p className="text-sm text-[#bcc9cd] mt-1">Actively leading financial literacy initiatives in the community.</p>
          </div>
          <div className="flex -space-x-2 mt-2">
            <div className="w-6 h-6 rounded-full border-2 border-[#051424] bg-[#273647]"></div>
            <div className="w-6 h-6 rounded-full border-2 border-[#051424] bg-[#4cd7f6]/50"></div>
            <div className="w-6 h-6 rounded-full border-2 border-[#051424] bg-[#3f465c]"></div>
            <div className="w-6 h-6 rounded-full border-2 border-[#051424] flex items-center justify-center bg-[#273647] text-[8px] text-white font-bold">+12</div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Left: Recent Research */}
        <div className="lg:col-span-6 bg-[#122131]/75 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#3d494c]/20 flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Recent Financial Research & Publications</h2>
            <button className="text-[#4cd7f6] text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#3d494c]/10 bg-[#0d1c2d]/50">
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-[#bcc9cd]">Research Topic</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-[#bcc9cd]">Date</th>
                  <th className="p-4 text-xs font-semibold uppercase tracking-wider text-[#bcc9cd] text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3d494c]/10">
                <tr className="hover:bg-[#273647]/20 transition-colors cursor-pointer group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#06b6d4] group-hover:scale-110 transition-transform">article</span>
                      <div>
                        <div className="text-sm font-medium text-white">Sektor Perbankan IDX: NPL & CAR Analysis</div>
                        <div className="text-[10px] text-[#bcc9cd] uppercase">Financial Sector</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-[#bcc9cd]">Oct 12, 2025</td>
                  <td className="p-4 text-right">
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded text-[10px] font-bold">PUBLISHED</span>
                  </td>
                </tr>
                <tr className="hover:bg-[#273647]/20 transition-colors cursor-pointer group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#06b6d4] group-hover:scale-110 transition-transform">insights</span>
                      <div>
                        <div className="text-sm font-medium text-white">Model CAPM Saham Bluechip</div>
                        <div className="text-[10px] text-[#bcc9cd] uppercase">Valuation Model</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-[#bcc9cd]">Sep 28, 2025</td>
                  <td className="p-4 text-right">
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded text-[10px] font-bold">PUBLISHED</span>
                  </td>
                </tr>
                <tr className="hover:bg-[#273647]/20 transition-colors cursor-pointer group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#06b6d4] group-hover:scale-110 transition-transform">pie_chart</span>
                      <div>
                        <div className="text-sm font-medium text-white">Analisis Valuasi DCF</div>
                        <div className="text-[10px] text-[#bcc9cd] uppercase">Intrinsic Value</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-[#bcc9cd]">Sep 15, 2025</td>
                  <td className="p-4 text-right">
                    <span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 rounded text-[10px] font-bold">REVIEW</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Interactive Tools Preview */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-[#122131]/75 backdrop-blur-md border border-white/5 rounded-xl p-6 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#4cd7f6]">calculate</span>
              <h2 className="text-xl font-bold text-white">Stock CAGR Calculator</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#bcc9cd] mb-1">Beginning Value ($)</label>
                <input 
                  className="w-full bg-[#010f1f] border border-[#3d494c]/30 rounded-lg px-3 py-2 text-white focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6]/30 outline-none transition-all text-sm" 
                  type="number" 
                  value={beginningValue}
                  onChange={(e) => setBeginningValue(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#bcc9cd] mb-1">Ending Value ($)</label>
                <input 
                  className="w-full bg-[#010f1f] border border-[#3d494c]/30 rounded-lg px-3 py-2 text-white focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6]/30 outline-none transition-all text-sm" 
                  type="number" 
                  value={endingValue}
                  onChange={(e) => setEndingValue(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#bcc9cd] mb-1">Number of Years (n)</label>
                <input 
                  className="w-full bg-[#010f1f] border border-[#3d494c]/30 rounded-lg px-3 py-2 text-white focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6]/30 outline-none transition-all text-sm" 
                  type="number" 
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="mt-4 p-3 bg-[#122131] rounded-lg border border-[#3d494c]/10">
              <div className="text-[10px] font-bold text-[#4cd7f6] uppercase mb-1">Formula & Result</div>
              <div className="text-xs italic text-white overflow-x-auto whitespace-nowrap mb-2">
                CAGR = ((Ending Value / Beginning Value)^(1/n)) - 1
              </div>
              {cagrResult && (
                <div className="mt-2 text-center py-1 bg-emerald-500/20 text-emerald-400 font-bold rounded border border-emerald-500/30">
                  Hasil: {cagrResult}
                </div>
              )}
            </div>

            <button 
              onClick={calculateCAGR}
              disabled={isComputing}
              className={`w-full font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 text-sm ${
                isComputing ? 'bg-amber-500 text-white' : 'bg-[#06b6d4] text-[#003640] hover:brightness-110 active:scale-[0.98]'
              }`}
            >
              <span className={`material-symbols-outlined text-[18px] ${isComputing ? 'animate-spin' : ''}`}>
                {isComputing ? 'sync' : 'analytics'}
              </span>
              {isComputing ? 'Computing...' : 'Calculate Growth'}
            </button>
          </div>

          <div className="bg-[#122131]/75 backdrop-blur-md border border-white/5 rounded-xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-xs font-semibold text-[#bcc9cd] uppercase mb-1">Current Market Yield</h4>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold text-[#4cd7f6]">8.42%</span>
                <span className="material-symbols-outlined text-[#4cd7f6] mb-1">trending_up</span>
              </div>
              <p className="text-xs text-[#bcc9cd]/70 mt-2">Yield curve benchmarked against IDX30 assets.</p>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 text-[#4cd7f6]">
              <span className="material-symbols-outlined text-[120px]">equalizer</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}