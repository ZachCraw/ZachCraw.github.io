let header = document.querySelector('#intro');
let anim = [
    { t: " ", ms: 400 },
    { t: "_", ms: 400 },
    { t: " ", ms: 400 },
    { t: "_", ms: 400 },
    { t: "Z_", ms: 200 },
    { t: "ZA_", ms: 200 },
    { t: "ZACH_", ms: 200 },
    { t: "ZACHC_", ms: 200 },
    { t: "ZACHCR_", ms: 200 },
    { t: "ZACHCRA_", ms: 200 },
    { t: "ZACHCRAW_", ms: 200 },
    { t: "ZACHCRAW;_", ms: 1500 },
    { t: "ZACHCRAW_", ms: 400 },
    { t: "ZACHCRAW", ms: 400 },
    { t: "ZACHCRAW_", ms: 400 },
    { t: "ZACHCRAW", ms: 400 },
    { t: "ZACHCRAW", ms: 400 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();