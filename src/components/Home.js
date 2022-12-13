import { useState } from "react";
import Counter from "./Counter";
import StaticsCounter from "./StaticsCounter";

const initialState = [
    {
        id: 1,
        count: 0,
    },
    {
        id: 2,
        count: 0,
    },
    {
        id: 3,
        count: 0,
    },
];

function Home() {
    const [state, setState] = useState(initialState);

    const totalCount = () => {

        return state.reduce((total, counter) => total + counter.count, 0);
    }

    const increment = (id) => {
        const updatedCounter = state.map((c) => {
            if (c.id === id) {
                return {
                    ...c,
                    count: c.count + 1,
                };
            }
            return { ...c };
        });
        setState(updatedCounter);
    };
    const decrement = (id) => {
        const updatedCounter = state.map((c) => {
            if (c.id === id) {
                return {
                    ...c,
                    count: c.count - 1,
                };
            }
            return { ...c };
        });
        setState(updatedCounter);
    };


    return (
        <section className="h-screen w-screen p-10">
            {/* Header */}
            <h1 id="headerText" className="text-center  text-xl max-w-md mx-auto font-bold">
                This is simple Counter
            </h1>
            {/* Counter */}
            {state.map((count) =>
                <Counter
                    key={count.id}
                    id={count.id}
                    count={count.count}
                    increment={increment}
                    decrement={decrement} />
            )}


            {/* Total Count */}
            <p className="mt-8 text-2xl font-bold">Total Counter</p>
            <StaticsCounter count={totalCount()} />
        </section>
    )
};
export default Home;