const sqrtHelper = (x,y) => Math.sqrt(x * x + 5 * y + 2);

function rungeKutta(x, y, h) {
    const k1 = h * sqrtHelper(x, y);
    const k2 = h * sqrtHelper(x + h / 2, y + k1 / 2);
    const k3 = h * sqrtHelper(x + h / 2, y + k2 / 2);
    const k4 = h * sqrtHelper(x + h, y + k3);
    return y + (k1 + 2 * k2 + 2 * k3 + k4) / 6
}

function fillArrayWithNumbers(n) {
    let arr = Array.apply(null, Array(n));
    return arr.map(function (x, i) { return i });
}

export const calculateRungeKutta = ({x, y, h, n}) => {

    const res = fillArrayWithNumbers(n-1);
    const firstNode = [x + h, rungeKutta(x, y, h)];

    res.reduce((prev, curr, index) => {
        console.log(prev,curr,index);
        const y = rungeKutta(prev[0], prev[1], h);
        const x = prev[0] + h;
        res[index] = [x, y];
        return [x, y];
    }, firstNode);

    return [firstNode].concat(res);
};
