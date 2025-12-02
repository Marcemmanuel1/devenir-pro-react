

import { useState } from 'react'
import './App.css'

function App() {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  return (
    <form>
      <Condition
        checked={isTermsAccepted}
        onckeck={setIsTermsAccepted}
      />
      <button
        style={{
          backgroundColor: !isTermsAccepted ? "gray" : "blue",
          color: "white",
          cursor: !isTermsAccepted ? "not-allowed" : "pointer",
        }}
        disabled={!isTermsAccepted}
      >Envoyer le formulaire</button>
    </form>
  );
}


function Condition({ checked, onckeck }) {
  return (
    <div>
      <label >
        <input
          checked={checked}
          onChange={e => onckeck(e.target.checked)}
          type="checkbox"
        />
        J'accepte les conditions générales
      </label>
    </div>

  );
}


export default App
