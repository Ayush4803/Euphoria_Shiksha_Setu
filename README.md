# Shiksha Setu

**Shiksha Setu** is a platform for book donation and fund donation aimed at supporting education. Users can **donate books**, **donate funds**, and **receive books**. The platform integrates **Razorpay** for seamless payment processing.

---

## Features

- **Donate Books**: Users can contribute books to the NGO.
- **Donate Funds**: Users can make monetary donations via **Razorpay**.
- **Get Books**: Users can request books donated by others.
- **Payment Integration**: Razorpay API integration for secure payments.
- **User Authentication**: Login and registration for users.
- **Responsive UI**: Mobile-friendly interface with clean navigation.
- **Search & Filter**: Find books easily using search and category filters.

---

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS  
- **Backend**: Node.js, Express  
- **Database**: MongoDB  
- **Payment Gateway**: Razorpay  

---

## Pages / Components

- **Home**: Overview and navigation  
- **Donate Book**: Form to donate books  
- **Donate Fund**: Payment page integrated with Razorpay  
- **Get Book**: Browse available books and request  
- **About Us**: Information about Shiksha Setu  
- **Contact Us**: Contact form for inquiries  
- **Cart**: Manage book selections (if needed)  
- **Login / Signup**: User authentication  

---

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd shiksha-setu
Install dependencies

npm install


Set environment variables
Create a .env file:


RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-key-secret>


Run the project

npm run dev


Register or login as a user.

Navigate to Donate Book or Donate Fund to contribute.

Use the Get Book page to browse or request books.

For payments, use Razorpay test cards in Test Mode.

Razorpay Test Cards
Card Number	Expiry	CVV	Notes
4111 1111 1111 1111	Any future date	111	Visa, success
5454 5454 5454 5454	Any future date	111	Mastercard, success
4000 0000 0000 0002	Any future date	111	Visa, failure
5200 0000 0000 0007	Any future date	111	Mastercard, failure
Contributing

Fork the repository.

Create a new branch: git checkout -b feature/your-feature.

Commit your changes: git commit -m "Add feature".

Push to the branch: git push origin feature/your-feature.

Open a Pull Request.

License

This project is licensed under the MIT License.

Contact

Project Name: Shiksha Setu

Purpose: Book donation NGO platform

Email / Contact: <your-email>

