import React from "react";

export function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-slate-900 text-white overflow-hidden">
            {/* SIDEBAR NAVIGATION */}
            <aside className="w-64 bg-slate-950 p-6 border-r border-slate-800 flex flex-col justify-between">
                <div>
                    <div className="text-xl font-bold tracking-wider mb-8 text-blue-400">JEAN REVO</div>
                    <nav className="space-y-2">
                        <a href="#" className="block px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium">Dashboard</a>
                        <a href="#" className="block px-4 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition">Research Hub</a>
                        <a href="#" className="block px-4 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition">Finance Tools</a>
                    </nav>
                </div>
                <div className="text-xs text-slate-500">© 2026 Jean Revo</div>
            </aside>

            {/* MAIN CONTENT AREA */}
            <main className="flex-1 overflow-y-auto bg-slate-900">
                {children}
            </main>
        </div>
    );
}