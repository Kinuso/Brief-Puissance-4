export default class ChoixNomJoueur {
  constructor(Joueur1, Joueur2,joueurActuel) {
    this.Joueur1 = Joueur1;
    this.Joueur2 = Joueur2;
    this.joueurActuel=joueurActuel
  }

  NomDesJoueurs() {
   this.Joueur1 = prompt('Nom du joueur 1')
   this.Joueur2 = prompt('Nom du joueur 2')
}

  InitNomDesJoueurs(){
  this.joueurActuel =  document.querySelector('.joueurActuel');
  this.joueurActuel.innerHTML =`${this.Joueur1}`}

}
