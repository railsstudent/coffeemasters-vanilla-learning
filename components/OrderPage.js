

export class OrderPage extends HTMLElement {
    constructor() {
        super();

        // Shadow dom
        this.root = this.attachShadow({ mode: "open" });

        const styles = document.createElement('style');
        this.root.appendChild(styles);

        async function loadCSS() {
            const request = await fetch("/components/OrderPage.css");
            styles.textContent = await request.text();
        }

        loadCSS();
    }

    connectedCallback() {
        const template = document.getElementById('order-form-template');
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);
    }
}

customElements.define('order-page', OrderPage);