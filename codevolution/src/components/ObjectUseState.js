import React, { useState } from "react";

function ObjectUseState() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName: e.target.value})}></input>
      <input type="text" value={name.lastName} onChange={(e) => setName({...name,lastName: e.target.value})}></input>

      <h1>This is firstName {name.firstName}</h1>
      <h1>This is lastName {name.lastName}</h1>
    </div>
  );
}

export default ObjectUseState;
