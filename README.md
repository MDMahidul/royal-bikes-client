# Royal Bikes - Frontend

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [State Management](#state-management)
- [Custom Hooks](#custom-hooks)
- [Util Functions](#util-functions)
- [Error Handling](#error-handling)
- [Live Link](#live-link)

## Introduction

This is the frontend code for the Bike Rental System, a platform where users can book bikes, apply coupons, make payments, and manage their rentals. Admins and Super Admins can view all bookings and manage bike rentals. The project is built using React, Redux Toolkit, and TypeScript.

## Tech Stack

- **React**
- **React Redux**
- **Redux Toolkit**
- **React Router**
- **React Icons**
- **React Hook Forms**
- **React Helmet**
- **React Spinners**
- **TypeScript**
- **Tailwind CSS**
- **React Flowbite**
- **Shadcn**
- **Sonner**
- **Swipper JS**
- **Framer Motion**
- **JWT Authentication**

## Features
### User
  - **Bike Booking:** Users can browse available bikes and book them by paying a booking fee.
- **Payment:** Users can make payments using a third-party payment gateway.
- **Coupon Application:** Users can apply discount coupons to their bookings.
- **Booking Confirmation:** Confirmation dialog to ensure the user wants to proceed with booking.
- **Login/Signup:** Users must be logged in to make bookings.
### Admin/Superadmin
  - **Bike Management:** Admin can add,edit,delete and get bikes data.
  - **User Management:** Admin can get all users data. Can make any user admin. Only super admin can change admin role to user. Admin can delete a user.
- **Coupon Management:** Admin can add,edit,delete and get coupon data.
- **Booking Management:** Admin can see all the rentals info and when the user return the bike admin calculate total cost based on the start and return time.

### Additional Features
- **Role-Based Access:** Different roles for user, admin, and super admin, with restricted routes.
- **Toast Notifications:** User feedback on actions like payments, coupon applications, and login.


## Installation

#### 1. Clone the repository:

   ```bash
   git clone https://github.com/MDMahidul/royal-bikes-client
   cd royal-bikes-client
   ```
#### 2. Install dependencies:
```bash 
npm install
```
### Usage
#### Configuration
Create a .env.local file in the root directory and add the following environment variables:
```bash 
VITE_IMGBB_KEY="imgbb key"
```
#### Running the Development Server:
```bash
npm start
```
#### Building for Production
```bash
npm run build
```
- **Booking a Bike:** Click "Book Now" on the available bike listings. A confirmation dialog will appear before proceeding with payment.
- **Payments:** After confirming the booking, you will be redirected to the payment page to complete your transaction.
- **Admin Dashboard:** Admin users can view all rentals and return bikes through their dashboard.

## State Management
### Redux Slices:
  
- **Auth Slice**
    - **setUser**: Save logged in user data to state
    - **logOut**: Remove user info from state 
### Redux toolkit:
- **Auth management api**
    - **signin**: Sign in user to the site
    - **signup**: Register in user to the site
    - **forgetpassword**: To get reset password link
    - **resetpassword**: Reset password 
- **Bikes management api**
    - **addBike**: Add bike to api
    - **getAllBikes**: Get all the bikes data from api
    - **getAvailableBikes**: Get all the available bikes data from api
    - **getSingleBike**: Get single bike data
    - **updateBike**: update bike's data
    - **deleteBike**: Soft Delete Bike from api
- **User management api**
    - **getAllUsers**: Get all user data
    - **getUserProfie**: Get user profile data
    - **updateUserProfile**: Update user profile data
    - **updateUserRole**: Update user role(admin/superadmin)
    - **deleteUser**: delete user(admin/superadmin)
- **Booking management api**
    - **addBooking**: Book a bike by paying advance(user)
    - **getAllBookings**: Get all the Bookings data from api(admin)
    - **getMyBookings**: Get individual user's all booking data. 
    - **getSingleBookings**: Get user's single booking data.
    - **applyCoupon**: Apply coupon to get discount 
    - **makePayment**: Make the final cost
    - **returnBike**: Return bike and calculate total cost(admin)

- **Blog management api**
    - **getAllCoupons**: Get all the coupons data from api(admin)
    - **getActiveCoupon**: Get active coupon data
    - **addCoupon**: Add coupon to api(admin)
    - **updateCoupon**: update coupon's data(admin)
    - **deleteCoupon**: Delete coupon from db
## Custom Hooks  

#### useUserProfile
 - A custom hook this will get user token and user data according to the user authentication.
        

## Util Functions
#### imageUp
- To upload image to imgbb and get the url
#### formatDate
- To format date get from the db time stapm
- Convert data to local date format
#### verifyToken
- To verify authentication jwt token and decode the token to get user data.

## Error Handling
 - Error handling is managed through toast notifications using sonner.
 - Added an error element page 



## Live Link
Click here: [Royal Bikes](https://royal-bikes-client.vercel.app/)
            
        
        