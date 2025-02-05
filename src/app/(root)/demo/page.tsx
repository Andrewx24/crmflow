// app/demo/page.tsx
'use client'
import { useState } from 'react'
import { 
  Mail, Bell, Settings, ArrowUp, ArrowDown, Search,
  Calendar, Users, BarChart, Phone, MessageSquare, Filter,
  Plus, ChevronDown, CircleDot
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

// Define our data structure types for better TypeScript support
interface Client {
  id: number
  name: string
  healthScore: number
  lastContact: string
  nextFollowUp: string
  status: 'Healthy' | 'Needs Attention' | 'At Risk'
  trend: 'up' | 'down' | 'stable'
  industry: string
  contactName: string
  emailHealth: number
  meetingHealth: number
  taskHealth: number
  notes?: string[]
}

interface Task {
  id: number
  title: string
  client: string
  dueDate: string
  priority: 'high' | 'medium' | 'low'
  type: 'email' | 'call' | 'meeting' | 'follow-up'
}

interface Activity {
  id: number
  type: 'email' | 'call' | 'meeting' | 'task'
  description: string
  timestamp: string
  client: string
  details?: string
}

interface Communication {
  id: number
  type: 'email' | 'call' | 'meeting'
  subject: string
  date: string
  status: 'completed' | 'scheduled' | 'pending'
  outcome?: string
}

// Mock data for our demo
const mockClients: Client[] = [
  {
    id: 1,
    name: "Acme Corp",
    healthScore: 92,
    lastContact: "2 days ago",
    nextFollowUp: "Tomorrow",
    status: "Healthy",
    trend: "up",
    industry: "Technology",
    contactName: "John Smith",
    emailHealth: 95,
    meetingHealth: 88,
    taskHealth: 93,
    notes: ["Client prefers morning meetings", "Q4 review scheduled"]
  },
  {
    id: 2,
    name: "TechStart Inc",
    healthScore: 78,
    lastContact: "5 days ago",
    nextFollowUp: "Today",
    status: "Needs Attention",
    trend: "down",
    industry: "Software",
    contactName: "Sarah Johnson",
    emailHealth: 75,
    meetingHealth: 82,
    taskHealth: 77,
    notes: ["Following up on new proposal", "Budget review pending"]
  },
  {
    id: 3,
    name: "Global Services Ltd",
    healthScore: 65,
    lastContact: "1 week ago",
    nextFollowUp: "Next Week",
    status: "At Risk",
    trend: "down",
    industry: "Consulting",
    contactName: "Mike Wilson",
    emailHealth: 60,
    meetingHealth: 70,
    taskHealth: 65,
    notes: ["Need to schedule quarterly review", "Contract renewal coming up"]
  }
]

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Follow up on project proposal",
    client: "Acme Corp",
    dueDate: "Today",
    priority: "high",
    type: "email"
  },
  {
    id: 2,
    title: "Quarterly review meeting",
    client: "TechStart Inc",
    dueDate: "Tomorrow",
    priority: "medium",
    type: "meeting"
  },
  {
    id: 3,
    title: "Send contract renewal",
    client: "Global Services Ltd",
    dueDate: "Next Week",
    priority: "high",
    type: "follow-up"
  }
]

const mockActivities: Activity[] = [
  {
    id: 1,
    type: "email",
    description: "Sent project update to Acme Corp",
    timestamp: "2 hours ago",
    client: "Acme Corp",
    details: "Discussed timeline changes and resource allocation"
  },
  {
    id: 2,
    type: "call",
    description: "Sales call with TechStart Inc",
    timestamp: "4 hours ago",
    client: "TechStart Inc",
    details: "Reviewed proposal and pricing structure"
  },
  {
    id: 3,
    type: "meeting",
    description: "Strategy meeting with Global Services",
    timestamp: "Yesterday",
    client: "Global Services Ltd",
    details: "Quarterly planning session"
  }
]

