# Pokémon Project
It is a simple Pokémon project game built in Javascript, HTML and CSS.

## Instalation
After clone this repository you will need to run `npm i` to install all dependencies.

## How to run
To run this application you will need only run `yarn dev`.
If you want to run the unit test using Jasmine and Karma run `yarn test` instead of.

## How to play
To play this game you can enter in the input a value corresponding to the Ash's movements ("N" to North, "S" to South, "E" to East and "O" to West) and click in the yellow button (you can send a complex string as "NNEEOSSSNO" if you want to). It runs in a virtual matrix with infinite positions and infinite Pokémons. You only get a Pokémon once, if you pass twice in the same place, you won't increase your arsenal of Pokémons.

You can play it in a finite matrix rendered in the screen too. For this use [UP], [DOWN], [RIGHT] and [LEFT] buttons in your keyboard to control Ash's movements. The game ends when you get all available Pokémons.

![Application Example](https://github.com/andrefillypesilva/pokemon-project/blob/master/application_example.jpg?raw=true)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)