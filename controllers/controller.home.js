import home from "../view/home.html";

export default () => {
  const divContent = document.createElement("div");
  divContent.innerHTML = home;
  return divContent;
};
