import {ESC} from '../utils/constants.js'

export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose =  this._handleOverlayClose.bind(this);
      }
    

    open() {
        this._popup.classList.add('popup_opened');
            document.addEventListener('keydown', this._handleEscClose);
            document.addEventListener('mousedown', this._handleOverlayClose);
    }

    close() { 
        this._popup.classList.remove('popup_opened');
            document.removeEventListener('keydown', this._handleEscClose);
            document.removeEventListener('mousedown', this._handleOverlayClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === ESC) {
            this.close();
        }
    }

    _handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__close-button').addEventListener('click', this.close.bind(this))
        };
    }
