# Ping Pong

#### Play Ping-Pong (with numbers), February 24th, 2017

#### By Sara Schultz

## Description

A game of ping pong that you play with numbers! When the user enters a number, the program will return it as a range starting from 1 counting up to the number that the user inputted. When the range is displayed; numbers divisible by 3 will be replaced with the word "ping", numbers divisible by 5 will be replaced with the word "pong", and numbers divisible by 15 will be replaced with the words "ping-pong".

## Specifications
| Behavior | Input | Output |
|----------|:-----:|:------:|
|Program only accepts numbers as valid input| e | n/a |
|Program can count the range up to the inputted number| 3 | 1,2,3 |
|Program can return the range to the user | 3 | 1,2,3 |
|Program recognizes all numbers that are divisible by three| 3,6,9,12,etc..| -- |
|Program replaces numbers divisible by three with the word "ping" when returning the range to the user | 4 | 1, 2, ping, 4 |
|Program recognizes all numbers that are divisible by five| 5,10,15,20,etc.. | -- |
|Program replaces numbers divisible by five with the word "pong" when returning the range to the user| 5 | 1, 2, ping, 4, pong |
|Program recognizes all numbers that are divisible by fifteen| 15,30,45,etc.. | -- |
|Program replaces numbers divisible by fifteen with the string of words "ping-pong" when returning the range to the user| 15 | 1, 2, ping, 4, pong, ping, 7, 8, ping, pong, 11, ping, 13, 14, ping-pong |

## Setup/Installation Requirements

* Copy and Paste this URL https://github.com/saschultz/Track-Suggester into your browser
* Click "Clone or download" to copy repository link
* Open terminal and use command: Git clone (followed by the repo URL link)
* Switch into cloned directory
* Open index.html

## Known Bugs

There are a few major behaviors that the program is not running properly. The program does not yet replace the specified numbers will the corresponding words; ping, pong, or ping-pong. I believe the first issue to address (in order resolve the word replacement issue) would be how the .split() method is being used. Currently, the string is separated into it's individual elements, but successfully preforming an action on a specified element within the string has not been executed. In addition, the if/else if statements will need to be restructured according after correctly splitting the string. I do not believe that the .replace() method is being executed properly either. The last two bugs to address would be in the event that the user enters 0, and how the program should respond as this cannot be counted in a range, and adding the functionality for the user to be able to see new results from the program over and over again without having to refresh the page.

## Support and contact details

Contact Sara with any questions, comments, or feedback!
saschultz95@gmail.com

## Technologies Used

HTML, Bootstrap, CSS, JavaScript, jQuery-3.1.1

### License

Open Source

Copyright (c) 2017 **Sara Schultz**
