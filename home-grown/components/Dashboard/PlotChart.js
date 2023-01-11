import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import dashboardStyles from "../../styles/DashboardContainer.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PlotChart({ userPosts }) {
  console.log("PIE CHART DATA", userPosts);
  if (!userPosts) {
    return <h1>...loading</h1>;
  } else {
    let labelsArray = userPosts.map((element) => element.crop_name);
    let dataArray = userPosts.map(
      (element) => Number(element.percentage_of_plot) * 100
    );

    const data = {
      labels: labelsArray,
      datasets: [
        {
          label: "Percentage of Plot",
          data: dataArray,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className={dashboardStyles.pieChart}>
        <Pie data={data} />;
      </div>
    );
  }
}