const mockCommunications: Communication[] = [
  {
    id: 1,
    type: "email",
    subject: "Project Update",
    date: "2024-02-04",
    status: "completed",
    outcome: "Positive response, meeting scheduled"
  },
  {
    id: 2,
    type: "call",
    subject: "Service Review",
    date: "2024-02-03",
    status: "completed",
    outcome: "Client satisfied, follow-up needed in 2 weeks"
  },
  {
    id: 3,
    type: "meeting",
    subject: "Quarterly Business Review",
    date: "2024-02-06",
    status: "scheduled"
  }
]

// Helper functions for UI elements
const getStatusColor = (status: Client['status']) => {
  switch (status) {
    case 'Healthy': return 'bg-green-100 text-green-800'
    case 'Needs Attention': return 'bg-yellow-100 text-yellow-800'
    case 'At Risk': return 'bg-red-100 text-red-800'
  }
}

const getPriorityIcon = (type: Activity['type'] | Task['type']) => {
  switch (type) {
    case 'email': return <Mail className="h-4 w-4" />
    case 'call': return <Phone className="h-4 w-4" />
    case 'meeting': return <Users className="h-4 w-4" />
    case 'follow-up': return <MessageSquare className="h-4 w-4" />
    case 'task': return <MessageSquare className="h-4 w-4" />
  }
}

