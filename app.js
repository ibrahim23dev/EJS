const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/profile", (req, res) => {
  res.render("profile", {
    name: "Ibrahim",
    role: "Software Engineer"
  });
});

app.get("/invoice/:id", (req, res) => {
  res.render("invoice", {
    invoiceNo: "INV-2026-0012",
    bookingDate: "15 Jan 2026",
    customer: {
      name: "Md Ibrahim",
      email: "ibrahim@gmail.com",
      phone: "+880 1XXXXXXXXX"
    },
    flight: {
      airline: "Qatar Airways",
      from: "Dhaka (DAC)",
      to: "Rome (FCO)",
      depart: "20 Jan 2026 - 10:30 AM",
      arrive: "20 Jan 2026 - 07:45 PM",
      class: "Economy",
      passengers: 1
    },
    price: {
      base: 65000,
      tax: 8500,
      service: 1500,
      total: 75000
    }
  });
});



app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
