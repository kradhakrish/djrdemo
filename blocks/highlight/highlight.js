import { buildBlock } from '../../scripts/lib-franklin.js';


export default function decorate(block) {
  console.log("Highlight---");
  console.log(block);
  console.log("end---");
  const h1 = block.querySelector('h1');
  const picture = block.querySelector('picture');
  const href = block.querySelector('a');
  const h3 = block.querySelector('h3');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    const teaser = document.createElement('div');
    teaser.classList.add("teaser");
    teaser.append(h1);
    teaser.append(h3);
    teaser.append(href);
    section.append(buildBlock('highlight', { elems: [picture, teaser] }));
    block.prepend(section);
  }
}
