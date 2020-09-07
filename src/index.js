'use strict';

import { rock } from './modules/binary.js';

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
        const btnTitle = this.shadowRoot.getElementById('btn');
        btnTitle.textContent = this.getAttribute('title');
    }
}

window.customElements.define('apps-btn', Btn);

window.onload = function() {
    const bar = document.getElementById('news');
    bar.style.marginRight = bar.parentElement.clientWidth + 'px';
    
}



window.onclick =  function() {
     rock();
}
