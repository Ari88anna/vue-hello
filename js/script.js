// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue(
    {
        el: '#root',

        data: {
            mete: 'Vieni a trovarci',
            miaImg: 'img/lake.jpg',  
            imgToshow: 'hide',
            hideImg: 'Click to hide', 
            viewImg: 'Click to view'                 
        },
        methods: {
            showImg() {
                this.imgToshow = (this.imgToshow == 'hide') ? '': 'hide';
            }
        }        
        
    }
)