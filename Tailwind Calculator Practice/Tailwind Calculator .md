# Creating Calculator with Tailwind

Create a html template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

add a script bellow the body and put the logic function

```html
<script>
  const display = document.getElementById("display");

  function append(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = "";
  }

  function calculate() {
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = "Error";
    }
  }
</script>
```

inside the body tag add add this tailwind config

```jsx
// h-screen = 100% of the screen height
<body class="flex items-center justify-center h-screen bg-gray-100"></body>
```

inside the body, create a div that will act as container of the calculator

```jsx
//   class="..." = Tailwind CSS styles:
//  p-6 = padding on all sides (24px)
//  rounded-xl = large rounded corners
//  shadow-lg = large shadow (for depth)
//  w-80 = width is 20rem (320px)
<div class="bg-white p-6 rounded-xl shadow-lg w-80">
  {/* input tags and grid container */}
</div>
```

inside the div container of the calculator add this two tags

```jsx
// type="text" = it's a text input.
// id="display" = the ID for JavaScript or CSS use.

//   class="..." = Tailwind CSS styles:
//     w-full = full width
//     text-right = text aligned to the right
//     text-2xl = large text size
//     p-2 = padding (8px)
//     mb-4 = bottom margin (16px)
//     border = adds a border
//     rounded = rounded corners

// readonly = user can't type or edit this input.
<input type="text" id="display" class="w-full text-right text-2xl p-2 mb-4 border rounded" readonly/>

// class="..." = Tailwind CSS styles:
// bg-gray-200 = light gray background
// hover:bg-gray-300 = background becomes slightly darker gray when you hover
// text-xl = large text
// py-2 = vertical padding (top & bottom = 8px)
// rounded = rounded corners

<div class="grid grid-cols-4 gap-2">
    {/* button groups */}
</div>
```

inside the grid container add the calculator buttons

```jsx
<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('7')">7</button>
<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('8')">8</button>
<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('9')">9</button>
<button class="bg-red-400 hover:bg-red-500 text-xl py-2 rounded" onclick="clearDisplay()">C</button>

<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('4')">4</button>
<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('5')">5</button>
<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('6')">6</button>
<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('/')">/</button>

<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('1')">1</button>
<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('2')">2</button>
<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('3')">3</button>
<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('*')">*</button>

<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('0')">0</button>
<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('.')">.</button>
<button class="bg-green-400 hover:bg-green-500 text-xl py-2 rounded" onclick="calculate()">=</button>
<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded" onclick="append('-')">-</button>

<button class="bg-gray-200 hover:bg-gray-300 text-xl py-2 rounded col-span-4" onclick="append('+')">+</button>
```
