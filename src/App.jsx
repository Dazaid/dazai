import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>
        {Array.from("Dazai New Page in progress ").map((char, index) => (
          <span
            key={index}
            className="blinking-text"
            style={{ animationDelay: `${Math.random() * 2}s` }} // Retraso aleatorio
          >
            {char === " " ? '\u00A0' : char}
          </span>
        ))}
        <span className="dots"></span>
      </h1>
    </div>
  );
}

export default App;
