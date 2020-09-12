'use strict';

import { Binary } from './modules/binary.mjs';

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
                    let myApp = 'my-app';
                    new Promise(resolve => {
                        if (view.children.length > 0) {
                            view.children[0].remove();
                            return;
                        }
                        if (customElements.get('my-app')) {
                            console.log("Done");
                        } else {
                            window.customElements.define('my-app', Binary);
                        }
                        resolve(Binary);
                    })
                    .then(classObj => {
                        const lam = document.createElement('my-app');
                        view.append(lam);
                        console.log(lam.file);
                    })
                    .catch(err => alert(err.stack))
                default: return;

            }
            
            
        }

    }






}

window.customElements.define('apps-btn', Btn);




/*
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
            let myApp = 'my-app';
            new Promise(resolve => {
                if (view.children.length > 0) {
                    view.children[0].remove();
                    return;
                }
                if (customElements.get('my-app')) {
                    console.log("Done");
                } else {
                    window.customElements.define('my-app', Binary);
                }
                resolve(Binary);
            })
            .then(classObj => {
                const lam = document.createElement('my-app');
                view.append(lam);
            })
            .catch(err => alert(err.stack))
            
        }

    }


}

window.customElements.define('apps-btn', Btn);
*/



const pointer = document.getElementsByClassName('fa-braille')[0];

pointer.onclick = function() {

    const menu = document.getElementsByClassName('set')[0];
    menu.classList.toggle('open');
}

const rowRead = document.getElementsByClassName('set-row')[0];
const rowFile = document.getElementsByClassName('set-row')[1];
// open ap reader
function openReadMe() {
    new Promise(resolve => {
    const appView = document.getElementById('view');
    if (!appView.children.length) {
       alert("no apps to review");
    }
    const txt =  appView.children[0].readme;
    resolve(txt);
    })
    .then(objText => {
        const appReader = document.getElementsByClassName('reader')[0];
        const readerText = document.getElementById('reader-text');
        appReader.style.marginRight = '0px';
        readerText.textContent = objText;
    })
    
   
}
rowRead.addEventListener('click', openReadMe, false);

// hide app reader
const readerArrow = document.getElementsByClassName('fa-arrow-circle-right')[0];
readerArrow.onclick = function() {
    const appReader = document.getElementsByClassName('reader')[0];
    appReader.style.marginRight = '-25vw';   
}