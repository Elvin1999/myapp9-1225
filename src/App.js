// import logo from "./logo.svg";
import "./App.css";
import { Fragment, useEffect, useRef, useState } from "react";

// function App() {
//   return (
//     // <Fragment>
//     //   <h1>Hello Fragment</h1>
//     //   <Fragment>
//     //     <h2>Hello</h2>
//     //     <h2>Hello</h2>
//     //   </Fragment>
//     //   <Fragment>
//     //     <h2>Hello</h2>
//     //     <h2>Hello</h2>
//     //   </Fragment>
//     // </Fragment>
//   );
// }

// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   });

//   return <video ref={ref} src={src}></video>;
// }

// function App() {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <>
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? "Pause" : "Play"}
//       </button>

//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       ></VideoPlayer>
//     </>
//   );
// }

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const total = useRef(0);

  function handleClick1() {
    setScore1(score1 + 1);
  }

  function handleClick2() {
    setScore2(score2 + 1);
  }

  // useEffect(() => {
  //   total.current = score1 + score2;
  //   console.log("Use effect worked in Last")
  // },[]);

  // useEffect(() => {
  //   total.current = score1 + score2;
  //   console.log("Use effect worked in Last Score 1 changed")
  // },[score1]);


  useEffect(() => {
    total.current = score1 + score2;
    console.log("Use effect worked in Last Score 1 changed")
  },[score1,score2]);

  return (
    <>
      <h1>Score 1 : {score1}</h1>
      <h1>Score 2 : {score2}</h1>
      <section>
        <button onClick={handleClick1}>Add Score 1</button>
        <button onClick={handleClick2}>Add Score 2</button>
      </section>
      <h2>Total : {total.current}</h2>
    </>
  );
}

export default App;
