#!/usr/bin/node

<!DOCTYPE html>
<html>
<head>
    <title>Theme Changer</title>
</head>
<body>
    <p id="welcomeText">Welcome Holberton!</p>
    <button id="spookyButton">Spooky</button>
    <button id="darkModeButton">Dark mode</button>
    <button id="screamModeButton">Scream mode</button>

    <script>
        function changeMode(size, weight, transform, background, color) {
            return function () {
                document.body.style.fontSize = size + 'px';
                document.body.style.fontWeight = weight;
                document.body.style.textTransform = transform;
                document.body.style.backgroundColor = background;
                document.body.style.color = color;
            };
        }

        function main() {
            const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
            const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
            const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

            const welcomeText = document.getElementById('welcomeText');
            const spookyButton = document.getElementById('spookyButton');
            const darkModeButton = document.getElementById('darkModeButton');
            const screamModeButton = document.getElementById('screamModeButton');

            spookyButton.addEventListener('click', spooky);
            darkModeButton.addEventListener('click', darkMode);
            screamModeButton.addEventListener('click', screamMode);
        }

        main();
    </script>
</body>
</html>