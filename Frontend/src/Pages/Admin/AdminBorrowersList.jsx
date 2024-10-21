import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminBorrowersList = () => {
  const [borrowers, setBorrowers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in as admin
    const isAdmin = localStorage.getItem("isAdmin");

    if (!isAdmin) {
      navigate("/admin/login"); // Redirect to login page if not an admin
    } else {
      // Fetch borrower data from localStorage
      const savedBorrowers = JSON.parse(localStorage.getItem("borrowers")) || [];
      setBorrowers(savedBorrowers);
    }
  }, [navigate]);

  const handleDelete = (index) => {
    const updatedBorrowers = borrowers.filter((_, i) => i !== index);
    setBorrowers(updatedBorrowers);
    localStorage.setItem("borrowers", JSON.stringify(updatedBorrowers));
  };

  return (
    <div className="p-8  mx-auto rounded-lg h-screen shadow-md">
      {/* <h2 className="text-3xl font-semibold mb-6 text-center">Borrowers List</h2> */}

      {borrowers.length === 0 ? (
       <div className="flex items-center h-screen justify-center">
         <p className="text-center text-lg">No one has borrowed a book yet.</p>
       </div>
      ) : (
        <table className="w-full mt-32 table-auto bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Book Title</th>
              <th className="px-4 py-2">Borrow Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {borrowers.map((borrower, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{borrower.name}</td>
                <td className="px-4 py-2">{borrower.email}</td>
                <td className="px-4 py-2">{borrower.bookTitle}</td>
                <td className="px-4 py-2">{borrower.borrowDate}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminBorrowersList;
