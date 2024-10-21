import React, { useState } from "react";

const BorrowBook = () => {
  const [borrowerData, setBorrowerData] = useState({
    name: "",
    email: "",
    bookTitle: "",
    borrowDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBorrowerData({ ...borrowerData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add borrower data to localStorage (could also be sent to a backend API)
    const borrowers = JSON.parse(localStorage.getItem("borrowers")) || [];
    borrowers.push(borrowerData);
    localStorage.setItem("borrowers", JSON.stringify(borrowers));

    // Reset form
    setBorrowerData({ name: "", email: "", bookTitle: "", borrowDate: "" });

    alert("Book borrowed successfully!");
  };

  return (
    <div className="p-8 max-w-md mx-auto h-screen ">
      {/* <h2 className="text-2xl font-semibold my-auto flex items-center justify-center text-center">Borrow a Book</h2> */}
      <div className="flex justify-center flex-col items-center h-screen">
        <form onSubmit={handleSubmit} className="space-y-4 w-96 h-auto p-4 rounded-xl bg-slate-100 border-emerald-400 border-4">
          <div className="flex justify-center">
            <img className="w-24" src="/images/ELogo.png" alt="logo" />
          </div>
          <div>
            <label className="block text-lg font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={borrowerData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={borrowerData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Book Title</label>
            <input
              type="text"
              name="bookTitle"
              value={borrowerData.bookTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium">Borrow Date</label>
            <input
              type="date"
              name="borrowDate"
              value={borrowerData.borrowDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium"
          >
            Borrow Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BorrowBook;
