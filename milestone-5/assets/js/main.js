// Milestone 5 - opzionale
// ● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
// permette di cancellare il messaggio selezionato
// ● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

let app = new Vue({
    el: "#app", 
    data:{
        contatti: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent',
                isActive: false,
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent',
                isActive: false,
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received',
                isActive: false,
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent',
                isActive: false,
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                isActive: false,
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                isActive: false,
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received',
                isActive: false,
                },
                {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                isActive: false,
                },
                {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received',
                isActive: false,
                }
                ],
            },
            {
                name: 'Luigi',
                avatar: '_4',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                isActive: false,
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received',
                isActive: false,
                }
                ],
            },
            {
                name: 'Richard',
                avatar: '_5',
                visible: true,
                messages: [
                {
                date: '18/05/2020 16:40:56',
                text: 'Speriamo smetta di nevicare',
                status: 'sent',
                isActive: false,
                },
                {
                date: '18/05/2020 16:45:01',
                text: 'Se fosse per me farei nevicare sempre',
                status: 'received',
                isActive: false,
                }
                ],
            },
            {
                name: 'Vanessa',
                avatar: '_6',
                visible: true,
                messages: [
                {
                date: '07/09/2020 00:00:05',
                text: 'Cosa possiamo regalare a Chiara?',
                status: 'sent',
                isActive: false,
                },
                {
                date: '08/09/2020 04:12:34',
                text: 'Non lo so',
                status: 'received',
                isActive: false,
                }
                ],
            },
            {
                name: 'Augusto',
                avatar: '_8',
                visible: true,
                messages: [
                {
                date: '10/12/2020 16:48:55',
                text: 'Noooo!!! Come hai fatto a sbagliare?',
                status: 'sent',
                isActive: false,
                },
                {
                date: '10/12/2020 17:05:08',
                text: 'Avevo capito male :(',
                status: 'received',
                isActive: false,
                }
                ],
            },
            {
                name: 'Marta',
                avatar: '_io',
                visible: true,
                messages: [
                {
                date: '13/12/2020 23:22:25',
                text: 'Come va?',
                status: 'sent',
                isActive: false,
                },
                {
                date: '13/12/2020 23:59:59',
                text: 'Va',
                status: 'received',
                isActive: false,
                }
                ],
            },
        ],
        chatAttiva: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent',
                isActive: false,
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent',
                isActive: false,
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received',
                isActive: false,
                }
                ],
            },
        ],
        nuovoMes: "",

        cercaNome:"",

        presente: false,

        cercaMessaggio:"",

        visibile:"",
    },
    

    methods:{
        // al click sulla lista dei contatti si attiva la chat con il contatto selezionato
        avviaChat(contatto){
           this.chatAttiva.splice(0,1,contatto);
           //console.log(this.chatAttiva);
           //console.log(contatto);
           this.contatto
        },
        // serve per inviare il testo scritto nell'input in basso
        invia(){
            this.chatAttiva[0].messages.push({text:this.nuovoMes, status:'sent', date:(`${dayjs().format('DD/MM/YYYY')} ${dayjs().format('H:mm:ss')}`)}), this.nuovoMes= "";
            setTimeout(this.rispondi, 1000)
        },
        //il programma rispondera ok dopo un secondo dal messaggio inviato 
        rispondi(){
            this.chatAttiva[0].messages.push({text:'ok', status:'received', date:(`${dayjs().format('DD/MM/YYYY')} ${dayjs().format('H:mm:ss')}`)});   
        },
        //ricerca contatti che contengono nel nome quello scritto nell'input
        ricerca(){
            this.contatti.forEach(element => {
                //console.log(element);
                if(element.name.toLowerCase().includes(this.cercaNome.toLowerCase())){
                    element.visible = true
                }else{
                    element.visible = false 
                }
                //console.log(element.name.includes(this.cercaNome));
            });
        },
        //al click appare il menu e con un secondo click scompare
        appari(){
            if (this.presente === false) {
                this.presente = true
            }else{
                this.presente = false
            }
        },
        //al click elimina il messaggio
        cancella(index){
            for (let i = 0; i < this.chatAttiva.length; i++) {
            this.chatAttiva[i].messages.splice(index,1)
            
            }              
        },
        appariRicerca(){
            if (this.visibile === false) {
                this.visibile = true
            }else{
                this.visibile = false
            }
        },

        ricercaChat(){
            this.chatAttiva[0].messages.forEach(element => {
                //console.log(element);
                if(element.text.toLowerCase().includes(this.cercaMessaggio.toLowerCase() || this.cercaMessaggio ==! "")){
                    element.isActive = true 
                }else{
                    element.isActive = false
                }
            });     
    }
    }
});