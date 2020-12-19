// Milestone 2
// ● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
// messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ● Click sul contatto mostra la conversazione del contatto cliccato

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
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
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
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
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
                status: 'received'
                },
                {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
                },
                {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
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
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
                }
                ],
            },
            {
                name: 'Richard',
                avatar: '_5',
                visible: true,
                messages: [
                {
                date: '10/03/2020 15:30:56',
                text: 'Speriamo smetta di nevicare',
                status: 'sent'
                },
                {
                date: '10/03/2020 15:50:01',
                text: 'Se fosse per me farei nevicare sempre',
                status: 'received'
                }
                ],
            },
            {
                name: 'Vanessa',
                avatar: '_6',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Cosa possiamo regalare a Chiara?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Non lo so',
                status: 'received'
                }
                ],
            },
            {
                name: 'Augusto',
                avatar: '_8',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Noooo!!! Come hai fatto a sbagliare?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Avevo capito male :(',
                status: 'received'
                }
                ],
            },
            {
                name: 'Marta',
                avatar: '_io',
                visible: true,
                messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Come va?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Va',
                status: 'received'
                }
                ],
            },
        ],
        chatAttiva: [

        ],
        messaggi:[

        ],
    },
 
    methods:{
        avviaChat(contatto){
           this.chatAttiva.splice(0,1,contatto);
           //console.log(this.chatAttiva);
           //console.log(contatto);
        }
    }
});