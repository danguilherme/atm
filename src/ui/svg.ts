export function createSvgElement(markup: string): SVGElement {
  const parser = new DOMParser();
  const doc = parser.parseFromString(markup, "image/svg+xml");
  const svg = doc.documentElement;
  svg.classList.add('svg');
  return svg as any;
}
