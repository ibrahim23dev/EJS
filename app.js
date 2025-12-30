const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
// Ensure your CSS folder is accessible
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

app.get("/invoice", (req, res) => {
    // This object MUST contain every variable used in invoice.ejs
    const invoiceData = {
        invoiceNo: "INV-2025-001",
        bookingDate: "30 Dec 2028",
        bookingRef: "NH-88299",
        pnr: "Z8X9QP",
        issuedBy: "Admin - Tanvir Ahmed", 
        ticketStatus: "Issued",
        contact_name: "John Doe",
        contact_email: "john@example.com",
        contact_phone: "+8801700000000",
        
        agency: {
            name: "Global Travels",
            code: "GT-992",
            address: "Banani, Dhaka",
            contactPerson: "Rahim Uddin",
            email: "agency@example.com",
            phone: "01812345678"
        },
        
        passengers: [
            { name: "MS RAHMAN", type: "ADT", gender: "Male", dob: "1990-05-10", passport: "A1234567", nationality: "Bangladeshi" },
            { name: "MRS RAHMAN", type: "ADT", gender: "Female", dob: "1992-08-22", passport: "A9876543", nationality: "Bangladeshi" }
        ],
        
        price: {
            baseFare: 45000,
            taxes: 5000,
            grossFare: 50000,
            commissionAmount: 500,
            markup: 1000,
            discount: 200,
            totalAmount: 50300
        },
        amountInWords: "Fifty Thousand Four Hundred",
        authorizedSignatory: "Tanvir Ahmed",
        companyStamp: "Naria Holidays Ltd.",
        currency: "BDT",
        refundableStatus: "Refundable",
        fareRulesSummary: "Cancellation fee 2000 BDT before 24 hours.",
        remarks: "Please report at the airport 3 hours before departure."
    };

    res.render("invoice", invoiceData);
});

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000/invoice");
});