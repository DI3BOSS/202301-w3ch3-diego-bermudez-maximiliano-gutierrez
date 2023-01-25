class Component {
  element: Element;
  parentElement: Element;

  constructor(className: string, parentElement: Element, tagName: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement = parentElement;
  }

  render() {
    this.parentElement.appendChild(this.element);
  }
}

export default Component;
