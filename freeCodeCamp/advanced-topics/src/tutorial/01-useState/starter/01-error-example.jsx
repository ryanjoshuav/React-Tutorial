const ErrorExample = () => {
    let count = 0;
    const increment = () => {
        count += 1;
        console.log(count);
    };
    return (
        <div>
            <h2>{count}</h2>
            <button type="button" className="btn" onClick={increment}>
                Increment
            </button>
        </div>
    );
};

export default ErrorExample;
