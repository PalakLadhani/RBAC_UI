import React from "react";
import { Bar } from "@ant-design/charts"; // Example chart

const SellerChart = () => {
  const data = [
    { seller: "Seller A", sales: 30 },
    { seller: "Seller B", sales: 70 },
    { seller: "Seller C", sales: 50 },
  ];

  const config = {
    data,
    xField: "sales",
    yField: "seller",
    seriesField: "seller",
    colorField: "seller",
  };

  return <Bar {...config} />;
};

export default SellerChart;
