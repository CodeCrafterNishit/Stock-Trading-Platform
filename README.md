# Investo

Investo is a full-stack stock trading simulator built with the MERN stack. Users can sign up, view a live-updating watchlist, buy and sell stocks with simulated prices, and track their portfolio through charts. No real money is involved.

## Features

- User authentication with JWT and bcrypt password hashing
- Buy stocks with weighted-average price consolidation
- Sell stocks (full or partial) with quantity validation
- Order history logged for every buy and sell
- Live price simulation (prices change by up to 1% every 10 seconds)
- Watchlist that refreshes every 10 seconds
- Day change and net change tracking
- Holdings bar chart and watchlist doughnut chart (Chart.js)
- Server-side price validation (the client cannot set its own price)

## Tech Stack

- Frontend: React (Vite), Chart.js, Axios
- Backend: Node.js, Express
- Database: MongoDB (Atlas) with Mongoose
- Auth: JSON Web Tokens, bcryptjs

## Project Structure

```
Stock-Trading-Platform/
  frontend/    Landing page and login (port 5175)
  dashboard/   Trading dashboard (port 5173)
  backend/     Express API and price simulator (port 3002)
```

## Getting Started

### Prerequisites

- Node.js v18 or higher
- A MongoDB Atlas account or a local MongoDB instance

### Installation

```bash
git clone https://github.com/CodeCrafterNishit/Stock-Trading-Platform.git
cd Stock-Trading-Platform

cd backend && npm install
cd ../dashboard && npm install
cd ../frontend && npm install
```

### Environment Variables

Create a `.env` file in each folder.

backend/.env
```
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

dashboard/.env
```
VITE_API_URL=http://localhost:3002
VITE_FRONTEND_URL=http://localhost:5175
```

### Run the Project

Start each app in a separate terminal.

```bash
cd backend && npm start
cd dashboard && npm run dev
cd frontend && npm run dev
```

Then open http://localhost:5175 in your browser.

## Key Design Decisions

- Prices are always fetched on the server for every order, never trusted from the client.
- Each user has one holding per stock, using weighted-average cost instead of lot tracking.
- User holdings and shared market data are stored separately and combined when read.

## Roadmap

- Deploy the project
- Add tests with Jest
- Add an AI-based portfolio insights panel

## Author

Nishit - [CodeCrafterNishit](https://github.com/CodeCrafterNishit)

## Disclaimer

This project is for learning purposes only. It uses simulated prices and no real trading takes place.
