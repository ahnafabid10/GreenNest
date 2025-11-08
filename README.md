# 🍃 GreenNest – Indoor Plant Care & Store  

### **Assignment Category:** Assignment-09_category_daisy  

🌿 **Live Link:** [Your Live Site Link Here]  
💻 **GitHub Repository:** [Your GitHub Repo Link Here]  

---

## 🌱 Project Overview  

**GreenNest** is a single-page web application built for plant lovers who want to nurture and decorate their homes with beautiful indoor plants.  
The platform allows users to explore plant care guides, browse and buy plants, and book expert consultations — ensuring a greener and healthier lifestyle for everyone.  

---

## 🎯 Project Goals  

- Build a **responsive and elegant single-page application (SPA)**.  
- Implement **secure Firebase authentication** (Signup, Login, Google Sign-In, Forgot Password).  
- Fetch and display **plant data dynamically from JSON**.  
- Create **protected routes** for authenticated users.  
- Maintain a **modern, nature-inspired design** that feels calming and fresh.  

---

## 🧩 Core Features  

### **1. Layout Structure**  

#### 🌿 Navbar  
- Logo: **GreenNest**  
- Navigation Links: Home | Plants | My Profile  
- Conditional Rendering:  
  - ✅ Logged in → Show user avatar, display name, and Logout.  
  - 🚫 Logged out → Show Login and Register buttons.  

#### 🌸 Footer  
- Quick Links: About | Contact | Privacy Policy  
- Social Media Icons: Instagram | Facebook | Pinterest  
- Footer Text: `© 2025 GreenNest. All rights reserved.`  

✅ Navbar & Footer are always visible on all routes.  
✅ No reload or crash during navigation.  

---

### **2. JSON Data Setup**  

A `plants.json` file contains at least **6 indoor plant objects** with the following fields:  

```json
{
  "plantId": 1,
  "plantName": "Snake Plant",
  "category": "Air Purifier",
  "price": 18,
  "rating": 4.8,
  "availableStock": 10,
  "careLevel": "Easy",
  "description": "A hardy plant that purifies indoor air and thrives in low light.",
  "image": "https://i.postimg.cc/example1.png",
  "providerName": "UrbanGreen Studio",
  "sellCount": 250
}


3. Home Page Sections
🌿 Hero Section

Swiper.js or Framer Motion slider with plant-themed visuals and captions.

🌸 Top Rated Indoor Plants

Dynamically displayed from JSON.

Each card includes image, name, price, rating, and “View Details” button.

🌞 Plant Care Tips

Static/fake JSON data about watering, sunlight, and fertilizing tips.

👩‍🌾 Meet Our Green Experts

3–4 plant experts with photo, name, and specialization.

🌼 Extra Creative Section

“Plant of the Week” — featuring a highlighted plant each week.
(Bonus for creativity!)

4. Plant Details Page (Protected Route)

🔒 Authentication Required
If user isn’t logged in → redirect to Login page, then return to the intended details page after login.

Includes:

Large plant image, name, description, price, rating, stock info.

Book Consultation Form:

Fields: Name, Email

Button: “Book Now” → shows success toast + clears form.

5. Authentication Features (Firebase)
🔐 Login Page

Fields: Email, Password

Options: Forgot Password | Login Button

Navigation:

On success → navigate to desired route/home.

On failure → show toast/error message.

Extra:

Link to Signup Page

Google Sign-In button → login via Google, then redirect home.

🪴 Signup Page

Fields: Name, Email, Photo URL, Password

Validation Rules:

✅ Must contain one uppercase letter

✅ Must contain one lowercase letter

✅ Must be at least 6 characters long

Invalid passwords show an inline error message and block registration.

On success → navigate to Home page.

Extra:

Link to Login Page

Google Sign-In option → redirect to Home page.

⚠️ Note: Email verification not implemented (per assignment guideline).

6. My Profile Page

Displays the current user’s:

Name

Email

Profile Photo

Includes an Update Profile button — uses updateProfile() to update displayName and photoURL in real-time.

💡 Bonus & Creative Additions

Password toggle (Show/Hide) on both Login & Signup.

“Forgot Password” with Gmail password reset link.

Smooth animations using Framer Motion.

Additional section: “Plant of the Week” or “Best Sellers”.

🧪 Challenges Overcome

Implemented updateProfile() for real-time user updates.

Managed protected routes & redirection after login.

Password validation + custom error messages.

Integrated Swiper.js for responsive slider layout.


| Category          | Tools / Libraries                             |
| ----------------- | --------------------------------------------- |
| **Frontend**      | React.js, React Router, Tailwind CSS, DaisyUI |
| **Animations**    | Framer Motion / Swiper.js                     |
| **Backend**       | Firebase Authentication                       |
| **Data**          | Local JSON (plants.json)                      |
| **Icons**         | React Icons                                   |
| **Notifications** | React Hot Toast / SweetAlert                  |
