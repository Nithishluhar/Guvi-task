import React, { useEffect, useState } from "react";
import axios from "axios";

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
  const [urlData, setUrlData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("https://url-shortener-83vp.onrender.com/url/data");
      setUrlData(res.data);
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const res = urlData.map((item, i) => {
    return { ...item, Length: i, clicks: item.visitHistory.length };
  });
  console.log(res);

  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={res}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="clicks" stackId="a" fill="orange" />
        <Bar dataKey="shortId" stackId="a" fill="skyblue" />
      </BarChart>
    </div>
  );
};

export default Chart;
