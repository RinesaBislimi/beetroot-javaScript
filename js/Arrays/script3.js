/*
3. Create an array of css-styles (color, font size, alignment, underline etc.) Each element of the array is an object consisting of two properties: style name and style value, Write a function that accepts the style array and a 
text and puts out this text via document.write() in the <p></p> tags, adding the style attribute with all the styles in the array to the opening tag.
*/

const styleArray = [
    { name: "color", value: "blue" },
    { name: "font-size", value: "16px" },
    { name: "text-align", value: "center" },
    { name: "text-decoration", value: "underline" },
  ];
  
  function writeTextWithStyles(styles, text) {
    const styleAttribute = styles.map(style => `${style.name}: ${style.value};`).join(" ");
    document.write(`<p style="${styleAttribute}">${text}</p>`);
  }
  
  
  writeTextWithStyles(styleArray, "Hello, World!");
  