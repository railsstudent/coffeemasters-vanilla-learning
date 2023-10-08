export class MenuPage extends HTMLElement {
    constructor() {
        super();

        // Shadow dom
        this.root = this.attachShadow({ mode: "open" });

        const styles = document.createElement('style');
        this.root.appendChild(styles);

        async function loadCSS() {
            const request = await fetch("/components/MenuPage.css");
            styles.textContent = await request.text();
        }

        loadCSS();
    }

    connectedCallback() {
        console.log('connectedCallback called');
        const template = document.getElementById('menu-page-template');
        console.log('menu-page-template', template);
        const content = template.content.cloneNode(true);
        this.root.appendChild(content);

        window.addEventListener("appmenuchange", () => {
            this.render();
        });
        this.render();
    }

    render() {
        if (app.store.menu) {
            this.root.querySelector("#menu").innerHTML = "";
            for (let category of app.store.menu) {
                const liCategory = document.createElement("li");
                liCategory.innerHTML = `
                    <h3>${category.name}</h3>
                    <ul class='category'>
                    </ul>`;
                this.root.querySelector("#menu").appendChild(liCategory);
    
                // TODO: placeholder
            }  
        } else {
            this.root.querySelector("#menu").innerHTML = `Loading...`;
        }
    }
}
customElements.define('menu-page', MenuPage)