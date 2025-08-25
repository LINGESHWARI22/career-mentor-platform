import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow">
      <h1 className="text-3xl font-bold text-center mb-2">Dashboard</h1>
      <p className="text-center text-gray-600 mb-6">
        🎉 Welcome to your Dashboard! This is where you’ll see your career insights and recommendations.
      </p>
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-blue-100">Your Progress</div>
        <div className="p-4 rounded-lg bg-green-100">Recommended Courses</div>
        <div className="p-4 rounded-lg bg-yellow-100">Mentor Sessions</div>
      </div>
    </div>
  );
}
