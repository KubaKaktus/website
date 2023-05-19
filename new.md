To sort `<div>` elements based on the value of labels contained within them, you can use JavaScript. Here's an example of how you can achieve this:

HTML structure:

```html
<div class="container">
  <div>
    <label>3</label>
  </div>
  <div>
    <label>1</label>
  </div>
  <div>
    <label>2</label>
  </div>
</div>
```

JavaScript code to sort `<div>` elements by label values:

```javascript
// Get the container element
var container = document.querySelector('.container');

// Get all the div elements within the container
var divs = container.querySelectorAll('div');

// Convert the NodeList to an array for easier manipulation
var divsArray = Array.from(divs);

// Sort the array based on the label values
divsArray.sort(function(a, b) {
  var labelA = parseInt(a.querySelector('label').textContent);
  var labelB = parseInt(b.querySelector('label').textContent);
  return labelA - labelB;
});

// Remove existing divs from the container
while (container.firstChild) {
  container.firstChild.remove();
}

// Append the sorted divs back to the container
divsArray.forEach(function(div) {
  container.appendChild(div);
});
```

This code snippet selects the container element using its class name, then finds all the `<div>` elements within it. It converts the NodeList of divs into an array for easier manipulation and uses the `sort()` method to sort the divs based on the parsed integer values of the label contents. Finally, it removes the existing divs from the container and appends the sorted divs back in the new order.

After executing this JavaScript code, the `<div>` elements will be sorted in ascending order based on the values of the labels within them.