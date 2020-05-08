import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  protected listaItens: any;
  constructor(public navCtrl: NavController, 
    public storage: Storage,
    public alertCrtl: AlertController) {
  }
  adicionar() {
    let prompt = this.alertCrtl.create({
      title: 'Adicionar Item a Lista',
      message: 'Entre com o nome do item que deseja adicionar à lista:',
      inputs: [
        {
          name: 'item',
          placeholder: 'Nome do item...'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: (data) => {
            // Botao cancelar clicado, nao fazer nada
          }
        },
        {
          text: 'Adicionar',
          handler: (data) => {
            if (!Array.isArray(this.listaItens) || !this.listaItens.length) {
              this.listaItens = new Array();
            }
            this.listaItens.push(
              {
                nome: data.item,
                marcado: false
              }
            );
            this.storage.set('listaItens', this.listaItens);
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewDidLoad(){
    this.storage.get('listaItens').then(
      (val) => {
        this.listaItens = val;
      }
    )
  }
}