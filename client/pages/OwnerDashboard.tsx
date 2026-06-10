import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash2, MessageSquare, CheckCircle, Clock, Eye, LogOut, X } from "lucide-react";

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

const OWNER_PIN = "272335";

export default function OwnerDashboard() {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [notes, setNotes] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "new" | "read" | "replied">("all");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === OWNER_PIN) {
      setIsAuthenticated(true);
      setError(null);
      fetchMessages();
    } else {
      setError("Incorrect PIN. Please try again.");
    }
  };

  const fetchMessages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/messages", {
        headers: { "x-owner-pin": OWNER_PIN },
      });
      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages || []);
      } else {
        setError("Failed to load messages.");
      }
    } catch (err) {
      setError("Network error — could not reach the server.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPin("");
    setMessages([]);
    setSelectedMessage(null);
    setError(null);
  };

  const handleStatusChange = async (messageId: string, newStatus: "new" | "read" | "replied") => {
    try {
      const response = await fetch(`/api/messages/${messageId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-owner-pin": OWNER_PIN },
        body: JSON.stringify({ status: newStatus, notes: selectedMessage?._id === messageId ? notes : undefined }),
      });
      if (response.ok) {
        await fetchMessages();
        setSelectedMessage((prev) => prev?._id === messageId ? { ...prev, status: newStatus } : prev);
      }
    } catch (err) {
      console.error("Error updating message:", err);
    }
  };

  const handleSaveNotes = async (messageId: string) => {
    try {
      const response = await fetch(`/api/messages/${messageId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-owner-pin": OWNER_PIN },
        body: JSON.stringify({ status: selectedMessage?.status, notes }),
      });
      if (response.ok) {
        await fetchMessages();
        setSelectedMessage((prev) => prev?._id === messageId ? { ...prev, notes } : prev);
      }
    } catch (err) {
      console.error("Error saving notes:", err);
    }
  };

  const handleDeleteMessage = async (messageId: string) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      const response = await fetch(`/api/messages/${messageId}`, {
        method: "DELETE",
        headers: { "x-owner-pin": OWNER_PIN },
      });
      if (response.ok) {
        await fetchMessages();
        setSelectedMessage(null);
      }
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  const filteredMessages = messages.filter(
    (m) => filterStatus === "all" || m.status === filterStatus
  );

  // ── Login Screen ────────────────────────────────────────────────────────────
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
            {error && (
              <p className="text-red-600 text-sm font-semibold text-center">{error}</p>
            )}
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

  // ── Dashboard ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <div className="bg-white border-b-2 border-green-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
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
        {error && (
          <div className="mb-6 bg-red-50 border-2 border-red-300 rounded-xl p-4 text-red-700 font-semibold text-center">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Messages List */}
          <div className="lg:col-span-2">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 border-l-4 border-red-500 shadow-lg">
                <p className="text-gray-600 text-sm font-semibold">New</p>
                <p className="text-3xl font-bold text-red-600">{messages.filter((m) => m.status === "new").length}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border-l-4 border-yellow-500 shadow-lg">
                <p className="text-gray-600 text-sm font-semibold">Read</p>
                <p className="text-3xl font-bold text-yellow-600">{messages.filter((m) => m.status === "read").length}</p>
              </div>
              <div className="bg-white rounded-xl p-4 border-l-4 border-green-500 shadow-lg">
                <p className="text-gray-600 text-sm font-semibold">Replied</p>
                <p className="text-3xl font-bold text-green-600">{messages.filter((m) => m.status === "replied").length}</p>
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

            {/* Messages */}
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-12 bg-white rounded-xl">
                  <p className="text-gray-500 font-semibold">Loading messages...</p>
                </div>
              ) : filteredMessages.length === 0 ? (
                <div className="bg-white rounded-xl p-12 text-center border-2 border-green-200">
                  <MessageSquare className="mx-auto text-green-300 mb-4" size={48} />
                  <p className="text-gray-600 font-semibold">
                    {messages.length === 0 ? "No messages yet" : "No messages with this status"}
                  </p>
                </div>
              ) : (
                filteredMessages.map((message) => (
                  <button
                    key={message._id}
                    onClick={() => { setSelectedMessage(message); setNotes(message.notes || ""); }}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      selectedMessage?._id === message._id
                        ? "bg-green-50 border-green-500 shadow-lg"
                        : "bg-white border-gray-200 hover:border-green-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-800 truncate">{message.name}</h3>
                          <span className={`px-2 py-0.5 text-xs font-bold rounded-full whitespace-nowrap ${
                            message.status === "new" ? "bg-red-100 text-red-700"
                            : message.status === "read" ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                          }`}>
                            {message.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{message.email}</p>
                        <p className="text-sm text-gray-500 truncate mt-1">{message.message.substring(0, 80)}...</p>
                        <p className="text-xs text-gray-400 mt-2">{new Date(message.createdAt).toLocaleString()}</p>
                      </div>
                      <Eye className="text-gray-400 flex-shrink-0 mt-1" size={18} />
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-1">
            {selectedMessage ? (
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 sticky top-24">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Message Details</h2>
                  <button onClick={() => setSelectedMessage(null)} className="text-gray-400 hover:text-gray-600">
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-3 mb-5 max-h-60 overflow-y-auto">
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Name</p>
                    <p className="text-gray-800 font-semibold">{selectedMessage.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Email</p>
                    <a href={`mailto:${selectedMessage.email}`} className="text-green-600 hover:text-green-700 font-semibold break-all text-sm">
                      {selectedMessage.email}
                    </a>
                  </div>
                  {selectedMessage.phone && (
                    <div>
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Phone</p>
                      <a href={`tel:${selectedMessage.phone}`} className="text-green-600 hover:text-green-700 font-semibold text-sm">
                        {selectedMessage.phone}
                      </a>
                    </div>
                  )}
                  {selectedMessage.company && (
                    <div>
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Company</p>
                      <p className="text-gray-800 text-sm">{selectedMessage.company}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Service</p>
                    <p className="text-gray-800 capitalize text-sm">{selectedMessage.service.replace(/-/g, " ")}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Date</p>
                    <p className="text-gray-800 text-sm">{new Date(selectedMessage.createdAt).toLocaleString()}</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 mb-5 border border-green-200 max-h-40 overflow-y-auto">
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Message</p>
                  <p className="text-gray-800 text-sm leading-relaxed">{selectedMessage.message}</p>
                </div>

                {/* Status */}
                <div className="mb-5">
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Status</p>
                  <div className="grid grid-cols-3 gap-2">
                    {(["new", "read", "replied"] as const).map((status) => (
                      <button
                        key={status}
                        onClick={() => handleStatusChange(selectedMessage._id, status)}
                        className={`py-2 px-2 rounded-lg font-semibold text-xs transition-all ${
                          selectedMessage.status === status
                            ? status === "new" ? "bg-red-500 text-white"
                              : status === "read" ? "bg-yellow-500 text-white"
                              : "bg-green-500 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {status === "new" ? <Clock size={12} className="inline mr-1" />
                          : status === "read" ? <Eye size={12} className="inline mr-1" />
                          : <CheckCircle size={12} className="inline mr-1" />}
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-5">
                  <label className="text-gray-500 text-xs font-semibold uppercase tracking-wide block mb-2">Notes</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add internal notes..."
                    className="w-full p-3 border-2 border-green-200 rounded-lg focus:outline-none focus:border-green-500 text-sm resize-none"
                    rows={3}
                  />
                  <button
                    onClick={() => handleSaveNotes(selectedMessage._id)}
                    className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-bold transition-colors text-sm"
                  >
                    Save Notes
                  </button>
                </div>

                {/* Delete */}
                <button
                  onClick={() => handleDeleteMessage(selectedMessage._id)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Trash2 size={16} />
                  Delete Message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 text-center sticky top-24">
                <MessageSquare className="mx-auto text-green-200 mb-3" size={40} />
                <p className="text-gray-500 font-semibold">Select a message to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="text-center pb-8">
        <Link to="/" className="text-green-600 hover:text-green-700 font-semibold text-sm">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
