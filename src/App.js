
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';

const seagrassData = [
  { temp: 15, activity: 0 },
  { temp: 20, activity: 0.2 },
  { temp: 24, activity: 0.8 },
  { temp: 27, activity: 1 },
  { temp: 30, activity: 0.8 },
  { temp: 33, activity: 0.3 },
  { temp: 36, activity: 0.1 },
  { temp: 38, activity: 0 },
];

const clownfishData = [
  { temp: 15, activity: 0 },
  { temp: 22, activity: 0.2 },
  { temp: 27, activity: 0.9 },
  { temp: 30, activity: 1 },
  { temp: 32, activity: 0.8 },
  { temp: 34, activity: 0.3 },
  { temp: 37, activity: 0.1 },
  { temp: 40, activity: 0 },
];

export default function Toleranzkurven() {
  return (
    <main className="min-h-screen bg-[#504F88] text-white p-6 font-sans">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Toleranzkurven: Lebensbedingungen im Great Barrier Reef
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-[#504F88] rounded-2xl shadow-lg p-4 border border-white/20">
          <h2 className="text-xl mb-2">Seegras</h2>
          <p className="mb-4 text-sm text-white/90">
            Optimale Wassertemperatur: 24–30 °C. Unter 21 °C oxidativer Stress. Über 33 °C Hitzeschäden wahrscheinlich.
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={seagrassData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#888" />
              <XAxis dataKey="temp" stroke="#fff">
                <Label value="Temperatur (°C)" offset={-5} position="insideBottom" fill="#fff" />
              </XAxis>
              <YAxis stroke="#fff" domain={[0, 1]}>
                <Label value="Aktivität" angle={-90} position="insideLeft" fill="#fff" />
              </YAxis>
              <Tooltip contentStyle={{ backgroundColor: '#504F88', borderColor: '#fff', color: '#fff' }} labelStyle={{ color: '#fff' }} />
              <Line type="monotone" dataKey="activity" stroke="#fff" strokeWidth={3} dot={{ r: 4, stroke: '#fff', fill: '#504F88' }} />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section className="bg-[#504F88] rounded-2xl shadow-lg p-4 border border-white/20">
          <h2 className="text-xl mb-2">Clownfisch</h2>
          <p className="mb-4 text-sm text-white/90">
            Optimale Temperatur: 27–32 °C. Unter 23 °C oder über 34 °C sinkt die Leistungsfähigkeit deutlich.
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={clownfishData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#888" />
              <XAxis dataKey="temp" stroke="#fff">
                <Label value="Temperatur (°C)" offset={-5} position="insideBottom" fill="#fff" />
              </XAxis>
              <YAxis stroke="#fff" domain={[0, 1]}>
                <Label value="Aktivität" angle={-90} position="insideLeft" fill="#fff" />
              </YAxis>
              <Tooltip contentStyle={{ backgroundColor: '#504F88', borderColor: '#fff', color: '#fff' }} labelStyle={{ color: '#fff' }} />
              <Line type="monotone" dataKey="activity" stroke="#fff" strokeWidth={3} dot={{ r: 4, stroke: '#fff', fill: '#504F88' }} />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </div>
    </main>
  );
}
