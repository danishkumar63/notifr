# notifr v1.0.0
A tiny, lightweight, Javascript modular library to show different types of notifications and toasts. Works well with webpack, and also supports TypeScript, Angular, React and Vue.
The library is available as an [npm package](https://www.npmjs.com/package/notifr).
To install the package run:

```bash
npm install notifr --save

# or with yarn
yarn add notifr
```
## Demo
Check this [Demo](https://notifbar.stackblitz.io/).

## How to Use?
### 1. Show & Hide Success Bar
```js
import { notifSuccess, notifHide } from 'notifr';

// Show Notification Bar
notifSuccess("Success Message");

// Hide Notification Bar
notifHide();
```
### 2. Show & Hide Error Bar
```js
import { notifError, notifHide } from 'notifr';

// Show Notification Bar
notifError("Error Message");

// Hide Notification Bar
notifHide();
```
### 3. Show & Hide Custom Bar
```js
import { notifCustom, notifHide } from 'notifr';

// Show Notification Bar
notifCustom("Custom Message", {color: "white", bgColor: "orange", bold: false});

// Hide Notification Bar
notifHide();
```
### 4. Show Notification for a given time.
```js
import { notifSuccess } from 'notifr';

notifSuccess("Success Message").til(1000); // 1000 milliseconds
```
### 5. Show Notification Without Close Button.
```js
import { notifSuccess } from 'notifr';

notifSuccess("Error Message",{}, false).til(1000); // 1000 milliseconds
```
### 6. With Optional Parameters:
```js
import { notifCustom } from 'notifr';
  
notifCustom("Custom Message", {
	color: '#FFFF99', // default '#FFFFFF'
	bgColor: '#CCFFFF', // default '#999999'
	bold: true, // default false
	noShadow: true, // default false
});
```
### Show & Hide Toasts
```js
import { toastSuccess, toastError, toastCustom } from 'notifr';

// Show Success Toast
toastSuccess("Success Message");

// Show Error Toast
toastError("Error Message");

// Show Custom Toast
toastCustom("Custom Message", {color: "white", bgColor: "orange", bold: false});

// Note: Default Time for toast is 2 seconds (2000ms), you can change by passing third optional time parameter in milliseconds.
toastSuccess("Success Message", { bold: true }, 5000);
```
Note: All the methods except **notifHide()** support optional parameters. 

## Please Support :)

If you like this package, please give it a star on [GitHub](https://github.com/danishkumar63/notifr). Also please feel free to create a GitHub issue to help me improve this package.