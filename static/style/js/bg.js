document.addEventListener('DOMContentLoaded',
    function() {
        const images = [
            "url('/static/images/home-bg/moscaslider_1.jpg')",
            "url('/static/images/home-bg/moscaslider_2.jpg')",
            "url('/static/images/home-bg/moscaslider_3.jpg')",
            "url('/static/images/home-bg/moscaslider_4.jpg')"
        ];

        function changeBG() {
            const body = document.querySelector('body');
            const bg = images[Math.floor(Math.random() * images.length)];

            body.style.backgroundImage = bg;
        }

        setInterval(changeBG, 7000);
    }
);
