

export default function DashboardHome() {
  return (
    <div className="p-8 bg-gray-100 h-screen">
      <h1 className="text-3xl font-bold font-bebas mb-4">Dashboard</h1>
      <p className="text-gray-600">Welcome to the admin dashboard!</p>
      
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-green-600">0</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Total Books</h2>
          <p className="text-3xl font-bold text-blue-600">0</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Pending Requests</h2>
          <p className="text-3xl font-bold text-orange-600">0</p>
        </div>
      </div>
    </div>
  );
}
