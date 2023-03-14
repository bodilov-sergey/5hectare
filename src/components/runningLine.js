const runningLine = () => {
    const container = document.querySelector(".running-line");
    const text = container.querySelector("p");
    const textСlone = text.cloneNode(true);
    const lengthOfText = text.offsetWidth;
    function calcRunningLineWidth() {
        const windowInnerWidth = window.innerWidth;
        const numberOfRunningLineText = Math.ceil(windowInnerWidth / lengthOfText);
        container.replaceChildren();
        for (let step = -1; step < numberOfRunningLineText; step++) container.append(textСlone.cloneNode(true));
    }
    calcRunningLineWidth();
    addEventListener("resize", calcRunningLineWidth);
};

export default runningLine;
