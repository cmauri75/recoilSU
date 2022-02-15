import React from 'react';
import { RecoilRoot, atom, useRecoilState,selector } from 'recoil';

const counter = atom({
    key: "counter",
    default: "0"
});

function Display() {
    const number = useRecoilValue(counter);
    return <p>{number}</p>
}

const cubed = selector({
    key: "cube",
    get: ({ get }) => get(counter) ** 3
})

const cubed = selector({
    key: "totalPrice",
    get: ({ get }) => {
        get(numState) ** 3
    }
})

export default function App() {
    const [number, setNumber] = useRecoilState(counter);

    return (
        <RecoilRoot>
            <h1>Recoil Demo</h1>
            <button onClick={() => setNumber(number + 1)}>{number}</button>
        </RecoilRoot>
  )
}

