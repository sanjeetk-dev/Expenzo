import React from 'react'
import {
  TbCurrencyRupee,
  FiArrowDown,
  FiArrowLeft,
  FiSend,
} from "react-icons/all";

interface ButtonItem {
  name: string;
  Icon: React.ElementType;
}

const BUTTONLISTS: ButtonItem[] = [
  {
    name: "Total Income",
    Icon: TbCurrencyRupee,
  },
  {
    name: "Expenses",
    Icon: FiArrowDown,
  },
  {
    name: "Left",
    Icon: FiArrowLeft,
  },
  {
    name: "Money Sent",
    Icon: FiSend,
  },
];


const FinancialOverview = () => {
  return (
    <div></div>
  )
}

export default FinancialOverview