import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import styles from "../../styles/DashboardContainer.module.css";

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
            "rgba(234, 246, 237, 1)",
            "rgba(201, 234, 212, 1)",
            "rgba(169, 222, 186, 1)",
            "rgba(103, 197, 135, 1)",
        
          ],
          borderColor: [
            "rgba(234, 246, 237, 1)",
            "rgba(201, 234, 212, 1)",
            "rgba(169, 222, 186, 1)",
            "rgba(103, 197, 135, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className={styles["plot-chart"]}>
        <Pie data={data} />
      </div>
    );
  }
}
