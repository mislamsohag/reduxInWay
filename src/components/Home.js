import { useState } from "react";
import Counter from "./Counter";
import StaticsCounter from "./StaticsCounter";


function Home() {
    const [count, setCount] = useState(0);
    const headerText = "This is simple Counter";

    const [header, setHeader] = useState(headerText);


    return (
        <section className="h-screen w-screen p-10">
            {/* Header */}
            <h1 id="headerText" className="text-center  text-xl max-w-md mx-auto font-bold">
                {header}
            </h1>
            <Counter count={count} setCount={setCount} setHeader={setHeader} />
            <p className="mt-8 text-2xl font-bold">Total Counter</p>
            <StaticsCounter />
        </section>
    )
};
export default Home;