import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";
import "../Components/DashboardStyle.css";


export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
  }, [navigate]);

  useEffect(() => {
    // === Revenue Chart ===
    const revenueCtx = document.getElementById("revenueChart")?.getContext("2d");
    if (revenueCtx) {
      // Purana chart destroy karo agar exist karta hai
      const existingChart = Chart.getChart("revenueChart");
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(revenueCtx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Revenue",
              data: [6500, 5900, 8000, 8100, 8600, 9250, 10200],
              backgroundColor: "rgba(67, 97, 238, 0.2)",
              borderColor: "rgba(67, 97, 238, 1)",
              borderWidth: 2,
              tension: 0.4,
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              ticks: {
                callback: (value) => "$" + value.toLocaleString(),
              },
            },
            x: { grid: { display: false } },
          },
        },
      });
    }

    // === Traffic Chart ===
    const trafficCtx = document.getElementById("trafficChart")?.getContext("2d");
    if (trafficCtx) {
      const existingChart = Chart.getChart("trafficChart");
      if (existingChart) {
        existingChart.destroy();
      }
      new Chart(trafficCtx, {
        type: "doughnut",
        data: {
          labels: ["Direct", "Referral", "Social", "Organic"],
          datasets: [
            {
              data: [35, 25, 20, 20],
              backgroundColor: [
                "rgba(67, 97, 238, 0.8)",
                "rgba(63, 55, 201, 0.8)",
                "rgba(76, 201, 240, 0.8)",
                "rgba(248, 113, 113, 0.8)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "70%",
          plugins: {
            legend: {
              position: "right",
              labels: { usePointStyle: true, pointStyle: "circle" },
            },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.label}: ${ctx.raw}%`,
              },
            },
          },
        },
      });
    }

    // === Chart period buttons ===
    const buttons = document.querySelectorAll(".chart-actions button");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }, []);

  return (
    <section className="dashboard py-5 p-3">
      <div className="row mb-3">
        <div className="col-lg-4">
          <div class="bg-white shadow rounded-4 p-4">
            <div class="d-flex align-items-center justify-content-between">
              <h3 className="fs-5 fw-semibold text-secondary mb-0">Total Order</h3>
              <div className="alert alert-primary p-1 mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#0d6efd" viewBox="0 0 640 640"><path d="M296 88C296 74.7 306.7 64 320 64C333.3 64 344 74.7 344 88L344 128L400 128C417.7 128 432 142.3 432 160C432 177.7 417.7 192 400 192L285.1 192C260.2 192 240 212.2 240 237.1C240 259.6 256.5 278.6 278.7 281.8L370.3 294.9C424.1 302.6 464 348.6 464 402.9C464 463.2 415.1 512 354.9 512L344 512L344 552C344 565.3 333.3 576 320 576C306.7 576 296 565.3 296 552L296 512L224 512C206.3 512 192 497.7 192 480C192 462.3 206.3 448 224 448L354.9 448C379.8 448 400 427.8 400 402.9C400 380.4 383.5 361.4 361.3 358.2L269.7 345.1C215.9 337.5 176 291.4 176 237.1C176 176.9 224.9 128 285.1 128L296 128L296 88z"/></svg>
              </div>
            </div>
            <div class="widget-body my-4">
              <span class="d-block fs-1 fw-bold lh-sm mb-3">$24,780</span> 
              <span class="d-flex align-items-center gap-2 text-success fs-5 fw-semibold">
                +0.4% 
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z"/></svg>
              </span>
            </div>
            <div class="widget-footer">
              <span>vs last month</span>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div class="bg-white shadow rounded-4 p-4">
            <div class="d-flex align-items-center justify-content-between">
              <h3 className="fs-5 fw-semibold text-secondary mb-0">Inventory</h3>
              <div className="alert alert-primary p-1 mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#0d6efd" viewBox="0 0 640 640"><path d="M296 88C296 74.7 306.7 64 320 64C333.3 64 344 74.7 344 88L344 128L400 128C417.7 128 432 142.3 432 160C432 177.7 417.7 192 400 192L285.1 192C260.2 192 240 212.2 240 237.1C240 259.6 256.5 278.6 278.7 281.8L370.3 294.9C424.1 302.6 464 348.6 464 402.9C464 463.2 415.1 512 354.9 512L344 512L344 552C344 565.3 333.3 576 320 576C306.7 576 296 565.3 296 552L296 512L224 512C206.3 512 192 497.7 192 480C192 462.3 206.3 448 224 448L354.9 448C379.8 448 400 427.8 400 402.9C400 380.4 383.5 361.4 361.3 358.2L269.7 345.1C215.9 337.5 176 291.4 176 237.1C176 176.9 224.9 128 285.1 128L296 128L296 88z"/></svg>
              </div>
            </div>
            <div class="widget-body my-4">
              <span class="d-block fs-1 fw-bold lh-sm mb-3">4324323</span> 
              <span class="d-flex align-items-center gap-2 text-success fs-5 fw-semibold">
                +0.4% 
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z"/></svg>
              </span>
            </div>
            <div class="widget-footer">
              <span>vs last month</span>
            </div>
          </div>
        </div>
      </div>
      <div className="charts-row">
        <div className="chart-container card p-3">
          <div className="chart-header border-bottom">
            <h3>Revenue Overview</h3>
          </div>
          <div className="chart-body">
            <canvas id="revenueChart"></canvas>
          </div>
        </div>
        <div className="chart-container card p-3">
          <div className="chart-header border-bottom">
            <h3>Traffic Sources</h3>
          </div>
          <div className="chart-body">
            <canvas id="trafficChart"></canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
