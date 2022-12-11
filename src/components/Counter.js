
function Counter({ count, setCount, setHeader }) {


    const increment = () => {
        setCount((previus) => previus + 1);
        setHeader = "Count is increasing";
    };
    const decrement = () => {
        setCount((previus) => previus - 1);
    };

    return (
        <div className="max-w-md mx-auto mt-4 space-y-5">
            <div className="h-auto p-4 flex flex-col items-center justify-center bg-slate-100 shadow rounded-lg pb-14">
                {/* initial State */}
                <div id="initialTxt" className="py-8 font-bold">{count}</div>
                {/* Button */}
                <div className="space-x-2">
                    <button onClick={increment} id="increaseBtn"
                        className=" bg-green-600 p-2 ring rounded-lg text-white font-bold">Increment</button>
                    <button onClick={decrement} id="decreaseBtn"
                        className="bg-red-300 p-2 ring rounded-lg text-white font-bold">Decrement</button>
                </div>
            </div>
        </div>
    )
};
export default Counter;