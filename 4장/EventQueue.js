//이벤트 큐에 작업을 추가 및 구조를 이해

function simpleTimeout(consoleTimer) {
    console.timeEnd(consoleTimer);
}

console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");
console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");
console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");
console.time("50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");
