import React from "react";
import { Column } from "@ant-design/charts";

const SalesChart = () => {
  const data = [
    { category: "Electronics", sales: 38 },
    { category: "Furniture", sales: 52 },
    { category: "Clothing", sales: 61 },
  ];

  const config = {
    data,
    xField: "category",
    yField: "sales",
    colorField: "category",
    color: ["#6394f9", "#62daab", "#657798"],
    label: {
      position: "top",
      style: {
        fill: "#000",
        fontSize: 12,
      },
    },
    tooltip: {
      showTitle: false,
      formatter: (datum) => ({
        name: "Sales",
        value: `${datum.sales} units`,
      }),
    },
    interactions: [{ type: "active-region" }],
  };

  return <Column {...config} />;
};

export default SalesChart;
