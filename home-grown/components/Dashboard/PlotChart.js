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
    if (userPosts.length === 0) {
      return (
        <div className={styles["message-container"]}>
          <h1 className={styles["add-plot-message"]}>
            Please add a plot and create a post to see crop analytics here
          </h1>
          <button className={styles["button-one"]}>ADD PLOT</button>
        </div>
      );
    } else {
      let labelsArray = userPosts.map((element) => element.crop_name);
      let dataArray = userPosts.map(
        (element) => Number(element.percentage_of_plot) * 100
      );

      let total = 0;
      for (let i = 0; i < dataArray.length; i++) {
        total += dataArray[i];
      }

      let percentageNotUsed = 100 - total;

      console.log("DATA ARRAY", dataArray);

      if (percentageNotUsed !== 0) {
        dataArray.push(percentageNotUsed);
        labelsArray.push("Not In Use");
      }

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
              "#ffbd90",
              "#ffa05f",
              "#ff822e",
              "#fc6600",
              "#d29063",
              "#7f4929",
            ],
            borderColor: [
              "rgba(234, 246, 237, 1)",
              "rgba(201, 234, 212, 1)",
              "rgba(169, 222, 186, 1)",
              "rgba(103, 197, 135, 1)",
              "#ffbd90",
              "#ffa05f",
              "#ff822e",
              "#fc6600",
              "#d29063",
              "#7f4929",
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
}
