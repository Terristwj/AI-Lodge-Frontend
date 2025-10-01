import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// First Activity: First Button
import MyButton from "./components/myButton.jsx";

// Second Activity: Counter Buttons
import IncreaseButton from "./components/IncreaseButton.jsx";
import DecreaseButton from "./components/DecreaseButton.jsx";

// Third Activity: Reusable Button Component
import MyButton2 from "./components/MyButton2.jsx";

function App() {
    const [count, setCount] = useState(0);

    function handleIncrease() {
        setCount((count) => count + 1);
    }

    function handleDecrease() {
        setCount((count) => count - 1);
    }

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <div>Current count: {count}</div>
                <br />
                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "center",
                        marginBottom: "20px",
                    }}
                >
                    {/* First Activity: First Button */}
                    {/* <MyButton /> */}

                    {/* Second Activity: Counter Buttons */}
                    {/* <IncreaseButton />
                    <DecreaseButton /> */}

                    {/* Third Activity: Reusable Button Component */}
                    <MyButton2 changeCount={handleIncrease} label="Increase" />
                    <MyButton2 changeCount={handleDecrease} label="Decrease" />
                </div>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
