import React, { useState } from "react";

export function Dashboard() {
// State untuk Kalkulator CAGR Interaktif
const [beginningValue, setBeginningValue] = useState(10000);
const [endingValue, setEndingValue] = useState(15000);
const [years, setYears] = useState(5);
const [cagrResult, setCagrResult] = useState<string | null>(null);
const [isComputing, setIsComputing] = useState(false);
const [btnTheme, setBtnTheme] = useState("bg-[#06b6d4] text-[#00424f]");

const calculateCAGR = () => {
if (beginningValue <= 0 || endingValue <= 0 || years <= 0) {
alert("Harap masukkan nilai yang valid (lebih besar dari 0).");
return;
}

setIsComputing(true);

// Simulasi loading animasi perhitungan
setTimeout(() => {
  const cagr = (Math.pow(endingValue / beginningValue, 1 / years) - 1) * 100;
  setCagrResult(`${cagr.toFixed(2)}% CAGR`);
  setIsComputing(false);
  
  // Mengubah tema tombol menjadi sukses (hijau)
  setBtnTheme("bg-emerald-500 text-white");
  
  // Kembalikan ke tombol semula setelah 4 detik
  setTimeout(() => {
    setCagrResult(null);
    setBtnTheme("bg-[#06b6d4] text-[#00424f]");
  }, 4000);
}, 800);


};

return (

{/* Top Header Search Bar */}



search




Dashboard
Research
Projects
Tools


notifications
account_balance_wallet






  {/* Main Content Area */}
  <div className="p-6 lg:p-8 flex flex-col gap-6 max-w-[1440px] mx-auto w-full">
    
    {/* Welcome Banner */}
    <section className="relative overflow-hidden rounded-xl p-8 bg-[#1c2b3c] border border-[#3d494c]/20">
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#4cd7f6]/10 blur-[100px] rounded-full"></div>
      <div className="relative z-10">
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#4cd7f6] to-[#bec6e0] bg-clip-text text-transparent">
          Welcome back, Jean Revo
        </h1>
        <p className="text-lg text-[#bcc9cd] mt-2">
          Finance Student at UNSRAT | Capital Market Enthusiast
        </p>
        <div className="flex gap-2 mt-4">
          <span className="px-4 py-1 bg-[#4cd7f6]/10 border border-[#4cd7f6]/20 text-[#4cd7f6] rounded-full text-xs flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 bg-[#4cd7f6] rounded-full animate-pulse"></span>
            Market Analysis Live
          </span>
          <span className="px-4 py-1 bg-[#273647]/50 border border-[#3d494c]/20 text-[#bcc9cd] rounded-full text-xs font-medium">
            Portfolio: $142,500.00
          </span>
        </div>
      </div>
    </section>

    {/* Metric Cards (3-column grid) */}
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-[#122131]/70 backdrop-blur-md border border-white/5 rounded-xl p-6 flex flex-col gap-4 transition-all hover:border-[#4cd7f6]/30 group">
        <div className="flex justify-between items-start">
          <div className="p-2.5 bg-[#4cd7f6]/10 rounded-lg group-hover:bg-[#4cd7f6]/20 transition-colors">
            <span className="material-symbols-outlined text-[#4cd7f6]">monitoring</span>
          </div>
          <span className="px-2.5 py-1 bg-[#4cd7f6]/10 text-[#4cd7f6] text-[11px] font-semibold rounded-full">Active Member</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#d4e4fa]">KSPM ESTOC</h3>
          <p className="text-sm text-[#bcc9cd] mt-1.5">Capital Market Study Club participation and analytics.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#122131]/70 backdrop-blur-md border border-white/5 rounded-xl p-6 flex flex-col gap-4 transition-all hover:border-[#4cd7f6]/30 group">
        <div className="flex justify-between items-start">
          <div className="p-2.5 bg-[#4cd7f6]/10 rounded-lg">
            <span className="material-symbols-outlined text-[#4cd7f6]">query_stats</span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#d4e4fa]">Research Hub</h3>
          <p className="text-sm text-[#bcc9cd] mt-1.5">Focus: Stock Valuation &amp; CAPM model integration.</p>
        </div>
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-[#bcc9cd]">Analysis Completion</span>
            <span className="text-xs text-[#4cd7f6] font-bold">85%</span>
          </div>
          <div className="w-full bg-[#273647] rounded-full h-1.5 overflow-hidden">
            <div className="bg-[#4cd7f6] h-full rounded-full w-[85%]"></div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#122131]/70 backdrop-blur-md border border-white/5 rounded-xl p-6 flex flex-col gap-4 transition-all hover:border-[#4cd7f6]/30 group">
        <div className="flex justify-between items-start">
          <div className="p-2.5 bg-[#4cd7f6]/10 rounded-lg">
            <span className="material-symbols-outlined text-[#4cd7f6]">groups</span>
          </div>
          <span className="px-2.5 py-1 bg-[#273647] text-[#bcc9cd] text-[11px] font-semibold rounded-full">Benang Merah</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#d4e4fa]">Community Projects</h3>
          <p className="text-sm text-[#bcc9cd] mt-1.5">Actively leading financial literacy initiatives in the community.</p>
        </div>
        <div className="flex -space-x-2 mt-1">
          <div className="w-6 h-6 rounded-full border-2 border-[#051424] bg-[#273647]"></div>
          <div className="w-6 h-6 rounded-full border-2 border-[#051424] bg-[#4cd7f6]/50"></div>
          <div className="w-6 h-6 rounded-full border-2 border-[#051424] bg-[#3f465c]"></div>
          <div className="w-6 h-6 rounded-full border-2 border-[#051424] flex items-center justify-center bg-[#273647] text-[8px] font-bold">+12</div>
        </div>
      </div>
    </section>

    {/* Main Grid (2 Columns: 60% Left, 40% Right) */}
    <section className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      
      {/* Left: Recent Research (60%) */}
      <div className="lg:col-span-6 bg-[#122131]/70 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden flex flex-col">
        <div className="p-6 border-b border-[#3d494c]/20 flex justify-between items-center">
          <h2 className="text-lg font-bold text-[#d4e4fa]">Recent Financial Research &amp; Publications</h2>
          <button className="text-[#4cd7f6] text-sm font-semibold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-[#3d494c]/10 bg-[#0d1c2d]/50">
                <th className="px-6 py-3 text-xs font-bold text-[#bcc9cd] uppercase tracking-wider">Research Topic</th>
                <th className="px-6 py-3 text-xs font-bold text-[#bcc9cd] uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-xs font-bold text-[#bcc9cd] uppercase tracking-wider text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3d494c]/10">
              <tr className="hover:bg-[#273647]/20 transition-colors cursor-pointer group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#06b6d4] group-hover:scale-110 transition-transform">article</span>
                    <div>
                      <div className="text-sm font-medium text-[#d4e4fa]">Sektor Perbankan IDX: NPL &amp; CAR Analysis</div>
                      <div className="text-[10px] text-[#bcc9cd] uppercase tracking-wider">Financial Sector</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#bcc9cd]">Oct 12, 2023</td>
                <td className="px-6 py-4 text-right">
                  <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-lg text-[10px] font-bold">PUBLISHED</span>
                </td>
              </tr>
              <tr className="hover:bg-[#273647]/20 transition-colors cursor-pointer group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#06b6d4] group-hover:scale-110 transition-transform">insights</span>
                    <div>
                      <div className="text-sm font-medium text-[#d4e4fa]">Model CAPM Saham Bluechip</div>
                      <div className="text-[10px] text-[#bcc9cd] uppercase tracking-wider">Valuation Model</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#bcc9cd]">Sep 28, 2023</td>
                <td className="px-6 py-4 text-right">
                  <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-lg text-[10px] font-bold">PUBLISHED</span>
                </td>
              </tr>
              <tr className="hover:bg-[#273647]/20 transition-colors cursor-pointer group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#06b6d4] group-hover:scale-110 transition-transform">pie_chart</span>
                    <div>
                      <div className="text-sm font-medium text-[#d4e4fa]">Analisis Valuasi DCF</div>
                      <div className="text-[10px] text-[#bcc9cd] uppercase tracking-wider">Intrinsic Value</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#bcc9cd]">Sep 15, 2023</td>
                <td className="px-6 py-4 text-right">
                  <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-400 rounded-lg text-[10px] font-bold">REVIEW</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right: Interactive Tools Preview (40%) */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="bg-[#122131]/70 backdrop-blur-md border border-white/5 rounded-xl p-6 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-[#4cd7f6] text-2xl">calculate</span>
            <h2 className="text-lg font-bold text-[#d4e4fa]">Stock CAGR Calculator</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#bcc9cd] mb-1">Beginning Value ($)</label>
              <input 
                className="w-full bg-[#010f1f] border border-[#3d494c]/30 rounded-lg px-4 py-2.5 text-[#d4e4fa] focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6]/30 transition-all text-sm outline-none" 
                type="number" 
                value={beginningValue}
                onChange={(e) => setBeginningValue(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#bcc9cd] mb-1">Ending Value ($)</label>
              <input 
                className="w-full bg-[#010f1f] border border-[#3d494c]/30 rounded-lg px-4 py-2.5 text-[#d4e4fa] focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6]/30 transition-all text-sm outline-none" 
                type="number" 
                value={endingValue}
                onChange={(e) => setEndingValue(Number(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#bcc9cd] mb-1">Number of Years (n)</label>
              <input 
                className="w-full bg-[#010f1f] border border-[#3d494c]/30 rounded-lg px-4 py-2.5 text-[#d4e4fa] focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6]/30 transition-all text-sm outline-none" 
                type="number" 
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="mt-6 p-4 bg-[#122131] rounded-lg border border-[#3d494c]/10">
            <div className="text-[10px] font-bold text-[#4cd7f6] uppercase mb-1">Formula</div>
            <div className="text-xs text-[#d4e4fa] italic overflow-x-auto whitespace-nowrap">
              CAGR = ((Ending Value / Beginning Value)^(1/n)) - 1
            </div>
          </div>
          <button 
            onClick={calculateCAGR}
            className={`mt-6 w-full ${btnTheme} font-bold py-3 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2`}
          >
            {isComputing ? (
              <>
                <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                Computing...
              </>
            ) : (
              cagrResult || "Calculate Growth"
            )}
          </button>
        </div>

        {/* Current Yield Display */}
        <div className="bg-[#122131]/70 backdrop-blur-md border border-white/5 rounded-xl p-6 bg-gradient-to-br from-[#122131] to-[#1c2b3c] relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-xs font-bold text-[#bcc9cd] uppercase mb-1">Current Market Yield</h4>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold text-[#4cd7f6]">8.42%</span>
              <span className="material-symbols-outlined text-[#4cd7f6] mb-1 text-xl">trending_up</span>
            </div>
            <p className="text-xs text-[#bcc9cd]/70 mt-2">Yield curve benchmarked against IDX30 assets.</p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <span className="material-symbols-outlined text-[120px] text-[#4cd7f6]">equalizer</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>


);
}