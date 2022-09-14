function InstrumentSelector({ handleInst }) {
  const instrumentSelection = ["amSynth", "fmSynth"];

  return (
    <select name="instrument" id="instrumentSelect" onChange={handleInst}>
      {instrumentSelection.map((instrumentSelect, i) => (
        <option key={i} value={instrumentSelect}>
          {instrumentSelect}
        </option>
      ))}
    </select>
  );
}

export default InstrumentSelector;
