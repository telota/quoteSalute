import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

class Salute {
  constructor(id, quote, sender, receiver, edition, date, baseURL) {
    this.id = id;
    this.quote = quote;
    this.sender = sender;
    this.receiver = receiver;
    this.edition = edition;
    this.date = date;
    this.baseURL = baseURL;
    this.fullURL = baseURL + id;

    console.log(this);
  }
}

const app = new Vue({
    el: '#app',
    data: {
        salute: new Salute(1, 'Hallo', 'ich', 'du', 'BBAW', '21.03.2018', 'BBAW.de'),
        // all defined filter values, to have boxes pre-checked
        filter: ["send-f","send-m","send-n","receive-f","receive-m","receive-n","formal","informal"]
    },
    methods: {
        refresh() {
            //AJAX AUFRUF
            this.salute = new Salute(1, 'Welt', 'du', 'ich', 'BBAW', '21.03.2018', 'BBAW.de');
            console.log(this.filter);
        },
    },
});
