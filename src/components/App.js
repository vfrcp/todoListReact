import React from "react";

import List from "./list/list"

const list = [{body:"dgdfgdg", liked: false}, {body:"dgdfgdg", liked: true}, {body:"dgdfgdg", liked: true}, {body:"dgdfgdg", liked: true}, {body:"dgdfgdg", liked: true}]
function App() {
  return (
    <div>
      <List name="Vasya" list={list}/>
    </div>
    
  );
}

export default App;
