import React, { useState } from "react";
import { jsPDF } from "jspdf";

const DonateFunds = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [receipt, setReceipt] = useState(null);

  // Load Razorpay checkout script
  const loadScript = (src) =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const loadRazorpay = async () => {
    const numericAmount = Number(amount);
    if (!numericAmount || isNaN(numericAmount) || numericAmount < 1) {
      alert("Please enter a valid amount");
      return;
    }

    setLoading(true);

    // Load Razorpay SDK
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res || !window.Razorpay) {
      alert("Failed to load Razorpay SDK. Check your internet connection.");
      setLoading(false);
      return;
    }

    // Razorpay options
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: numericAmount * 100, // convert to paise
      currency: "INR",
      name: "Shiksha Setu",
      description: "Support education with your donation",
      handler: function (response) {
        setReceipt({
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id || "N/A",
          amount: numericAmount,
          date: new Date().toLocaleString(),
        });
        setAmount("");
        setLoading(false);
      },
      theme: { color: "#22c55e" },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      alert(`Payment failed: ${response.error.description}`);
      setLoading(false);
    });

    rzp.open();
  };

  // Download PDF receipt
  const downloadPDF = () => {
    if (!receipt) return;

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Shiksha Setu - Razorpay Donation Receipt", 20, 20);

    doc.setFontSize(12);
    doc.text("Receipt Details:", 20, 35);
    doc.text(`Payment ID: ${receipt.paymentId}`, 20, 45);
    doc.text(`Order ID: ${receipt.orderId}`, 20, 55);
    doc.text(`Amount Paid: ₹${receipt.amount}`, 20, 65);
    doc.text(`Payment Date: ${receipt.date}`, 20, 75);
    doc.text("Status: Success ✅", 20, 85);

    doc.setFontSize(10);
    doc.text(
      "This is an electronically generated receipt from Razorpay. For verification, please visit Razorpay dashboard.",
      20,
      100
    );

    doc.save(`Razorpay_Receipt_${receipt.paymentId}.pdf`);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 bg-green-100 min-h-[70vh]">
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 text-center">
        Donate Funds
      </h2>

      {!receipt ? (
        <>
          <input
            type="number"
            placeholder="Enter amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full max-w-xs border rounded-lg px-4 py-2 mb-4 text-center focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={loadRazorpay}
            disabled={loading}
            className={`px-6 py-3 rounded-xl shadow text-white transition w-full max-w-xs ${
              loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Processing..." : "Donate Now"}
          </button>
        </>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md text-center">
          <h3 className="text-xl font-bold text-green-700 mb-4">🎉 Payment Successful</h3>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Payment ID:</span> {receipt.paymentId}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Order ID:</span> {receipt.orderId}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Amount:</span> ₹{receipt.amount}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Date:</span> {receipt.date}
          </p>

          <button
            onClick={downloadPDF}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mr-2"
          >
            Download Receipt PDF
          </button>

          <button
            onClick={() => setReceipt(null)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Make Another Donation
          </button>
        </div>
      )}
    </div>
  );
};

export default DonateFunds;
