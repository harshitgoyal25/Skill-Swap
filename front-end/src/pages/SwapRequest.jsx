import React from "react";
import NavBarSwapRequest from "../components/NavBarSwapRequest";

const requests = [
  {
    id: 1,
    name: "Marc Demo",
    profilePic: "M",
    skillsOffered: ["JavaScript"],
    skillsWanted: ["Photoshop"],
    status: "Pending",
    rating: 3.9,
  },
  {
    id: 2,
    name: "John Doe",
    profilePic: "J",
    skillsOffered: ["Python"],
    skillsWanted: ["React"],
    status: "Rejected",
    rating: 3.9,
  },
];

const SwapRequest = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <NavBarSwapRequest />

      <div className="pt-24 px-4 max-w-7xl mx-auto">
        {/* Filters Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <select className="w-full md:w-48 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>Pending</option>
            <option>Accepted</option>
            <option>Rejected</option>
          </select>

          <div className="flex-1">
            <input
              type="text"
              placeholder="Search requests..."
              className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {requests.map((request) => (
            <div key={request.id} className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex-shrink-0 flex items-center justify-center text-2xl font-bold text-white">
                  {request.profilePic}
                </div>

                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {request.name}
                      </h3>
                      <div className="flex items-center mt-1">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-gray-600">{request.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          request.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {request.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <span className="text-teal-600 text-sm font-medium">
                        Skills Offered →
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {request.skillsOffered.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-sm rounded-full bg-teal-50 border border-teal-200 text-teal-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-blue-600 text-sm font-medium">
                        Skills Wanted →
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {request.skillsWanted.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-sm rounded-full bg-blue-50 border border-blue-200 text-blue-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {request.status === "Pending" && (
                    <div className="flex justify-end gap-3 mt-4">
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Accept
                      </button>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 py-8">
          <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 transition-colors">
            ←
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-lg transition-colors ${
                page === 1
                  ? "bg-teal-600 text-white"
                  : "bg-white border border-gray-200 hover:bg-gray-50 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 transition-colors">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwapRequest;
