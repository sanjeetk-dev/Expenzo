import React from "react";
import { 
  FiArrowDown, 
  FiArrowLeft, 
  FiSend, 
  FiTrendingUp, 
  FiArrowUpCircle 
} from "react-icons/fi";
import { TbCurrencyRupee, TbChartPie } from "react-icons/tb";

interface ButtonItem {
  name: string;
  Icon: React.ElementType;
  color: string;
}

const BUTTONLISTS: ButtonItem[] = [
  {
    name: "Total Income",
    Icon: TbCurrencyRupee,
    color: "text-green-500",
  },
  {
    name: "Expenses",
    Icon: FiArrowDown,
    color: "text-red-500",
  },
  {
    name: "Left",
    Icon: FiArrowLeft,
    color: "text-blue-500",
  },
  {
    name: "Money Sent",
    Icon: FiSend,
    color: "text-yellow-500",
  },
  {
    name: "Investments",
    Icon: FiTrendingUp,
    color: "text-purple-500",
  },
  {
    name: "Savings",
    Icon: FiArrowUpCircle,
    color: "text-teal-500",
  },
  {
    name: "Spending Insights",
    Icon: TbChartPie,
    color: "text-orange-500",
  },
];

const FinancialOverview = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Financial Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BUTTONLISTS.map((button, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
            <button.Icon className={`w-10 h-10 ${button.color} mr-4`} />
            <span className="text-lg font-medium text-gray-700">{button.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialOverview;
