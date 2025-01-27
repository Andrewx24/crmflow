// app/demo/page.tsx

import { 
     Mail,  Bell, 
    ArrowUp, ArrowDown,  Settings
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  
  // Sample data to populate our demo
  const mockClients = [
    {
      id: 1,
      name: "Acme Corp",
      healthScore: 92,
      lastContact: "2 days ago",
      nextFollowUp: "Tomorrow",
      status: "Healthy",
      trend: "up",
    },
    {
      id: 2,
      name: "TechStart Inc",
      healthScore: 78,
      lastContact: "5 days ago",
      nextFollowUp: "Today",
      status: "Needs Attention",
      trend: "down",
    },
    // Add more mock clients...
  ]
  
  const mockTasks = [
    {
      id: 1,
      title: "Follow up on project proposal",
      client: "Acme Corp",
      dueDate: "Today",
      priority: "high",
    },
    {
      id: 2,
      title: "Schedule quarterly review",
      client: "TechStart Inc",
      dueDate: "Tomorrow",
      priority: "medium",
    },
    // Add more mock tasks...
  ]
  
  export default function DemoPage() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <div className="text-2xl font-bold text-blue-600">CRMFlow</div>
                <div className="hidden md:flex space-x-4">
                  <Button variant="ghost" className="text-gray-600">Dashboard</Button>
                  <Button variant="ghost" className="text-gray-600">Clients</Button>
                  <Button variant="ghost" className="text-gray-600">Tasks</Button>
                  <Button variant="ghost" className="text-gray-600">Reports</Button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Bell className="h-5 w-5 text-gray-500" />
                <Settings className="h-5 w-5 text-gray-500" />
                <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Main Content */}
        <main className="py-6">
          <div className="max-w-7xl mx-auto px-4">
            {/* Welcome Message */}
            <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Welcome to the CRMFlow Demo
              </h1>
              <p className="text-gray-600">
                This is an interactive demonstration of our platform. Explore how 
                CRMFlow helps you manage client relationships more effectively.
              </p>
            </div>
  
            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Client Health Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Healthy Relationships</span>
                    <span className="text-green-500 font-semibold">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Needs Attention</span>
                    <span className="text-yellow-500 font-semibold">12%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">At Risk</span>
                    <span className="text-red-500 font-semibold">3%</span>
                  </div>
                </div>
              </div>
  
              {/* Recent Activity */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">Email sent to Acme Corp</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  {/* Add more activity items */}
                </div>
              </div>
  
              {/* Upcoming Tasks */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Upcoming Tasks</h3>
                <div className="space-y-4">
                  {mockTasks.map(task => (
                    <div key={task.id} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                        task.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                      }`} />
                      <div>
                        <p className="text-sm text-gray-900">{task.title}</p>
                        <p className="text-xs text-gray-500">
                          {task.client} · {task.dueDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Client List */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Client Relationships</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Health Score
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Next Follow-up
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {mockClients.map(client => (
                      <tr key={client.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {client.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className={`text-sm ${
                              client.healthScore >= 90 ? 'text-green-600' :
                              client.healthScore >= 70 ? 'text-yellow-600' :
                              'text-red-600'
                            }`}>
                              {client.healthScore}%
                            </span>
                            {client.trend === 'up' ? (
                              <ArrowUp className="h-4 w-4 text-green-500 ml-1" />
                            ) : (
                              <ArrowDown className="h-4 w-4 text-red-500 ml-1" />
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {client.lastContact}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {client.nextFollowUp}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            client.status === 'Healthy' 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {client.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
  
        {/* Feature Tooltips */}
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4">
          <h4 className="font-semibold text-sm mb-2">Pro Tip</h4>
          <p className="text-sm text-gray-600">
            Click on any client to see detailed relationship insights and 
            communication history.
          </p>
        </div>
      </div>
    )
  }