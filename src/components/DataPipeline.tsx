import React, { useState } from 'react';
import { Database, Terminal, CheckCircle2, ChevronRight, BarChart2, Sparkles, Copy, Check } from 'lucide-react';

export const DataPipeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sql' | 'python' | 'insight'>('sql');
  const [copied, setCopied] = useState(false);

  const pipelineSteps = [
    { label: 'RAW DATA', color: 'border-slate-700 text-slate-400 bg-slate-900' },
    { label: 'SQL', color: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10' },
    { label: 'PYTHON', color: 'border-purple-500/40 text-purple-300 bg-purple-500/10' },
    { label: 'CLEANING', color: 'border-amber-500/40 text-amber-300 bg-amber-500/10' },
    { label: 'ANALYSIS', color: 'border-sky-500/40 text-sky-300 bg-sky-500/10' },
    { label: 'POWER BI', color: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10' },
    { label: 'BUSINESS INSIGHT', color: 'border-rose-500/40 text-rose-300 bg-rose-500/10' },
  ];

  const sqlQueryText = `-- Querying Sales Revenue by Category and Region
SELECT 
    category,
    region,
    COUNT(order_id) AS total_orders,
    ROUND(SUM(sales_amount), 2) AS total_revenue,
    ROUND(AVG(margin_pct), 1) AS avg_margin_pct
FROM sales_transactions
WHERE transaction_date >= '2025-01-01'
GROUP BY category, region
HAVING total_revenue > 50000
ORDER BY total_revenue DESC;`;

  const pythonCodeText = `# Customer Recency, Frequency, Monetary (RFM) Aggregation
import pandas as pd
import numpy as np

# Load transactions
df = pd.read_csv('customer_transactions.csv')
df['date'] = pd.to_datetime(df['date'])

# Calculate RFM Metrics
rfm = df.groupby('customer_id').agg({
    'date': lambda x: (pd.to_datetime('2025-12-31') - x.max()).days, # Recency
    'order_id': 'count',                                           # Frequency
    'amount': 'sum'                                                # Monetary
}).rename(columns={'date':'Recency', 'order_id':'Frequency', 'amount':'Monetary'})

print("RFM Segment distribution computed.")`;

  const copySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="pipeline" className="py-20 bg-[#08090D] relative border-t border-[#1F2430]/60 grid-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>METHODOLOGY SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Data <span className="gradient-text-cyan-purple">→ Insight</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            An interactive walk-through of the end-to-end analytical pipeline: extracting raw transactional data to actionable executive summaries.
          </p>
        </div>

        {/* Pipeline Step Progress Bar */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center justify-between min-w-[700px] gap-2 px-2">
            {pipelineSteps.map((step, idx) => (
              <React.Fragment key={step.label}>
                <div className={`px-3 py-1.5 rounded-lg border font-mono text-[11px] font-bold tracking-wider shrink-0 shadow-md ${step.color}`}>
                  {step.label}
                </div>
                {idx < pipelineSteps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Interactive Showcase Panel */}
        <div className="rounded-2xl bg-[#101218] border border-[#1F2430] glass-panel glow-cyan-sm overflow-hidden">
          
          {/* Tab Selection Navigation */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#151821] border-b border-[#1F2430]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('sql')}
                className={`px-4 py-2 text-xs font-mono font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'sql' 
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 glow-cyan-sm' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                1. Query (SQL Editor)
              </button>

              <button
                onClick={() => setActiveTab('python')}
                className={`px-4 py-2 text-xs font-mono font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'python' 
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 glow-purple-sm' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Database className="w-3.5 h-3.5 text-purple-400" />
                2. Analysis (Python/Pandas)
              </button>

              <button
                onClick={() => setActiveTab('insight')}
                className={`px-4 py-2 text-xs font-mono font-semibold rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === 'insight' 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 glow-emerald-sm' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5 text-emerald-400" />
                3. Insight (Power BI Dashboard)
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => copySnippet(activeTab === 'sql' ? sqlQueryText : activeTab === 'python' ? pythonCodeText : 'Power BI Executive Insight Report')}
                className="p-2 text-slate-400 hover:text-cyan-300 bg-[#101218] border border-[#1F2430] rounded-lg transition-colors text-xs flex items-center gap-1.5 font-mono cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-6">
            
            {/* Tab 1: SQL View */}
            {activeTab === 'sql' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-[#1F2430]">
                  <span>File: query_sales_performance.sql</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Executed on PostgreSQL
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#08090D] border border-[#1F2430] font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre className="leading-relaxed">
                    <span className="text-slate-500">-- Querying Sales Revenue by Category and Region</span>{'\n'}
                    <span className="text-cyan-400">SELECT</span>{'\n'}
                    {'    '}category,{'\n'}
                    {'    '}region,{'\n'}
                    {'    '}<span className="text-purple-400">COUNT</span>(order_id) <span className="text-cyan-400">AS</span> total_orders,{'\n'}
                    {'    '}<span className="text-purple-400">ROUND</span>(<span className="text-purple-400">SUM</span>(sales_amount), <span className="text-amber-300">2</span>) <span className="text-cyan-400">AS</span> total_revenue,{'\n'}
                    {'    '}<span className="text-purple-400">ROUND</span>(<span className="text-purple-400">AVG</span>(margin_pct), <span className="text-amber-300">1</span>) <span className="text-cyan-400">AS</span> avg_margin_pct{'\n'}
                    <span className="text-cyan-400">FROM</span> sales_transactions{'\n'}
                    <span className="text-cyan-400">WHERE</span> transaction_date &gt;= <span className="text-emerald-300">'2025-01-01'</span>{'\n'}
                    <span className="text-cyan-400">GROUP BY</span> category, region{'\n'}
                    <span className="text-cyan-400">HAVING</span> total_revenue &gt; <span className="text-amber-300">50000</span>{'\n'}
                    <span className="text-cyan-400">ORDER BY</span> total_revenue <span className="text-cyan-400">DESC</span>;
                  </pre>
                </div>

                {/* Query Output Result Table */}
                <div className="mt-4">
                  <div className="text-xs font-mono text-cyan-300 mb-2 flex items-center justify-between">
                    <span>QUERY RESULT TABLE (Sample Output)</span>
                    <span className="text-slate-500">3 rows returned (14ms)</span>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-[#1F2430]">
                    <table className="w-full text-left font-mono text-xs">
                      <thead className="bg-[#151821] text-slate-300 border-b border-[#1F2430]">
                        <tr>
                          <th className="p-2.5">category</th>
                          <th className="p-2.5">region</th>
                          <th className="p-2.5">total_orders</th>
                          <th className="p-2.5">total_revenue (₹)</th>
                          <th className="p-2.5">avg_margin_pct (%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1F2430] text-slate-400 bg-[#08090D]/50">
                        <tr>
                          <td className="p-2.5 text-white">Electronics</td>
                          <td className="p-2.5">North America</td>
                          <td className="p-2.5 text-cyan-300">1,420</td>
                          <td className="p-2.5 text-emerald-400 font-bold">₹4,850,200</td>
                          <td className="p-2.5 text-purple-300">22.4%</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 text-white">Furniture</td>
                          <td className="p-2.5">Europe</td>
                          <td className="p-2.5 text-cyan-300">890</td>
                          <td className="p-2.5 text-emerald-400 font-bold">₹2,140,500</td>
                          <td className="p-2.5 text-purple-300">18.6%</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 text-white">Office Supplies</td>
                          <td className="p-2.5">Asia Pacific</td>
                          <td className="p-2.5 text-cyan-300">2,310</td>
                          <td className="p-2.5 text-emerald-400 font-bold">₹1,950,800</td>
                          <td className="p-2.5 text-purple-300">25.1%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 2: Python / Pandas View */}
            {activeTab === 'python' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-[#1F2430]">
                  <span>File: customer_segmentation_rfm.py</span>
                  <span className="text-purple-400 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Pandas & NumPy Environment
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#08090D] border border-[#1F2430] font-mono text-xs text-slate-200 overflow-x-auto">
                  <pre className="leading-relaxed">
                    <span className="text-slate-500"># Customer Recency, Frequency, Monetary (RFM) Aggregation</span>{'\n'}
                    <span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd{'\n'}
                    <span className="text-purple-400">import</span> numpy <span className="text-purple-400">as</span> np{'\n'}
                    {'\n'}
                    <span className="text-slate-500"># Load transactional dataset</span>{'\n'}
                    df = pd.read_csv(<span className="text-emerald-300">'customer_transactions.csv'</span>){'\n'}
                    df[<span className="text-emerald-300">'date'</span>] = pd.to_datetime(df[<span className="text-emerald-300">'date'</span>]){'\n'}
                    {'\n'}
                    <span className="text-slate-500"># Compute RFM index groupings</span>{'\n'}
                    rfm = df.groupby(<span className="text-emerald-300">'customer_id'</span>).agg({'{'}{'\n'}
                    {'    '}<span className="text-emerald-300">'date'</span>: <span className="text-purple-400">lambda</span> x: (pd.to_datetime(<span className="text-emerald-300">'2025-12-31'</span>) - x.<span className="text-cyan-400">max</span>()).days,{'\n'}
                    {'    '}<span className="text-emerald-300">'order_id'</span>: <span className="text-emerald-300">'count'</span>,{'\n'}
                    {'    '}<span className="text-emerald-300">'amount'</span>: <span className="text-emerald-300">'sum'</span>{'\n'}
                    {'}'}).rename(columns={'{'}<span className="text-emerald-300">'date'</span>:<span className="text-emerald-300">'Recency'</span>, <span className="text-emerald-300">'order_id'</span>:<span className="text-emerald-300">'Frequency'</span>, <span className="text-emerald-300">'amount'</span>:<span className="text-emerald-300">'Monetary'</span>{'}'}){'\n'}
                  </pre>
                </div>

                {/* Pandas RFM Output Widget */}
                <div className="p-4 rounded-xl bg-[#151821] border border-[#1F2430]">
                  <div className="text-xs font-mono text-purple-300 mb-2">RFM SEGMENT OUTPUT SUMMARY</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-[#08090D] border border-[#1F2430]">
                      <div className="text-[10px] font-mono text-slate-400">Champions</div>
                      <div className="text-lg font-bold text-emerald-400 mt-0.5">1,240 Customers</div>
                      <div className="text-[10px] text-slate-400">High Monetary, Low Recency</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#08090D] border border-[#1F2430]">
                      <div className="text-[10px] font-mono text-slate-400">Loyal Customers</div>
                      <div className="text-lg font-bold text-cyan-400 mt-0.5">3,120 Customers</div>
                      <div className="text-[10px] text-slate-400">High Frequency</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#08090D] border border-[#1F2430]">
                      <div className="text-[10px] font-mono text-slate-400">At Risk</div>
                      <div className="text-lg font-bold text-rose-400 mt-0.5">650 Customers</div>
                      <div className="text-[10px] text-slate-400">High Recency Gap</div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Tab 3: Power BI / Executive Insight View */}
            {activeTab === 'insight' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-[#1F2430]">
                  <span>Dashboard: Executive_BI_Summary.pbix</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <BarChart2 className="w-3.5 h-3.5" /> Interactive Power BI Model
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div className="p-4 rounded-xl bg-[#08090D] border border-[#1F2430] space-y-2">
                    <div className="text-xs font-mono text-slate-400">INSIGHT 01 — Top Revenue Driver</div>
                    <div className="text-xl font-bold text-cyan-300">Electronics (48.8%)</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Electronics generated the highest aggregate revenue stream, backed by steady Q3/Q4 demand.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#08090D] border border-[#1F2430] space-y-2">
                    <div className="text-xs font-mono text-slate-400">INSIGHT 02 — High Profit Margin</div>
                    <div className="text-xl font-bold text-emerald-400">Office Supplies (25.1%)</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Although overall order sizes are smaller, profit margin index remains highest in Office Supplies.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#08090D] border border-[#1F2430] space-y-2">
                    <div className="text-xs font-mono text-slate-400">INSIGHT 03 — Actionable Strategy</div>
                    <div className="text-xl font-bold text-purple-300">Target Retention</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Focus marketing incentives on 650 'At Risk' customers to recover potential churned revenue.
                    </p>
                  </div>

                </div>

                {/* Dashboard Summary Box */}
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>This structured approach transforms complex SQL & Python datasets into clear business decisions.</span>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
