import React from "react";
import Hero from "./Main/Hero";
import Pricing from "./Main/Pricing";
import WaitList from "./Main/WaitList";
import Lamp from "./Main/Lamp";
import { ExtraEffects } from "./Main/ExtraEffects";

function App() {
  return (
    <div>
      <Hero />
      <Pricing />
      <WaitList />
      <Lamp />
      <ExtraEffects />
    </div>
  );
}

export default App;
