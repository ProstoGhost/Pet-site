window.addEventListener('deviceorientation', function(event) {
    if (event.alpha !== null && event.beta !== null && event.gamma !== null) {
        Object.assign(document.documentElement, {
            style: `
                --move-x: 0deg;
                --move-y: ${(event.beta - 90)/ -15}deg;
            `
        })
    } else {
        console.log('Device does not have a gyroscope.');
        window.addEventListener('mousemove', e => {
            Object.assign(document.documentElement,{
                style: `
                    --move-x: ${(e.clientX - window.innerWidth / 2)* -.005}deg;
                    --move-y: ${(e.clientY - window.innerHeight / 2 )* .012}deg;
                `
            })
        });
    }
});