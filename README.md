Chong's Siomai Rice: Website Rehaul and Digital Proposal

I. Project Overview: The Digital Spark

This project serves as a professional proposal for a complete digital overhaul for Chong's Siomai Rice, a beloved local food vendor.

While their culinary quality is undeniably strong, they currently operate primarily through physical stalls and localized social media, lacking a centralized, professional web presence.

The core objective is to launch a modern, Single Page Application (SPA) built with the latest version of React. This will simplify information access, capture the mobile market, and provide a professional digital storefront that is fully mobile-responsive.

II. The Client: Chong's Siomai Rice

A. Background

Chong's Siomai Rice is a popular, small-scale food vendor known for offering affordable, high-quality, and satisfying meals, particularly their namesake siomai and rice combinations. They are deeply rooted in the local community and rely heavily on word-of-mouth.

B. Current Digital State

Since Chong's Siomai Rice is a small, local entity, they do not possess a formal corporate website. Their primary digital presence is limited to social media.

Reference Point: The base for this rehaul proposal is their official Facebook page:

https://www.facebook.com/Chongs.Siomai/

C. Need for Improvement (The Proposal Pitch)

Issue

Solution Provided by the SPA

Lack of Centralization

A dedicated site consolidates the menu, locations, and pricing, eliminating customer confusion and friction.

Limited Brand Credibility

A formal, custom website immediately elevates the brand's perceived value and trustworthiness, signaling readiness for scaling.

Poor User Experience

The SPA provides immediate, structured access to information, replacing the frustrating necessity of scrolling through endless social media feeds.

III. Technical Implementation Details

A. Core Technology

This project is a Single Page Application (SPA) developed using React 19 and styled with Tailwind CSS (as demonstrated in the code) or React Bootstrap. All content is dynamically rendered using self-generated dummy data that adheres to proper JavaScript naming conventions.

B. Component Reusability

Demonstrating component reusability is key for a clean codebase and efficient development. Key standardized components include:

NavBar: Used across all routes for primary navigation and branding consistency.

Footer: Displays contact and copyright information consistently at the bottom of every page.

MenuItemCard: A reusable template designed to display individual menu items (image, name, description, price) by mapping over the menuItems dummy data.

TeamMemberCard: Used on the About page to present team members' details in a standardized layout.

IV. Getting Started (Setup & Scripts)

This project was bootstrapped with Create React App.

Available Scripts

In the project directory, you can run:

npm start:
Runs the app in the development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.

npm test:
Launches the test runner in the interactive watch mode. (See the documentation for more information on running tests).

npm run build:
Builds the app for production to the build folder. The build is minified and optimized, ready to be deployed!

Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Chong's Siomai Rice: Cloning Guide

Step 1: Clone the Repository (The Download)

First, you need to download the code from GitHub. We'll use the git clone command in your terminal.

Open Terminal: Open your terminal (or use the built-in terminal in VS Code: Ctrl + `).

Navigate: Change directories (cd) to where you want the project folder to live (e.g., your Desktop or development folder).

Clone: Copy the command below, paste it into your terminal, and hit Enter.

git clone [https://github.com/ndmYumul/DATASTALGO-Quiz-1.git](https://github.com/ndmYumul/DATASTALGO-Quiz-1.git)


Enter Project Folder: Once the download is complete, move into the newly created project directory:

cd DATASTALGO-Quiz-1


Step 2: Install Dependencies (The Setup)

This project is a React application built with Create React App, which means it needs some external libraries (dependencies) to run.

Install Packages: With your terminal still inside the DATASTALGO-Quiz-1 folder, run the following command. This will read the package.json file and download all necessary modules (like React, React DOM, and Tailwind CSS configuration).

npm install


This might take a minute or two, depending on your internet connection.

Step 3: Launch the Application (The Preview)

Once all the dependencies are installed, you are ready to launch the Single Page Application (SPA).

Start Dev Server: Run the start script defined in the package.json file:

npm start


A new browser window should automatically open to the development server (usually http://localhost:3000), and you'll see the Chong's Siomai Rice SPA live!
