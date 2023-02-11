import { Component } from '@angular/core';
import { Article } from '../core/model/article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent {

  
  listeArticles:Article[]=[
    {titre:"Le championnat du monde",contenu:"le champion du monde de cette année est '",auteur:"Med Taher",date:"12/12/2002",categorie:"Sport"},
    {titre:"Comment écrire votre CV",contenu:"Pour réussir a décraucher un emploi '",auteur:"Marie Else",date:"02/04/2017",categorie:"Travail"},
    {titre:"Les nouveau parents ",contenu:"Pour réussir '",auteur:"Ahmed",date:"13/07/2011",categorie:"Education"}
  ]

  number=0;

  calc()
  {
for(let a of this.listeArticles)
{
  if(a.categorie!='Travail')
  this.number++;
}
  }

}
