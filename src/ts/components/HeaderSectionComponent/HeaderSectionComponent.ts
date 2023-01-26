import Component from "../Component";
import type ComponentStructure from "../ComponentStructure/ComponentStructure";

class HeaderSectionComponent extends Component implements ComponentStructure {
  className: string;

  constructor(className: string) {
    super(document.body, "header", "main-header");
    this.className = className;
  }

  render() {
    super.render();
    this.element.innerHTML = `
      <h1 class="main-title">My Series</h1>
    `;
  }
}

export default HeaderSectionComponent;
