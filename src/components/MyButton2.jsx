export default function MyButton({ changeCount, label }) {
    return <button onClick={() => changeCount(1)}>{label}</button>;
}
