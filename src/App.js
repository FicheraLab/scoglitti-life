import React, { useState } from 'react';

const tabs = ['Alloggi', 'Eventi', 'Mappa', 'Info'];

function App() {
  const [tab, setTab] = useState('Alloggi');

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Scoglitti Life</h1>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 20 }}>
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: 10 }}>
            {t}
          </button>
        ))}
      </div>

      {tab === 'Alloggi' && (
        <div>
          <h2>Case Vacanze</h2>
          <p>Scopri tutte le strutture disponibili a Scoglitti.</p>
          <button>Contatta Host</button>
        </div>
      )}
      {tab === 'Eventi' && (
        <div>
          <h2>Eventi a Scoglitti</h2>
          <ul>
            <li>🎷 Sax Live – Giovedì 25 Luglio</li>
            <li>🍝 Zuppa di Pesce – Tutti i Giovedì</li>
            <li>🎆 Festa del Mare – 14 Agosto</li>
          </ul>
        </div>
      )}
      {tab === 'Mappa' && (
        <div>
          <h2>Mappa delle Attività</h2>
          <p>Trova ristoranti, negozi, pub e servizi utili.</p>
        </div>
      )}
      {tab === 'Info' && (
        <div>
          <h2>Info Point</h2>
          <p>Orari farmacie, meteo, trasporti, emergenze.</p>
          <button>Abbonati come Struttura</button>
        </div>
      )}
    </div>
  );
}

export default App;
