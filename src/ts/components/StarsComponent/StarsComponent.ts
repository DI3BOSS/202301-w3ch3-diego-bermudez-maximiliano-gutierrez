import Component from "../Component";
import type ComponentStructure from "../ComponentStructure/ComponentStructure";

class StarsComponent extends Component implements ComponentStructure {
  className: string;

  constructor(className: string) {
    super(document.body, "ul", "score");
    this.className = className;
  }

  render() {
    super.render();
    this.element.innerHTML = `<ul class="score">
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="1/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="2/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="3/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="4/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="5/5"></i></button>
              </li>
            </ul>`;
  }
}

export default StarsComponent;
