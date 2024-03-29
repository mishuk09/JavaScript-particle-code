import logo from './logo.svg';
import './App.css';
import { tsParticles } from "tsparticles-engine";


function App() {
   
tsParticles
.loadJSON("tsparticles", "presets/default.json")
.then(container => {
    console.log("callback - tsparticles config loaded");
})
.catch(error => {
    console.error(error);
});

 
tsParticles.load("tsparticles", {
 
});

 
tsParticles.loadFromArray("tsparticles", [
{
    /* options here */
},
{
    /* other options here */
},
]);
//random object

tsParticles.loadFromArray(
"tsparticles",
[
    {
        /* options here */
    },
    {
        /* other options here */
    },
],
1
); //the second one
// Important! If the index is not in range 0...<array.length, the index will be ignored.

// after initialization this can be used.

/* tsParticles.setOnClickHandler(@callback); */

/* this will be fired from all particles loaded */

tsParticles.setOnClickHandler((event, particles) => {
/* custom on click handler */
});

// now you can control the animations too, it's possible to pause and resume the animations
// these methods don't change the config so you're safe with all your configurations
// domItem(0) returns the first tsParticles instance loaded in the dom
const particles = tsParticles.domItem(0);

// play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
particles.play();

// pause will stop the animations
particles.pause();
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
