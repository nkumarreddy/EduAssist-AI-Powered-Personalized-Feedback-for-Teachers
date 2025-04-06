import React, { useState } from 'react';
import { BookOpen, Users, FileCheck, Brain, ChevronRight, Sparkles, BarChart, Settings, LogOut, Calendar, Clock, Award } from 'lucide-react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab('dashboard');
  };

  const renderAnalytics = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Class Performance Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-800">Average Score</h4>
            <p className="text-3xl font-bold text-green-600">85%</p>
            <p className="text-sm text-green-700">↑ 5% from last month</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800">Submission Rate</h4>
            <p className="text-3xl font-bold text-blue-600">92%</p>
            <p className="text-sm text-blue-700">↑ 3% from last month</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-800">Student Engagement</h4>
            <p className="text-3xl font-bold text-purple-600">88%</p>
            <p className="text-sm text-purple-700">↑ 7% from last month</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Subject-wise Performance</h3>
        <div className="space-y-4">
          {[
            { subject: 'Mathematics', score: 88, trend: 'up' },
            { subject: 'Science', score: 82, trend: 'up' },
            { subject: 'English', score: 78, trend: 'down' },
          ].map((subject) => (
            <div key={subject.subject} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-semibold">{subject.subject}</h4>
                <p className="text-sm text-gray-600">Class Average</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-indigo-600">{subject.score}%</p>
                <p className={`text-sm ${subject.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {subject.trend === 'up' ? '↑' : '↓'} from last assessment
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Upcoming Assignments</h3>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            Create New
          </button>
        </div>
        <div className="space-y-4">
          {[
            {
              title: 'Mathematics Quiz - Calculus',
              dueDate: '2025-03-20',
              status: 'Pending',
              type: 'Quiz'
            },
            {
              title: 'Science Project - Renewable Energy',
              dueDate: '2025-03-25',
              status: 'Draft',
              type: 'Project'
            },
          ].map((assignment) => (
            <div key={assignment.title} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{assignment.title}</h4>
                  <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  assignment.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {assignment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">Past Assignments</h3>
        <div className="space-y-4">
          {[
            {
              title: 'English Essay - Literature Review',
              date: '2025-02-15',
              avgScore: 85,
              submissions: 28
            },
            {
              title: 'Mathematics Test - Algebra',
              date: '2025-02-10',
              avgScore: 78,
              submissions: 30
            },
            {
              title: 'Science Lab Report',
              date: '2025-02-05',
              avgScore: 92,
              submissions: 29
            },
          ].map((assignment) => (
            <div key={assignment.title} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{assignment.title}</h4>
                  <p className="text-sm text-gray-600">Completed: {assignment.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-indigo-600">{assignment.avgScore}% avg</p>
                  <p className="text-sm text-gray-600">{assignment.submissions} submissions</p>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200 transition">
                  View Details
                </button>
                <button className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200 transition">
                  Download Reports
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Pending Assignments</h3>
            <Calendar className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="text-3xl font-bold text-indigo-600">12</div>
          <p className="text-gray-600">Due this week</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Active Students</h3>
            <Users className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="text-3xl font-bold text-indigo-600">156</div>
          <p className="text-gray-600">Across all classes</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Hours Saved</h3>
            <Clock className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="text-3xl font-bold text-indigo-600">24.5</div>
          <p className="text-gray-600">This month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Recent Submissions</h3>
            <button className="text-sm text-indigo-600 hover:text-indigo-700">View All</button>
          </div>
          {[
            { name: 'John Doe', assignment: 'Mathematics Quiz #3', time: '2 hours ago', score: 92 },
            { name: 'Alice Smith', assignment: 'Science Report', time: '4 hours ago', score: 88 },
            { name: 'Bob Johnson', assignment: 'English Essay', time: '6 hours ago', score: 95 },
          ].map((submission, index) => (
            <div key={index} className="border-b border-gray-200 py-4 last:border-0">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{submission.assignment}</p>
                  <p className="text-sm text-gray-600">by {submission.name} • {submission.time}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-semibold text-green-600">{submission.score}%</span>
                  <button className="ml-4 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-200 transition">
                    Review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">AI Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center mb-2">
                <Award className="h-5 w-5 text-green-600 mr-2" />
                <p className="font-semibold text-green-800">Performance Improvement</p>
              </div>
              <p className="text-green-700">85% of students show improvement in recent assignments</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center mb-2">
                <BarChart className="h-5 w-5 text-yellow-600 mr-2" />
                <p className="font-semibold text-yellow-800">Learning Gap Identified</p>
              </div>
              <p className="text-yellow-700">Consider reviewing Chapter 5 - multiple students struggling</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-2">
                <Sparkles className="h-5 w-5 text-blue-600 mr-2" />
                <p className="font-semibold text-blue-800">Advanced Learning Pattern</p>
              </div>
              <p className="text-blue-700">New learning patterns detected in advanced group</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAuthenticatedContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {activeTab === 'dashboard' && renderDashboard()}
      {activeTab === 'assignments' && renderAssignments()}
      {activeTab === 'analytics' && renderAnalytics()}
    </div>
  );

  const renderLandingPage = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Transform Teaching with AI-Powered Assistance
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Automate grading, provide personalized feedback, and enhance learning outcomes
          for every student in your classroom.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon={<FileCheck className="h-8 w-8 text-indigo-600" />}
          title="Automated Grading"
          description="Save time with AI-powered assignment grading that provides consistent and accurate results."
        />
        <FeatureCard
          icon={<Sparkles className="h-8 w-8 text-indigo-600" />}
          title="Smart Feedback"
          description="Generate detailed, personalized feedback that helps students understand and improve."
        />
        <FeatureCard
          icon={<Users className="h-8 w-8 text-indigo-600" />}
          title="Student Analytics"
          description="Track progress and identify areas where students need additional support."
        />
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Teaching?
        </h2>
        <p className="text-gray-600 mb-6">
          Join thousands of educators using EduAssist AI to provide better feedback
          and support for their students.
        </p>
        <button 
          onClick={() => setShowLoginModal(true)}
          className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition inline-flex items-center"
        >
          Get Started Free
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EduAssist AI</span>
              
              {isAuthenticated && (
                <div className="ml-8 flex space-x-4">
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === 'dashboard'
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={() => setActiveTab('assignments')}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === 'assignments'
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Assignments
                  </button>
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === 'analytics'
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Analytics
                  </button>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <button className="text-gray-600 hover:text-gray-900">
                    <Settings className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <LogOut className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {isAuthenticated ? renderAuthenticatedContent() : renderLandingPage()}

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => setShowLoginModal(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              <span className="ml-2 text-gray-600">© 2025 EduAssist AI</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Features</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;