#CHROME-EXTENSION-FOR-PERSONAL-PRODUCTIVITY-TRACKER#

*COMPANY*: CODTECH IT SOLUTIONS
*NAME*:KHUSHAL SHARMA
*INTERN ID*: CT04DG2801
*DOMAIN*:React.js Web Development
*DURATION*: 4 WEEK
*MENTOR*: NEELA SANTOSH KUMAR

#Project Title: Productivity Tracker – A Chrome Extension with Vite + React

Overview:
The Productivity Tracker is a lightweight and efficient Chrome Extension built using React and Vite.
It is designed to monitor, record, and visualize the amount of time a user spends on different websites
during their browsing session. This helps users become more aware of their online habits and take steps
to improve focus and productivity. By combining the performance benefits of Vite and the flexibility of
React, the extension offers a modern solution to time tracking within the browser environment.

Key Features:

-Real-Time Activity Tracking:
The extension uses the Chrome Extensions API to monitor browser tab activity. It tracks how long a tab remains active and logs the duration spent on each domain.

-Persistent Storage:
Time data is stored locally using chrome.storage.local. This allows the extension to keep historical browsing time without needing external databases or network access.

-Visual Insights with Charts:
The popup interface (built with React) displays a bar chart using Chart.js, summarizing the time spent on each domain. The graph offers a quick visual breakdown, making 
it easy for users to identify which sites consume most of their time.

-Vite-Powered Build System:
The project uses Vite for fast development and optimized production builds. A custom plugin in the vite.config.js file ensures that essential static assets—like the manifest.json,
background script, and icons—are correctly copied to the dist/ folder during the build process.

-Offline and Secure:
Since the extension runs entirely within the browser and stores data locally, it does not require an internet connection or external server, ensuring user privacy and security.

Technical Architecture:

Frontend: React (JSX, Hooks), Chart.js
Bundler: Vite for lightning-fast builds and HMR
Browser APIs Used:
chrome.tabs for detecting tab switches and activity
chrome.storage for saving usage data
chrome.runtime for background processes
Files Structure Highlights:
background.js: Tracks time spent per tab
manifest.json: Defines extension permissions, popup, icons
App.jsx: React component rendering the chart
vite.config.js: Handles build and asset copying
index.html: Entry point for the popup UI

Installation & Usage:

After building the project using npm run build, users can install the extension manually via Chrome:
Visit chrome://extensions
Enable "Developer Mode"
Click “Load Unpacked”
Select the dist/ folder

Once installed, the extension will begin monitoring active tab usage in the background. Clicking on the extension icon opens a popup with a detailed chart summarizing time spent per domain.
