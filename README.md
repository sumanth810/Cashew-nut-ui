# Cashew Processing Dashboard

This is a web application for managing and visualizing cashew batch processing data. The application supports user authentication, data entry, and dashboard views for different processing stages like shelling, peeling, and grading.

## Features
- **User Authentication**: Login and logout functionality with JWT-based authentication.
- **Data Management**: Add, view, and manage cashew batch data through forms.
- **Data Visualization**: Visualize output ratios using charts for various processing stages.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Technology Stack
- **Frontend**: React.js, React Router, Chart.js, Tailwind CSS.
- **Backend**: Expected REST API for data handling (e.g., Java).
- **Authentication**: JWT-based token authentication.

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- Backend API running to serve data and handle authentication

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/cashew-dashboard.git
   cd cashew-dashboard
2. Install dependencies:
   ```bash
   npm install 
3. Start the development server:
   ```bash
   npm start
4. Ensure the backend API is running at /api

# API Endpoints
## Authentication
-**POST /api/cashew-process/login**: Authenticates the user and returns a JWT token.
## Data Submission
-**POST /api/cashew-process/batchdata**: Submits production data.
## Data Fetching
- **GET /api/cashew-process/batchdata?date=YYYY-MM-DD**: Retrieves data for a specific date.
