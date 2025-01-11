
import React, { useState } from 'react'
import { DatePickerWithRange } from "@/components/Date-Range"
import { Button } from '@/components/ui/button'
import { FiGrid, FiBarChart2, FiFileText, FiBell } from "react-icons/fi";

import Overview from "@/components/Overview"
interface ButtonItem {
  name: string;
  Icon: React.ElementType;
}

const BUTTONLIST: ButtonItem[] = [
  {
    name: "overview",
    Icon: FiGrid,
  },
  {
    name: "analytics",
    Icon: FiBarChart2,
  },
  {
    name: "reports",
    Icon: FiFileText,
  },
  {
    name: "notifications",
    Icon: FiBell,
  },
];

const Home = () => {
  const [preview, setPreview] = useState("overview")
  return (
    <div
      className="min-h-screen w-full p-8 md:p-10 bg-white text-black">
      <div className="w-full md:flex items-center justify-between gap-4 ">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div>
          <DatePickerWithRange />
        </div>
      </div>

      <div className="max-w-fit w-full py-2 px-3 flex gap-1.5 bg-gray-200 mt-5 rounded-md items-center justify-between">
        {BUTTONLIST.map(({ name, Icon }, i) => (
          <Button key={name} className={`capitalize ${preview === name ? "bg-gray-400" : ""}`} onClick={() => setPreview(name)}>
          <Icon className="w-5 h-5" />
          <span className="hidden md:block text-sm font-medium">
            {name}
          </span>
          </Button>
        ))}
      </div>
      <Overview />
    </div>
  )
}

export default Home