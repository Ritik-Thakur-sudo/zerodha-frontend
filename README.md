# Zerodha Frontend

This repository contains the landing page of the Zerodha clone, built using React.js. It replicates the look and feel of the official  [Zerodha](https://zerodha.com) homepage with a modular structure and modern styling.

## Tech Stack

- React.js (via Create React App)
- Bootstrap 5 (for styling)
- Custom CSS
- React Router (for internal routing)
- Git & GitHub (for version control)

## Folder Structure

frontend/

├── public/
│   ├── font-awesome/
│   ├── media/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt 

├── src/
│   ├── css/
│   ├── landing_page/
│   ├── test/
│   ├── index.css
│   ├── index.js
│   └── setupTests.js

├── .gitignore
├── package-lock.json
└── package.json

## Getting Started

To run this project locally:

- git clone https://github.com/Ritik-Thakur-sudo/zerodha-frontend.git
- cd zerodha-frontend
- npm install
- npm start

## Features
- Almost perfect UI based on the official Zerodha homepage
- Reusable, modular React components
- Layout with Bootstrap 5 and custom css
- Multi-section navigation using React Router
- Unit testing setup with Jest

##  Branch Strategy
This repo follows a feature branch model. Each section/component was developed in its own branch:

- about-section
- dashboard
- home-component
- pricing-section
- product-section
- project-structure
- react-router-setup
- signup
- support-section
- test-using-jest
  
You can explore any feature-specific branch using:
- git checkout branch-name
