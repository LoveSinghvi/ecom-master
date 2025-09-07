import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const trafficData = [
  { time: "12am", visitors: 400 },
  { time: "3am", visitors: 300 },
  { time: "6am", visitors: 320 },
  { time: "9am", visitors: 500 },
  { time: "12pm", visitors: 600 },
  { time: "3pm", visitors: 700 },
  { time: "6pm", visitors: 800 },
  { time: "9pm", visitors: 1000 },
];

const mapMarkers = [
  { name: "India", coordinates: [78.9629, 20.5937] },
  { name: "United States", coordinates: [-95.7129, 37.0902] },
  { name: "Brazil", coordinates: [-51.9253, -14.2350] },
  { name: "Germany", coordinates: [10.4515, 51.1657] },
  { name: "Japan", coordinates: [138.2529, 36.2048] },
];

const browserStats = [
  { browser: "Chrome", users: 1392, percent: 71.3, bounce: 36.99 },
  { browser: "Firefox", users: 220, percent: 11.3, bounce: 42.1 },
  { browser: "Edge", users: 147, percent: 7.5, bounce: 43.7 },
  { browser: "Safari", users: 98, percent: 5.0, bounce: 32.9 },
  { browser: "Opera", users: 39, percent: 2.0, bounce: 36.1 },
];

const countryStats = [
  { country: "India", users: 228, sessions: 460, bounce: 36.09 },
  { country: "United States", users: 178, sessions: 256, bounce: 42.97 },
  { country: "Brazil", users: 97, sessions: 213, bounce: 36.15 },
  { country: "Germany", users: 112, sessions: 198, bounce: 38.20 },
  { country: "Japan", users: 86, sessions: 150, bounce: 34.5 },
];

export default function Dashboard() {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h1>

      {/* Visitors Graph */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Visitor Analytics</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="visitors" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* World Map */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Visitor Map</h2>
        <ComposableMap>
          <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} fill="#e5e7eb" stroke="#fff" />
              ))
            }
          </Geographies>
          {mapMarkers.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={5} fill="#3b82f6" />
              <text textAnchor="middle" y={15} style={{ fontSize: 10, fill: "#000" }}>
                {name}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Browser Statistics */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Browser Usage</h2>
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead>
            <tr>
              <th>Browser</th>
              <th>Users</th>
              <th>% Users</th>
              <th>Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            {browserStats.map((stat, index) => (
              <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                <td>{stat.browser}</td>
                <td>{stat.users}</td>
                <td>{stat.percent}%</td>
                <td>{stat.bounce}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Country Statistics */}
      <div className="bg-white dark:bg-gray-900 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Visitors by Country</h2>
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead>
            <tr>
              <th>Country</th>
              <th>Users</th>
              <th>Sessions</th>
              <th>Bounce Rate</th>
            </tr>
          </thead>
          <tbody>
            {countryStats.map((stat, index) => (
              <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                <td>{stat.country}</td>
                <td>{stat.users}</td>
                <td>{stat.sessions}</td>
                <td>{stat.bounce}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
