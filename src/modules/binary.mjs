'use strict';


export class Binary extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const root = this.shadowRoot;
        root.innerHTML = `

        <div id = 'binary-app-container'>

                <div class = 'row'>
                    <p id = 'convert-header'>
                        Convert Decimal Numbers to Binary Nummbers
                    </p>
                </div>

                <div class = 'row'>
                    <textarea id = 'decimal-text' placeholder = 'decimal.. '></textarea>
                    <div id = 'convert-btn-container'>
                        <div id = 'convert-symbol'>
                            <i class="fas fa-sync"></i>
                        </div>
                        <div id = 'convert-btn'>Convert</div>
                    </div>
                </div>

                <div class = 'row'>
                    <div id = 'binary-text'></div>
                </div>

                <div class = 'row'>
                    <p class = 'convert-title'>Time Complexity:<span class = 'loga loga-time'></span></p>
                    <p class = 'convert-title'>Space Complexity:<span class = 'loga loga-space'></span></p>
                </div>
                <div class = 'row'>
                    <p class = 'convert-title'>O(log2(n))</p>
                    <p class = 'convert-title'>O(log2(n))</p>
                </div>
            </div>

            <style>
            #binary-app-container {
                width: 400px;
                height: 250px;
                border-radius: 5px;
                background-color: #C0C3BE;
                border: 3px solid #989B96;
                display: flex;
                display: -ms-flexbox;
                display: -webkit-flex;
                flex-direction: column;
                padding: 10px;
            }
            .row {
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: space-around;
                margin: 5px;
            }
            .row:nth-child(1) {
                background-image: linear-gradient(45deg,#C0C3BE, #C7C6C4, #E5E4E2, #E5E4E2, #C7C6C4, #C0C3BE);
                align-items: center;
                border-radius: 5px;
            }
            #decimal-text {
                width: 45%;
                display: flex;
                align-items: center;
                display: -ms-flexbox;
                display: -webkit-flex;
                resize: none;
                border: none;
                outline: none;
                color: #2b2b22;
                font-size: 20px;
                border-radius: 5px;
            }
            #convert-btn-container {
                width: 45%;
                display: flex;
                display: -ms-flexbox;
                display: -webkit-flex;
                background-color: #2B60DE;
                border-radius: 5px;
            }
            #convert-symbol {
                width: 20%;
                display: flex;
                display: -ms-flexbox;
                display: -webkit-flex;
                justify-content: center;
                align-items: center;
            }
            #convert-btn {
                width: 80%;
                display: flex;
                display: -ms-flexbox;
                display: -webkit-flex;
                justify-content: center;
                align-items: center;
                color: #ffff;
                font-size: 20px;
                font-family: 'ABeeZee';
                cursor: pointer;
            }
            .fa-sync {
                color: #ffff;
                font-size: 20px;
                cursor: pointer;
            }
            #convert-header {
                font-size: 17px;
                color: #2b2b2b;
            }
            #binary-text {
                width: 100%;
                height: 100%;
                display: flex;
                display: -ms-flexbox;
                display: -webkit-flex;
                justify-content: center;
                align-items: center;
                background-image: linear-gradient(45deg, #C0C3BE, #C7C6C4, #E5E4E2, #E5E4E2, #C7C6C4, #C0C3BE);
                color: #2b2b2b;
                font-size: 20px;
            }
            .convert-title {
                color: #2b2b2b;
                font-family:'ABeeZee'; 
            }
            </style>
        `;
    }
}