export default function DemoPage() {
  // State management for our interactive elements
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('all')
  const [newNote, setNewNote] = useState('')

  // Filter clients based on search and tab selection
  const filteredClients = mockClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.industry.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'healthy' && client.status === 'Healthy') ||
                      (activeTab === 'needs-attention' && client.status === 'Needs Attention') ||
                      (activeTab === 'at-risk' && client.status === 'At Risk')
    return matchesSearch && matchesTab
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
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
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">3</span>
              </Button>
              <Settings className="h-5 w-5 text-gray-500 cursor-pointer" />
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">JS</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-6">
        <div className="max-w-7xl mx-auto px-4">
          {/* Welcome Section */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Welcome to CRMFlow</CardTitle>
                  <p className="text-gray-600 mt-1">
                    Build stronger client relationships with intelligent automation
                  </p>
                </div>
                <div className="flex space-x-3">
                  <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Client
                  </Button>
                  <Button>
                    <Mail className="h-4 w-4 mr-2" />
                    Quick Email
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Search and Filter Bar */}
          <div className="mb-6 flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search clients or companies..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Client Health Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Client Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Healthy (85%)</span>
                      <span className="text-green-600">24 clients</span>
                    </div>
                    <Progress value={85} className="bg-green-100" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Needs Attention (12%)</span>
                      <span className="text-yellow-600">5 clients</span>
                    </div>
                    <Progress value={12} className="bg-yellow-100" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>At Risk (3%)</span>
                      <span className="text-red-600">1 client</span>
                    </div>
                    <Progress value={3} className="bg-red-100" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockActivities.map(activity => (
                    <div key={activity.id} className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        {getPriorityIcon(activity.type)}
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">{activity.description}</p>
                        <p className="text-xs text-gray-500">
                          {activity.timestamp} · {activity.client}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Upcoming Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTasks.map(task => (
                    <div key={task.id} 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                        task.priority === 'high' ? 'bg-red-500' : 
                        task.priority === 'medium' ? 'bg-yellow-500' : 
                        'bg-green-500'
                      }`} />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium text-gray-900">{task.title}</p>
                          {getPriorityIcon(task.type)}
                        </div>
                        <p className="text-xs text-gray-500">
                          {task.client} · {task.dueDate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Client List */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Client Relationships</CardTitle>
                <Tabs defaultValue="all" className="w-auto" onValueChange={setActiveTab}>
                  <TabsList>
                    <TabsTrigger value="all">All Clients</TabsTrigger>
                    <TabsTrigger value="healthy">Healthy</TabsTrigger>
                    <TabsTrigger value="needs-attention">Needs Attention</TabsTrigger>
                    <TabsTrigger value="at-risk">At Risk</TabsTrigger>
                  </TabsList>
                </Tabs>

                </div>
            </CardHeader>
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
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredClients.map(client => (
                    <tr key={client.id} 
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedClient(client)}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {client.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {client.industry}
                          </div>
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{client.lastContact}</div>
                        <div className="text-xs text-gray-500">{client.contactName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {client.nextFollowUp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          getStatusColor(client.status)
                        }`}>
                          {client.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredClients.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No clients match your search criteria</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>

      {/* Client Details Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b sticky top-0 bg-white z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedClient.name}
                  </h2>
                  <p className="text-gray-500 mt-1">
                    {selectedClient.industry} · {selectedClient.contactName}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedClient(null)}
                  className="h-8 w-8 rounded-full"
                >
                  ×
                </Button>
              </div>
            </div>

            <div className="p-6">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="communications">Communications</TabsTrigger>
                  <TabsTrigger value="tasks">Tasks</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  {/* Health Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm font-medium">
                          Email Engagement
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center">
                          <div className="flex-1">
                            <Progress 
                              value={selectedClient.emailHealth}
                              className="h-2"
                            />
                          </div>
                          <span className="ml-4 text-sm font-medium">
                            {selectedClient.emailHealth}%
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Based on open rates and response times
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm font-medium">
                          Meeting Quality
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center">
                          <div className="flex-1">
                            <Progress 
                              value={selectedClient.meetingHealth}
                              className="h-2"
                            />
                          </div>
                          <span className="ml-4 text-sm font-medium">
                            {selectedClient.meetingHealth}%
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Based on frequency and follow-through
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-sm font-medium">
                          Task Completion
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center">
                          <div className="flex-1">
                            <Progress 
                              value={selectedClient.taskHealth}
                              className="h-2"
                            />
                          </div>
                          <span className="ml-4 text-sm font-medium">
                            {selectedClient.taskHealth}%
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Based on deadline adherence
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* AI Insights */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold mb-3">AI Insights</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <BarChart className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-blue-900">
                            Communication frequency has decreased
                          </p>
                          <p className="text-sm text-blue-700 mt-1">
                            Engagement is down 20% compared to last month
                          </p>
                          <Button size="sm" className="mt-2">
                            Schedule Check-in
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-3">
                    <Button className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Meeting
                    </Button>
                    <Button variant="outline" className="w-full">
                      <BarChart className="h-4 w-4 mr-2" />
                      View Reports
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="communications">
                  <div className="space-y-4">
                    {mockCommunications.map(comm => (
                      <Card key={comm.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                              {comm.type === 'email' ? <Mail className="h-4 w-4" /> :
                               comm.type === 'call' ? <Phone className="h-4 w-4" /> :
                               <Users className="h-4 w-4" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <h4 className="text-sm font-medium">{comm.subject}</h4>
                                <span className="text-xs text-gray-500">{comm.date}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">
                                {comm.outcome || 'No outcome recorded'}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tasks">
                  <div className="space-y-4">
                    {mockTasks.filter(task => task.client === selectedClient.name).map(task => (
                      <Card key={task.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                              task.priority === 'high' ? 'bg-red-500' :
                              task.priority === 'medium' ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`} />
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <h4 className="text-sm font-medium">{task.title}</h4>
                                {getPriorityIcon(task.type)}
                              </div>
                              <p className="text-xs text-gray-500 mt-1">
                                Due: {task.dueDate}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    <Button className="w-full" variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Task
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="notes">
                  <div className="space-y-4">
                    {selectedClient.notes?.map((note, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-start">
                            <CircleDot className="h-4 w-4 text-gray-400 mr-2 mt-1" />
                            <p className="text-sm text-gray-600">{note}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Add a new note..."
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                      />
                      <Button className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Note
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}