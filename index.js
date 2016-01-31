const fish = require("./fish.svg");
const beaker = require("./beaker.svg");

document.body.appendChild(createSprite(fish));
document.body.appendChild(createSprite(beaker));

/**
 * <svg>
 *   <use xlink:href="#sprite-id"></use>
 * </svg>
 */
function createSprite (glyph) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svg.classList.add("icon");

  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", glyph);
  svg.appendChild(use);

  return svg;
}
