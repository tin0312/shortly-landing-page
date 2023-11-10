# URL SHORTENING LANDING PAGE

The URL landing page introduces to everyone the URL shortening services

## Table of contents

- [Overview](#overview)
  - [The objectives](#the-objectives)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [What I learn](#what-I-learn)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
- The `input` field is empty

### Screenshot

![](./src/assets/images/pageScreenshot.png)

### Links

- Solution URL: [Github Repo](https://github.com/tin0312/shortly-landing-page)
- Live Site URL: [Live Site](https://creative-platypus-cfe223.netlify.app/)

## My process

- Setup Jest and eslint.
- Seting up Tailwind, Sass and eslint.
- Structure the page.
- Adding MVP to the page.
- Styling for the desktop.
- Responsiveness for mobile.

## What I learn

- Cross-origin resource sharing (CORS) is a browser security feature that restricts HTTP requests that are initiated from scripts running in the browser. CORS is typically required to build web applications that access APIs hosted on a different domain or origin.
- It is important to select an API that support CORS integrated in your application.
- Test API endpoint with cCURL to verify the server's behaviours
- Typescript declaration files for imported modules.
- CSS filter function that can apply graphical effect on the input images.
- Using nesting , "&" parent selector and variables to make css file more readable and dry.
- Using tailwind to make a responsive burger menu:

1. Create a hamburger icon using spans.
2. Attach a click event on the hamburger icon to toggle open/close.
3. Depending on the navbar's open state, display the container to place elements.
4. Display none if the state is closed; otherwise, display block.
5. Create and set up a click event on the close menu icon.

- Using `curl -I https://shrtlnk.dev/api/v2/link` to inspect the location header from the api endpoint server when making a HTTP request.
- Using tailwind first utility class to improve cde performance.
-  Using typescript to statically declare types for variables and functions.

### Built with

- HTML
- React
- Typescript
- Tailwind
- Sass
- [React](https://reactjs.org/) - JS library

## Author

- Website - [Justin](https://fabulous-lily-7976cc.netlify.app/)
- Frontend Mentor - [@tin0312](https://www.frontendmentor.io/profile/tin0312)
