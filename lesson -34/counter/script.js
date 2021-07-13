const counters = document.querySelectorAll('.features-counter');

counters.forEach((counter) => {
    counter.innerText = '0';

    const runCounter = () => {
        const target = Number(counter.getAttribute('data-target')); //=+ ===> Number
        const current = Number(counter.innerText);

        const increment = target / 900;

        if(current<target) {
            counter.innerText = `${Math.ceil(current+increment)}`;
            setTimeout(runCounter, 1);
        } else {
            counter.innerText = target;
        }
    }
    runCounter();
});