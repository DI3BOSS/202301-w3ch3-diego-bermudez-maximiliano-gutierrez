import Component from "./components/Component";
import MainSectionComponent from "./components/MainSectionComponent/MainSectionComponent";
import HeaderSectionComponent from "./components/HeaderSectionComponent/HeaderSectionComponent";

const mainContent = new MainSectionComponent("main-content");
const headerContent = new HeaderSectionComponent("main-header");

headerContent.render();
mainContent.render();
