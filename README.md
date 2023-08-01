# WebpageJS - Element Creator

WebpageJS is a JavaScript utility that allows you to easily create HTML elements with various options and configurations.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This utility provides a `_createNode()` function that simplifies the process of creating HTML elements in JavaScript. It offers options for setting class names, attributes, event listeners, and more. You can even specify the XML namespace for SVG or MathML elements.

## Installation

The utility is written in pure JavaScript and doesn't require any additional libraries. Simply include the `webpagejs-element-creator.js` script in your HTML file.

```html
<script src="webpagejs-element-creator.js"></script>
```

## Usage

To create an HTML element, call the `_createNode()` function with the desired tag name and configuration options.
```javascript
webpage._createNode("div", {
    className: "your_classname",
    dataset: {
        id: 1728
    },
    attr: {
        controls: "true"
    },
    listener: {
        event: ['click','touchstart'],
        handler: function(e) {
            console.log(e)
        }
    },
    innerChild: document.body
});
```
