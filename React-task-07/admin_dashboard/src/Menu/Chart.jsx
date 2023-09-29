import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";

const Chart = () => {
  const data = [
    { name: "section-1", books: 12 },
    { name: "section-2", books: 22 },
    { name: "section-3", books: 10 },
    { name: "section-4", books: 40 },
  ];
  const data1 = [
    {
      name: " A-Lvl-books",
      Not_return: 4,
      Return: 24,
      amt: 2400,
    },
    {
      name: " B-Lvl-books",
      Not_return: 3,
      Return: 13,
      amt: 2210,
    },
    {
      name: " C-Lvl-books",
      Not_return: 20,
      Return: 9,
      amt: 2290,
    },
    {
      name: " D-Lvl-books",
      Not_return: 27,
      Return: 39,
      amt: 2000,
    },
    {
      name: " E-Lvl-books",
      Not_return: 18,
      Return: 48,
      amt: 2181,
    },
    {
      name: " F-Lvl-books",
      Not_return: 23,
      Return: 38,
      amt: 25,
    },
    {
      name: " G-Lvl-books",
      Not_return: 34,
      Return: 43,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <BarChart
            width={500}
            height={300}
            data={data1}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Return" stackId="a" fill="#8884d8" />
            <Bar dataKey="Not_return" stackId="a" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default Chart;
