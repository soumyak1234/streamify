# Streamify Dashboard 🎵

A modern, responsive music analytics dashboard built with React and Material-UI, featuring real-time statistics, interactive charts, and comprehensive data visualization for music streaming analytics.

## Features 🚀

- **Real-time Analytics**: Track key metrics including total users, active users, and revenue
- **Interactive Charts**: Visualize data through various chart types:
  - User Growth Trends
  - Revenue Distribution
  - Top Songs Performance
  - Geographic Distribution
- **Dark/Light Theme**: Toggle between dark and light modes for comfortable viewing
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Quick Actions**: Easy access to common tasks and features
- **Real-time Notifications**: Stay updated with important alerts and updates

## Tech Stack 💻

- React.js
- Material-UI (MUI)
- Recharts
- Context API for state management
- Custom Hooks
- Responsive Design

## Getting Started 🏁

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/soumyak1234/streamify.git
```

2. Navigate to the project directory
```bash
cd streamify-dashboard
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Project Structure 📁

```
streamify-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── Layout/
│   │   └── Common/
│   ├── context/
│   ├── data/
│   └── App.js
└── README.md
```

## Key Components 🔑

- **Dashboard**: Main container for all analytics components
- **TopSongsChart**: Displays top 5 streamed songs
- **RevenueDistribution**: Shows revenue breakdown by source
- **GeographicDistribution**: Regional performance metrics
- **UserGrowthChart**: User growth trends over time
- **StreamsTable**: Detailed streaming data in tabular format

## Customization 🎨

- Theme customization available in `src/context/ThemeContext.jsx`
- Data configuration in `src/data/dashboardData.json`
- Component styling through Material-UI's styling system

## Deployment 🚀

The dashboard is deployed on Netlify. Visit [Streamify Dashboard](your-netlify-url) to see it in action.

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments 👏

- Material-UI for the component library
- Recharts for the charting library
- All contributors who helped improve the dashboard

