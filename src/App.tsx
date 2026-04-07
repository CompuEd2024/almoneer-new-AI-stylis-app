/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, RefreshCw, Sparkles } from 'lucide-react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full border border-slate-100"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-200">
            <Sparkles size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dummy App</h1>
            <p className="text-slate-500 text-sm">Interactive starter template</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-12 flex flex-col items-center justify-center mb-8 border border-slate-100 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={count}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="text-7xl font-black text-indigo-600 tabular-nums"
            >
              {count}
            </motion.span>
          </AnimatePresence>
          <div className="mt-2 text-slate-400 font-medium text-sm uppercase tracking-widest">Current Value</div>
          
          {/* Decorative background element */}
          <div className="absolute -right-4 -bottom-4 text-slate-200/50 rotate-12">
            <Sparkles size={120} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => setCount(prev => prev - 1)}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white border-2 border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 transition-all group active:scale-95"
          >
            <Minus className="text-slate-400 group-hover:text-indigo-600 transition-colors" />
            <span className="text-xs font-bold text-slate-500 group-hover:text-indigo-600">Decrease</span>
          </button>

          <button
            onClick={() => setCount(0)}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white border-2 border-slate-100 hover:border-amber-200 hover:bg-amber-50 transition-all group active:scale-95"
          >
            <RefreshCw className="text-slate-400 group-hover:text-amber-600 transition-colors" />
            <span className="text-xs font-bold text-slate-500 group-hover:text-amber-600">Reset</span>
          </button>

          <button
            onClick={() => setCount(prev => prev + 1)}
            className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white border-2 border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group active:scale-95"
          >
            <Plus className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
            <span className="text-xs font-bold text-slate-500 group-hover:text-emerald-600">Increase</span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          <p className="text-center text-slate-400 text-xs leading-relaxed">
            Built with React, Tailwind CSS, and Motion.<br />
            Ready for your next big idea.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
