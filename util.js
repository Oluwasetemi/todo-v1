function mk(type, props, children = []) {
  let element = document.createElement(type);

  if (props) {
    Object.assign(element, props)
  }

  if (children) {
    element.prepend(...children)
  }

  return element;
}

export { mk };
