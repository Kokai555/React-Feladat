function App() {
  const colors = [
  { szinnev: 'Piros', rgb: '#FF0000' },
  { szinnev: 'Zöld', rgb: '#00FF00' },
  { szinnev: 'Kék', rgb: '#0000FF' },
  { szinnev: 'Sárga', rgb: '#FFFF00' },
  { szinnev: 'Lila', rgb: '#800080' }
];
//Generáljon az oldalra egy lenyíló listát a tömbben található színekből!
  return (
    <>
      <h1>Kedvenc szin valaszto</h1>
      <select>
        {colors.map((color, index) => (
          <option key={index} value={color.rgb}>
            {color.szinnev}
          </option>
        ))}
      </select>
    </>
  )
}

export default App
