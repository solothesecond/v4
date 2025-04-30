document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const h1Element = document.getElementById('ld');

    const headings = [
        "romany v4 when? (its now lol)",
        "WAIT ROMANS JS FILES ARE LOADING!!!"
    ];

    if (loadingScreen) {
        document.body.classList.add('loading');

        if (h1Element) {
            h1Element.textContent = headings[Math.floor(Math.random() * headings.length)];
        }

        window.addEventListener('load', function() {
            setTimeout(function() {
                loadingScreen.classList.add('fade-out');
                setTimeout(function() {
                    document.body.classList.remove('loading');
                }, 100);
            }, 100);
        });
    } else {
        console.error('loading screen not found?????');
    }
});

console.log(`
    /$$$$$$$ /$$$$$$$$ /$$    /$$ /$$   /$$
   /$$_____/|____ /$$/|  $$  /$$/| $$  | $$
  |  $$$$$$    /$$$$/  \\  $$/$$/ | $$  | $$
   \\____  $$  /$$__/    \\  $$$/  | $$  | $$
   /$$$$$$$/ /$$$$$$$$   \\  $/   |  $$$$$$$
  |_______/ |________/    \\_/     \\____  $$
                                  /$$  | $$
                                 |  $$$$$$/
                                  \\______/
  `);
