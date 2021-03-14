# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Richard Ngo**

Time spent: **4** hours spent in total

## Required Functionality

The following **required** functionality is complete:

- [ x ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [ x ] "Start" button toggles between "Start" and "Stop" when clicked.
- [ x ] Game buttons each light up and play a sound when clicked.
- [ x ] Computer plays back sequence of clues including sound and visual cue for each button
- [ x ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [ x ] User wins the game after guessing a complete pattern
- [ x ] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [ x ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ x ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ x ] More than 4 functional game buttons
- [ x ] Playback speeds up on each turn
- [ x ] Computer picks a different pattern each time the game is played
- [ x ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ x ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/YYhqx08.gif)
![](https://i.imgur.com/LCkq0Vn.gif)

My GIFs:

![](https://i.imgur.com/qgy2Rih.gif)
![](https://i.imgur.com/kwyMq05.gif)
![](https://i.imgur.com/y5uG05u.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   For steps 1-10 I have only used the doc provided

   for the other challenges I googled resources that I needed such as how to make the onmouse up have multiple function calls

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   A problem that I had encountered while working, was the lit function wasn't working when providing the clues. To debug the issue, I placed alert("working") messages throughout my program to see what was going on. After confirming the alert messages were working correctly, I was confused why the lit function wasn't working. After re-reading the document of the Lit section, I confirmed that the Javascript was the same. After fiddling around and re-reading my code I could not see any issues with it. Then I decided to look at the CSS and wondered if there was a problem with declaring #button#:active, #button#.lit in the same line. So when I decided to separate the declarations I realized that I did not change the number #button1.lit. After finding out the simple typo, disappointed in my negligence, the issue was resolved. This reminds me to always be careful when you copy-paste similar functions.

   Another issue I had when doing my project is that on the first launch of the page the audio player was not working. When I inspected the console I it gives me the message "The AudioContext was not allowed to start. It must be resumed." After a quick google search

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   After finishing my submission a question that I have about web development is, how do you make your website look more visually appealing or more advanced. After working with HTML and CSS on a superficial level, I know that there's a way to style a website to a certain extent. However, when compared to well-known, or other websites they pale in comparison. So although I used HTML and CSS to some extent, I am still curious about how to make clean websites that don't look inexperienced. I would like to know if web development requires you to be experienced in design. Or if there is a certain skill that I have not yet learned. Either way, I am hoping to learn skills to advance my levels of web development.

4) If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   If I had more time to work on this project, I would either do more of the challenges or make the website look better. One idea that comes to mind is to make the clue sequence into a popular song. To do this I would need to find the actual pitches to play the song. Furthermore, I would need to make the frequency map accommodate all the pitches needed. I would also have to change the clue frequency to match the song, to make the song sound smooth. To make the website look better, one thing I would have to do is to make a new design. A design laying out how I want the website to look, as well as different color schemes and fonts.

## License

    Copyright [Michelel Cheng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
