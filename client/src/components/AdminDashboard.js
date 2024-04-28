import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy previous chart instance
    }

    const ctx = chartRef.current.getContext('2d');
    const salesData = generateSalesData();

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
          label: 'Sales',
          data: salesData,
          fill: false,
          borderColor: 'orange',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Cleanup on component unmount
      }
    };
  }, []);

  // Generate fake sales data
  const generateSalesData = () => {
    const salesData = [];
    for (let i = 0; i < 7; i++) {
      // Generate random sales between 1000 and 3000
      const sales = Math.floor(Math.random() * (3000 - 1000 + 1) + 1000);
      salesData.push(sales);
    }
    return salesData;
  };

  return (
    <div className="container mx-auto p-5">
      <div className="bg-white p-8 mb-8 rounded-lg shadow-md w-100">
        <h2 className="text-2xl font-bold mb-4">Sales Graph</h2>
        <canvas ref={chartRef} />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-1/2">
        <Link to='/addBook'><p className="w-full text-center bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">Add a Book</p></Link>
      </div>
    </div>
  );
};

export default AdminDashboard;