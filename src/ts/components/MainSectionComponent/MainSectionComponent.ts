import Component from "../Component";
import type ComponentStructure from "../ComponentStructure/ComponentStructure";

class MainSectionComponent extends Component implements ComponentStructure {
  className: string;

  constructor(className: string) {
    super(document.body, "div", "container");
    this.className = className;
  }

  render() {
    super.render();
    this.element.innerHTML = `<main class="${this.className}"> </main>`;
  }
}

export default MainSectionComponent;
