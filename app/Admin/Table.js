"use client";

import React, { useEffect, useState } from "react";

const Table = () => {
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("../api/table");
    const data = await response.json();
    setTableItems(data);
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Error: ID is undefined");
      return;
    }
    try {
      const response = await fetch(`../api/table/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTableItems((prevItems) =>
          prevItems.filter((item) => item.BurgerID !== id)
        );
      } else {
        throw new Error("Failed to delete the item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handlePromote = async (id) => {
    if (!id) {
      console.error("Error: ID is undefined");
      return;
    }
    try {
      const response = await fetch(`../api/table/promote/${id}`, {
        method: "POST",
      });
      if (response.ok) {
        alert("Promotion successful!");
      } else {
        throw new Error("Failed to promote the item");
      }
    } catch (error) {
      console.error("Error promoting item:", error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-white dark:text-black text-xl font-bold sm:text-2xl">
          Burgers Table
        </h3>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-transparent text-white dark:text-black font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Sex</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Password</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="text-white dark:text-black divide-y">
            {tableItems.map((item, index) => {
              return (
                <tr key={item.BurgerID || index}>
                  <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                    {item.Naam}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                    {item.Geslacht}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                    {item.Email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                    {item.Password}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-white dark:text-black">
                    <button
                      onClick={() => handleDelete(item.BurgerID)}
                      className="text-red-500 hover:text-red-700 mr-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handlePromote(item.BurgerID)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Promote
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
