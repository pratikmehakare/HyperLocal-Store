# Hyperlocal Store App - Assignment

## Overview
Build a full-stack web application with the following capabilities:

- Users should be able to view a list of stores nearby.
- Users can select a store and view the fruits/vegetables available.
- Users can add products to their cart.
- Users can place an order by submitting their name and confirming their cart.


## Requirements
- **Backend**: Node.js with Express.js and MongoDB.
- **Frontend**: React.js 
- **Database**: MongoDB 

## Features
- List all stores on Home Page.
- View products for a store.
- Add products to Cart.
- Checkout and place an order.

## Folder Structure
- `backend/` (Express.js server)
- `frontend/` (React.js app)
- `sample-data/` (Sample JSON data for MongoDB)


## Wireframes

### Home Page
- List of stores (clickable)

-------------------------------------------------
| Hyperlocal Stores                             |
-------------------------------------------------
| [ Fresh Mart ]  (MG Road)                     |
| [ Organic Hub ] (Indiranagar)                 |
| [ Local Greens ] (Koramangala)                |
-------------------------------------------------


### Store Page
- List of products with "Add to Cart" button

-------------------------------------------------
| Fresh Mart - Products                         |
-------------------------------------------------
| Apple     ₹150    [ Add to Cart ]             |
| Banana    ₹50     [ Add to Cart ]             |
|                                              |
| [ View Cart ]                                |
-------------------------------------------------


### Cart Page
-------------------------------------------------
| Your Cart                                     |
-------------------------------------------------
| Apple      ₹150   Qty: 1                     |
| Banana     ₹50    Qty: 2                     |
-------------------------------------------------
| Total: ₹250                                  |
-------------------------------------------------
| Name: [__________]                           |
| [ Place Order ]                              |
-------------------------------------------------


### Order Confirmation Page
- Thank you message

-------------------------------------------------
| Thank you, [User Name]!                       |
-------------------------------------------------
| Your order has been placed successfully.      |
| [ Go Back to Home ]                           |
-------------------------------------------------




