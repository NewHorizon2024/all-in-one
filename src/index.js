'use strict';

//import { rock } from './modules/binary.js';

class Btn extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const root = this.shadowRoot;
        root.innerHTML = `
        <div id = 'control-view-container'>
            <div id = 'btn'></div>
        </div>

        <style>
        #btn {
            width: 15vw;
            height: 40px;
            box-shadow: 0px 0px 10px 5px #343132;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffff;
            font-family: 'ABeeZee';
            font-size: 16px;
            margin-top: 10px;
            cursor: pointer;
            transition: 0.5s ease-out;
        }
        
        </style>
        `;
    }

    connectedCallback() {
        const view = document.getElementById('view');
        const btnTitle = this.shadowRoot.getElementById('btn');
        const appTitle = this.getAttribute('title');
        btnTitle.textContent = appTitle;

        btnTitle.onclick = function() {
            switch(appTitle) {
                case 'Converting to Binary':
                    import('./modules/binary.js')
                    .then(obj => {
                        const appRoot = new obj.Binary();
                        window.customElements.define('my-app', appRoot);
                        view.children[0].remove();
                    })
                    .then(() => {
                        const app = document.createElement('my-app');
                        view.append(app);
                    })
                    .catch(err => alert(err.message))
                    break;
                default: return;
            }
        }

    

    }
}

window.customElements.define('apps-btn', Btn);




