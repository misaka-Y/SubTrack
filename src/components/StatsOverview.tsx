import React, { useState } from 'react';
import { CreditCard, Calendar, TrendingUp, PieChart as PieIcon, List } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { SpendingStats } from '../types';
import { cn } from '../lib/utils';

interface StatsOverviewProps {
  stats: SpendingStats;
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ stats }) => {
  const [breakdownType, setBreakdownType] = useState<'category' | 'item'>('category');

  const chartData = breakdownType === 'category' ? stats.categoryBreakdown : stats.itemBreakdown;

  return (
    <div className="space-y-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <CreditCard size={20} />
            </div>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">月度支出</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-slate-900">¥{stats.monthlyTotal.toFixed(2)}</h3>
            <span className="text-sm text-slate-500">/ 月</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
              <TrendingUp size={20} />
            </div>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">年度预估</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-slate-900">¥{stats.yearlyTotal.toFixed(2)}</h3>
            <span className="text-sm text-slate-500">/ 年</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
              <List size={20} />
            </div>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">活跃订阅</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-slate-900">{stats.activeCount}</h3>
            <span className="text-sm text-slate-500">个</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-slate-900 text-white shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-white/10 rounded-lg text-white">
              <Calendar size={20} />
            </div>
            <span className="text-xs font-medium text-white/50 uppercase tracking-wider">下个扣款日</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">3月 15日</h3>
            <p className="text-sm text-white/60 mt-1">Netflix 续费 ¥45.00</p>
          </div>
        </motion.div>
      </div>

      {/* Chart Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="p-6 rounded-3xl bg-white shadow-sm border border-slate-100"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
              <PieIcon size={18} />
            </div>
            <h3 className="font-bold text-slate-900">支出明细</h3>
          </div>
          
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
            <button 
              onClick={() => setBreakdownType('category')}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                breakdownType === 'category' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              <PieIcon size={14} />
              按分类
            </button>
            <button 
              onClick={() => setBreakdownType('item')}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                breakdownType === 'item' ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              <List size={14} />
              按项目
            </button>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                animationBegin={0}
                animationDuration={1000}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`¥${value.toFixed(2)}`, '月支出']}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};
