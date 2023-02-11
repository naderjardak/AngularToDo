import { Component } from '@angular/core';
import { Emploi } from '../core/model/emploi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {

  listEmplois:Emploi[]=[];
  listEmploi=[
    { reference: "1" ,titre: "java sin" ,entreprise: "esprit",etat: false},
    { reference: "2" ,titre: "RH" ,entreprise: "vermeg",etat: true},
    { reference: "3" ,titre: "ing" ,entreprise: "actia",etat: true}
  ] 

  Postuler(e:Emploi) {
    
  }

  nb=0;
Bilan()
  {

    let nb=0;
    var e;
    for(e of this.listEmploi)
    {
    if(e.etat==true)
    this.nb=this.nb+1;
    }
  }

  entreprise!:String;

}


