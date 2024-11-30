import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {

    
    const navigate = useNavigate(); 

    const handleLoginClick = () => {
    
      navigate('/login'); 
    };

  const stats = [
    { title: 'Total Earnings', value: '$15,300', color: 'bg-gradient-to-r from-green-400 to-green-600' },
    { title: 'Active Projects', value: '8', color: 'bg-gradient-to-r from-blue-400 to-blue-600' },
    { title: 'Pending Invoices', value: '4', color: 'bg-gradient-to-r from-orange-400 to-orange-600' },
    { title: 'Completed Projects', value: '10', color: 'bg-gradient-to-r from-pink-400 to-pink-600' },
  ];

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Earnings',
        data: [12000, 19000, 3000, 5000, 2000, 3000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',   
          'rgba(54, 162, 235, 0.6)',   
          'rgba(255, 206, 79, 0.6)',   
          'rgba(45, 192, 192, 0.6)',  
          'rgba(353, 102, 235, 0.6)',  
          'rgba(255, 149, 64, 0.6)',   
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Earnings',
      },
    },
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
     <div className="flex items-center justify-between">
  <h1 className="text-3xl font-bold text-gray-800 mb-6">
    Welcome back, hasti paladiya
  </h1>
  <button  onClick={handleLoginClick}
          className="px-4 py-2 bg-blue-900 text-white rounded-lg mb-6 hover:bg-blue-800"
        >
    Login
  </button>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.color} rounded-lg shadow-lg p-6 text-white`}>
            <h2 className="text-xl font-semibold mb-2">{stat.title}</h2>
            <p className="text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <Bar options={chartOptions} data={chartData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Projects</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Website Redesign</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">In Progress</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Mobile App Development</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Completed</span>
            </li>
            <li className="flex justify-between items-center">
              <span>E-commerce Platform</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">On Hold</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Deadlines</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Client Presentation</span>
              <span className="text-sm text-gray-600">June 15, 2023</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Project Milestone</span>
              <span className="text-sm text-gray-600">June 22, 2023</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Team Meeting</span>
              <span className="text-sm text-gray-600">June 30, 2023</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;