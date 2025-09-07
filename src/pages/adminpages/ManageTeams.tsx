// src/pages/adminpages/ManageTeams.tsx
import React from "react";

const ManageTeams = () => {
  return (
    <div className="text-gray-800 dark:text-gray-200 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Teams</h2>

      {/* Placeholder for no teams */}
      <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded mb-6">
        ⚠️ No teams created yet. You can start building your organization structure here.
      </div>

      {/* Static team preview placeholder (if needed later) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 opacity-60">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="border border-gray-300 dark:border-gray-700 rounded p-4 bg-white dark:bg-gray-800"
          >
            <h3 className="font-semibold text-lg">Team #{i}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This is a placeholder for a team. Teams will be listed here once created.
            </p>
          </div>
        ))}
      </div>

      {/* Add Team Button (currently disabled) */}
      <div className="mt-8">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled
        >
          + Add New Team (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export default ManageTeams;
