import Block from './Block';

export default function renderDOM(selector: string, block: typeof Block) {
    const blockPage = new block()

    const root = document.querySelector(selector);

    if (!root) throw new Error("элемент с таким селектором не найеден")

    root!.innerHTML = '';
    root!.appendChild(blockPage.getContent());
}
