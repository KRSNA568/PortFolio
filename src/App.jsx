import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import CursorBall from "./CursorBall"

const App = () => {
  return (
    <div className="cursor-none">
      <div className="container mx-auto max-w-7xl">
        <Navbar />
      </div>
      <Hero />
      <div className="container mx-auto max-w-7xl">
        <CursorBall />
      </div>
<section className="min h-screen"></section>
<section className="min h-screen"></section>
<section className="min h-screen"></section>
<section className="min h-screen"></section>
<section className="min h-screen"></section>
<section className="min h-screen"></section>

    </div>
  );
}

export default App;