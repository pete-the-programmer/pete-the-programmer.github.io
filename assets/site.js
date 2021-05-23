const wrapInSection = (elements) => {
  var wrapper = document.createElement('section')
  // insert wrapper before el in the DOM tree
  el.parentNode.insertBefore(wrapper, elements[0])
  // move el into wrapper
  elements.forEach( el => {
    wrapper.appendChild(el)
  })
}

$('.pageContent h3, .pageContent h1').each(function(i, h3){
    const sect = $(h3).nextUntil('h3').addBack().wrapAll(`<section class="section_${ i % 4 }"></section>`);
    [...h3.attributes]
      .filter(x => x.nodeName !== "id")
      .map( x => x.nodeName === "data-bg" ? {"nodeName": "style", "nodeValue": `background-image: url('${x.nodeValue}');`} : x)
      .forEach( attr => {
        const val = h3.parentElement.getAttribute(attr.nodeName) ? h3.parentElement.getAttribute(attr.nodeName) + " " + attr.nodeValue: attr.nodeValue;
        h3.parentElement.setAttribute(attr.nodeName, val) 
      });
    $(h3).parent().addClass(h3.classList)
  })
