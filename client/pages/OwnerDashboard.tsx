import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Trash2, MessageSquare, CheckCircle, Clock, Eye, LogOut } from "lucide-react";

interface Message {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  status: "new" | "read" | "replied";
  notes: string;
  createdAt: string;
}

export default function OwnerDashboard() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [notes, setNotes] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "new" | "read" | "replied">("all");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    fetchMessages();
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/messages", {
        headers: {
          "x-owner-pin": pin,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages || []);
      } else {
        alert("Failed to fetch messages");
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      alert("Error fetching messages");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPin("");
    setMessages([]);
    setSelectedMessage(null);
  };

  const handleStatusChange = async (messageId: string, newStatus: "new" | "read" | "replied") => {
    try {
      const response = await fetch(`/api/messages/${messageId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-owner-pin": pin,
        },
        body: JSON.stringify({
          status: newStatus,
          notes: selectedMessage?._id === messageId ? notes : undefined,
        }),
      });

      if (response.ok) {
        fetchMessages();
        if (selectedMessage?._id === messageId) {
          setSelectedMessage(null);
        }
      }
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  const handleDeleteMessage = async (messageId: string) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    try {
      const response = await fetch(`/api/messages/${messageId}`, {
        method: "DELETE",
        headers: {
          "x-owner-pin": pin,
        },
      });

      if (response.ok) {
        fetchMessages();
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleAddNotes = async (messageId: string) => {
    await handleStatusChange(messageId, selectedMessage?.status || "read");
  };

  const filteredMessages = messages.filter(
    (m) => filterStatus === "all" || m.status === filterStatus
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border-2 border-green-500">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Owner Dashboard</h1>
            <p className="text-gray-600">Manage contact messages</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Enter PIN</label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter your PIN"
                className="w-full px-4 py-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-lg tracking-widest"
                maxLength={6}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-bold hover:from-green-600 hover:to-green-700 transition-all text-lg"
            >
              Login
            </button>
          </form>

          <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-gray-600 text-center">
              📧 Owner-only area. All contact form submissions appear here.
            </p>
          </div>

          <Link to="/" className="block text-center mt-6 text-green-600 hover:text-green-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <div className="bg-white border-b-2 border-green-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold">
              📧
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Contact Messages</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 border-l-4 border-red-500 shadow-lg">
                <p className="text-gray-600 text-sm font-semibold">New</p>
                <p className="text-3xl font-bold text-red-600">
                  {messages.filter((m) => m.status === "new").length}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border-l-4 border-yellow-500 shadow-lg">
                <p className="text-gray-600 text-sm font-semibold">Read</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {messages.filter((m) => m.status === "read").length}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border-l-4 border-green-500 shadow-lg">
                <p className="text-gray-600 text-sm font-semibold">Replied</p>
                <p className="text-3xl font-bold text-green-600">
                  {messages.filter((m) => m.status === "replied").length}
                </p>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {(["all", "new", "read", "replied"] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    filterStatus === status
                      ? "bg-green-500 text-white"
                      : "bg-white text-gray-700 border-2 border-green-200 hover:border-green-500"
                  }`}
                >
                  {status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>

            {/* Messages List */}
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 font-semibold">Loading messages...</p>
                </div>
              ) : filteredMessages.length === 0 ? (
                <div className="bg-white rounded-xl p-12 text-center border-2 border-green-200">
                  <MessageSquare className="mx-auto text-green-300 mb-4" size={48} />
                  <p className="text-gray-600 font-semibold">No messages yet</p>
                </div>
              ) : (
                filteredMessages.map((message) => (
                  <button
                    key={message._id}
                    onClick={() => {
                      setSelectedMessage(message);
                      setNotes(message.notes || "");
                    }}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      selectedMessage?._id === message._id
                        ? "bg-green-50 border-green-500 shadow-lg"
                        : "bg-white border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-gray-800 truncate">{message.name}</h3>
                          <span
                            className={`px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap ${
                              message.status === "new"
                                ? "bg-red-100 text-red-700"
                                : message.status === "read"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {message.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{message.email}</p>
                        <p className="text-sm text-gray-500 truncate mt-1">{message.message.substring(0, 100)}...</p>
                        <p className="text-xs text-gray-400 mt-2">
                          {new Date(message.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <Eye className="text-gray-400" size={20} />
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Message Details */}
          <div className="lg:col-span-1">
            {selectedMessage ? (
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 sticky top-20">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Message Details</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">Name</p>
                    <p className="text-gray-800 font-semibold">{selectedMessage.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">Email</p>
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className="text-green-600 hover:text-green-700 font-semibold break-all"
                    >
                      {selectedMessage.email}
                    </a>
                  </div>
                  {selectedMessage.phone && (
                    <div>
                      <p className="text-gray-600 text-sm font-semibold">Phone</p>
                      <a
                        href={`tel:${selectedMessage.phone}`}
                        className="text-green-600 hover:text-green-700 font-semibold"
                      >
                        {selectedMessage.phone}
                      </a>
                    </div>
                  )}
                  {selectedMessage.company && (
                    <div>
                      <p className="text-gray-600 text-sm font-semibold">Company</p>
                      <p className="text-gray-800">{selectedMessage.company}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">Service</p>
                    <p className="text-gray-800 capitalize">{selectedMessage.service.replace(/-/g, " ")}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">Date</p>
                    <p className="text-gray-800">{new Date(selectedMessage.createdAt).toLocaleString()}</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-200">
                  <p className="text-gray-600 text-sm font-semibold mb-2">Message</p>
                  <p className="text-gray-800 text-sm leading-relaxed">{selectedMessage.message}</p>
                </div>

                {/* Status Update */}
                <div className="mb-6">
                  <p className="text-gray-600 text-sm font-semibold mb-3">Status</p>
                  <div className="grid grid-cols-3 gap-2">
                    {(["new", "read", "replied"] as const).map((status) => (
                      <button
                        key={status}
                        onClick={() => handleStatusChange(selectedMessage._id, status)}
                        className={`py-2 px-3 rounded-lg font-bold text-sm transition-all ${
                          selectedMessage.status === status
                            ? status === "new"
                              ? "bg-red-500 text-white"
                              : status === "read"
                              ? "bg-yellow-500 text-white"
                              : "bg-green-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {status === "new" ? (
                          <Clock size={16} className="inline mr-1" />
                        ) : status === "read" ? (
                          <Eye size={16} className="inline mr-1" />
                        ) : (
                          <CheckCircle size={16} className="inline mr-1" />
                        )}
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-6">
                  <label className="text-gray-600 text-sm font-semibold block mb-2">Add Notes</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add internal notes about this message..."
                    className="w-full p-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-sm"
                    rows={4}
                  />
                  <button
                    onClick={() => handleAddNotes(selectedMessage._id)}
                    className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-bold transition-colors"
                  >
                    Save Notes
                  </button>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteMessage(selectedMessage._id)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <Trash2 size={20} />
                  Delete Message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 text-center">
                <p className="text-gray-600 font-semibold">Select a message to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
