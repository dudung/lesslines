document.addEventListener("DOMContentLoaded", function () {
  if (typeof renderMathInElement !== "undefined") {
    renderMathInElement(document.body, {
      delimiters: [
        {left: "$$", right: "$$", display: true},  // Block math
        {left: "\\[", right: "\\]", display: true}, // Alternative block math (pymdownx style)
        {left: "$", right: "$", display: false},   // Inline math
        {left: "\\(", right: "\\)", display: false}   // Inline math
      ],
      throwOnError: false
    });
    console.log("KaTeX successfully applied.");
  } else {
    console.error("KaTeX auto-render script not loaded.");
  }
});

/*
document.addEventListener("DOMContentLoaded", function () {
  renderMathInElement(document.body, {
    delimiters: [
      {left: "$$", right: "$$", display: true},  // Block math
      {left: "$", right: "$", display: false}   // Inline math
    ]
  });
});
*/

/*
document.addEventListener("DOMContentLoaded", function () {
  if (typeof renderMathInElement !== "undefined") {
    renderMathInElement(document.body, {
      delimiters: [
        {left: "$$", right: "$$", display: true},  // Block math
        {left: "$", right: "$", display: false}   // Inline math
      ],
      throwOnError: false
    });
  } else {
    console.error("KaTeX auto-render script not loaded.");
  }
});
*/

/*
document.addEventListener("DOMContentLoaded", function () {
  if (typeof renderMathInElement !== "undefined") {
    renderMathInElement(document.body, {
      delimiters: [
        {left: "$$", right: "$$", display: true},  // Block math
        {left: "$", right: "$", display: false}   // Inline math
      ],
      throwOnError: false
    });
    console.log("KaTeX initialized successfully.");
  } else {
    console.error("KaTeX auto-render script not loaded.");
  }
});
*/

/*
document.addEventListener("DOMContentLoaded", function () {
  if (typeof renderMathInElement !== "undefined") {
    document.querySelectorAll("script[type='math/tex']").forEach(function (el) {
      let span = document.createElement("span");
      span.innerHTML = katex.renderToString(el.textContent, { displayMode: false });
      el.replaceWith(span);
    });

    document.querySelectorAll("script[type='math/tex; mode=display']").forEach(function (el) {
      let div = document.createElement("div");
      div.innerHTML = katex.renderToString(el.textContent, { displayMode: true });
      el.replaceWith(div);
    });

    console.log("KaTeX successfully applied to math elements.");
  } else {
    console.error("KaTeX auto-render script not loaded.");
  }
});
*/