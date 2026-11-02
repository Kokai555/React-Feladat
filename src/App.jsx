import { useState } from 'react';

function App() {
  const colors = [
  { szinnev: 'Piros', rgb: '#FF0000' },
  { szinnev: 'Zöld', rgb: '#00FF00' },
  { szinnev: 'Kék', rgb: '#0000FF' },
  { szinnev: 'Sárga', rgb: '#FFFF00' },
  { szinnev: 'Lila', rgb: '#800080' }
];
//Amikor a felhasználó választ egy színt, annak írja ki a nevét az oldalra!
//Továbbá a választott színnel színezze ki egy panel (div) hátterét!
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <>
      <h1>Kedvenc szin valaszto</h1>
      <select
        value={selectedColor.rgb}
        onChange={(event) => {
          const color = colors.find((item) => item.rgb === event.target.value);
          if (color) setSelectedColor(color);
        }}
      >
        {colors.map((color, index) => (
          <option key={index} value={color.rgb}>
            {color.szinnev}
          </option>
        ))}
      </select>
      <p>{selectedColor.szinnev}</p>
      <div
        style={{
          backgroundColor: selectedColor.rgb,
          width: '200px',
          height: '100px',
        }}
      />
    </>
  )
}

export default App
