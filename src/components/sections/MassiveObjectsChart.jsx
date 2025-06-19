import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  { name: "TON 618", mass: 66000 },
  { name: "IC 1101", mass: 100000 },
  { name: "Phoenix Cluster", mass: 250000 },
  { name: "El Gordo", mass: 300000 },
  { name: "The Hercules-Corona Borealis Great Wall", mass: 1000000 }
];

const colors = ["#00ffff", "#1e90ff", "#7b68ee", "#8a2be2", "#ff69b4"];

export default function MassiveObjectsChart() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-black/50 rounded-lg mt-12">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Most Massive Cosmic Structures (Solar Masses × 10¹⁴)
      </h2>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical" margin={{ top: 20, right: 20, left: 40, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis type="number" stroke="#aaa" />
          <YAxis dataKey="name" type="category" stroke="#aaa" />
          <Tooltip contentStyle={{ backgroundColor: "#222", borderColor: "#555", color: "#fff" }} />
          <Bar dataKey="mass" radius={[0, 10, 10, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
