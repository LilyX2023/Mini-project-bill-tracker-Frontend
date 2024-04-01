# Seal MINI Project 4

- **Your Name: Rachel Yang** 
- **App Name: Bill Tracker**
- **Description: An app to help users to track their bills (recuring and non-recuring ones). Users will be able to create, update, and delete the bills they are paying for**
- **Github URL: **
- **Deployed Website: **
- **Trello Board: **

## Features
- CRUD Operations: Allows user/manager to create, read, update, and delete their bill payment.
- API Integration: Communicates with the backend Django server to fetch and update bill data.

##### Technologies Used
Backend: Django
Frontend: React, Vite
Database: SQLite / PostgreSQL
Styling: CSS

## Route Map

Below should be a table listing the different routes in your app and their purposes.

| Route Name | Endpoint | Method | Description |
|------------|----------|--------|-------------|
| Index | /bills | GET | Renders all the bills has been logged to the main page|
| New | /bills/add | GET | Renders a form for the user to enter newly received bill|
| Create bill | /bill | POST | Displays the newly added bills on the main page|
| Edit bill | /bill/:id/edit | GET | Renders a form for editing the existing bill|
| Update bill | /bill/:id | PUT | Updates the existing bills|
| Delete bill | /bill/:id | DELETE | Deletes the specific job bill|


## Design Mockups

![Desktop Design Mockup](https://i.imgur.com/bCr7jVY.png)
![Desktop Design Mockup](https://i.imgur.com/9qW19Xx.png)

## React Component Hierarchy
![Desktop Design Mockup](https://i.imgur.com/wbsffPT.png)