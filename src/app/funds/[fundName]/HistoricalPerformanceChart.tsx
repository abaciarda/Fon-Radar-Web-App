"use client"

import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type TimePeriod = "daily" | "weekly" | "monthly" | "3monthly" | "6monthly" | "yearly" | "ytd";

interface ChartDataPoint {
    timestamp: number;
    value: number;
    date: Date;
}

export default function HistoricalPerformanceChart() {
    const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("monthly");


    const generateData = (period: TimePeriod): ChartDataPoint[] => {
        const data: ChartDataPoint[] = [];
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        
        let dates: Date[] = [];

        switch (period) {
            case "daily": {
                for (let i = 30; i >= 0; i--) {
                    const date = new Date(now);
                    date.setDate(date.getDate() - i);
                    dates.push(date);
                }
                break;
            }
            case "weekly": {
                for (let i = 12; i >= 0; i--) {
                    const date = new Date(now);
                    date.setDate(date.getDate() - (i * 7));
                    dates.push(date);
                }
                break;
            }
            case "monthly": {
                for (let i = 12; i >= 0; i--) {
                    const date = new Date(now);
                    date.setMonth(date.getMonth() - i);
                    date.setDate(1);
                    dates.push(date);
                }
                break;
            }
            case "3monthly": {
                for (let i = 8; i >= 0; i--) {
                    const date = new Date(now);
                    date.setMonth(date.getMonth() - (i * 3));
                    date.setDate(1);
                    dates.push(date);
                }
                break;
            }
            case "6monthly": {
                for (let i = 12; i >= 0; i--) {
                    const date = new Date(now);
                    date.setMonth(date.getMonth() - (i * 6));
                    date.setDate(1);
                    dates.push(date);
                }
                break;
            }
            case "yearly": {
                for (let i = 5; i >= 0; i--) {
                    const date = new Date(now);
                    date.setFullYear(date.getFullYear() - i);
                    date.setMonth(0, 1);
                    dates.push(date);
                }
                break;
            }
            case "ytd": {
                const startOfYear = new Date(now.getFullYear(), 0, 1);
                const monthsDiff = now.getMonth() + 1;
                for (let i = 0; i <= monthsDiff; i++) {
                    const date = new Date(startOfYear);
                    date.setMonth(date.getMonth() + i);
                    date.setDate(1);
                    dates.push(date);
                }
                break;
            }
        }

        const baseValue = 100;
        dates.forEach((date, index) => {
            const randomVariation = (Math.random() - 0.5) * 10;
            const trend = (index / dates.length) * 5;
            const value = baseValue + trend + randomVariation;
            
            data.push({ 
                timestamp: date.getTime(), 
                value: Math.round(value * 100) / 100,
                date: date
            });
        });

        return data;
    };

    const chartData = generateData(selectedPeriod);

    const timePeriodOptions: { value: TimePeriod; label: string }[] = [
        { value: "daily", label: "Günlük" },
        { value: "weekly", label: "Haftalık" },
        { value: "monthly", label: "Aylık" },
        { value: "3monthly", label: "3 Aylık" },
        { value: "6monthly", label: "6 Aylık" },
        { value: "yearly", label: "1 Yıllık" },
        { value: "ytd", label: "YTD" },
    ];

    const firstValue = chartData[0]?.value || 0;
    const lastValue = chartData[chartData.length - 1]?.value || 0;
    const performance = lastValue - firstValue;
    const performancePercentNum = firstValue !== 0 ? (performance / firstValue) * 100 : 0;
    const performancePercent = performancePercentNum.toFixed(2);

    const formatDate = (timestamp: number, period: TimePeriod): string => {
        const date = new Date(timestamp);
        
        if (period === "daily") {
            return `${date.getDate()}.${date.getMonth() + 1}`;
        } else if (period === "weekly") {
            return `${date.getDate()}.${date.getMonth() + 1}`;
        } else if (period === "yearly") {
            return `${date.getFullYear()}`;
        } else if (period === "monthly" || period === "3monthly" || period === "6monthly") {
            const monthNames = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
            return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
        } else if (period === "ytd") {
            const monthNames = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
            return `${monthNames[date.getMonth()]}`;
        }
        return date.toLocaleDateString('tr-TR');
    };

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            const dataPoint = payload[0].payload as ChartDataPoint;
            const value = dataPoint.value;
            const timestamp = dataPoint.timestamp;
            const change = value - firstValue;
            const changePercentNum = firstValue !== 0 ? (change / firstValue) * 100 : 0;
            const changePercent = changePercentNum.toFixed(2);
            const formattedDate = formatDate(timestamp, selectedPeriod);
            
            return (
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
                    <p className="text-xs text-gray-500 mb-1 font-medium">{formattedDate}</p>
                    <p className="text-base font-bold text-gray-900">
                        {value > 0 ? '+' : ''}{value.toFixed(2)}%
                    </p>
                    <p className={`text-xs font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {change >= 0 ? '+' : ''}{change.toFixed(2)}% ({changePercentNum >= 0 ? '+' : ''}{changePercent}%)
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Tarihsel Performans</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-gray-900">
                                {lastValue > 0 ? '+' : ''}{lastValue.toFixed(2)}%
                            </span>
                            <span className={`text-sm font-semibold ${performance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {performance >= 0 ? '+' : ''}{performance.toFixed(2)}% ({performancePercentNum >= 0 ? '+' : ''}{performancePercent}%)
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {timePeriodOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setSelectedPeriod(option.value)}
                                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                                    selectedPeriod === option.value
                                        ? "bg-gray-900 text-white shadow-sm"
                                        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                                }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full h-[450px] px-6 py-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart 
                        data={chartData} 
                        margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                    >
                        <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#16a34a" stopOpacity={0.05}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid 
                            strokeDasharray="3 3" 
                            stroke="#f0f0f0" 
                            vertical={false}
                        />
                        <XAxis 
                            dataKey="timestamp" 
                            type="number"
                            domain={['dataMin', 'dataMax']}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 11, fontWeight: 500 }}
                            tickMargin={10}
                            tickFormatter={(value) => formatDate(value, selectedPeriod)}
                        />
                        <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9ca3af', fontSize: 11, fontWeight: 500 }}
                            tickMargin={10}
                            tickFormatter={(value) => `${value > 0 ? '+' : ''}${value.toFixed(0)}%`}
                            domain={['auto', 'auto']}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#16a34a" 
                            strokeWidth={2.5}
                            fill="url(#colorGradient)"
                            dot={false}
                            activeDot={{ r: 4, fill: '#16a34a', stroke: '#fff', strokeWidth: 2 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
