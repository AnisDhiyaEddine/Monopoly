class Case {          
    constructor(nom)
    {
       this.nomcase= nom;

    } 
    equals(case1)
    {
        return (this.nomcase === case1.nomcase);
    } 
}

class Depart extends Case{
constructor (nom){
    super(nom);
}
equals(case1)
    {
        return super.equals(case1);
    } 
} 

class Prison extends Case{
constructor (nom){
    super(nom);
}
equals(case1)
    {
        return (super.equals(case1));
    } 
}


class propriete extends Case{
    constructor(nomcase,prixB)
    {
        super(nomcase);
        this.prixBase = prixB;
       // this.hypotheque = hypotheque;
    }
    equals(case1)
    {
        return (super.equals(case1)&&(this.prixBase==case1.prixBase));
    } 
    get_prixB()
    {
        return this.prixBase;
    }
    
}

class Terrain extends propriete{
        constructor(nomcase,prixBase,loyer, loyer1M,loyer2M, loyer3M, loyer4M,loyerH,nbM,nbH,couleur)
        {
           super (nomcase,prixBase);
            this.loyerNu = loyer;
            this.loyer1M = loyer1M;
            this.loyer2M = loyer2M;
            this.loyer3M = loyer3M;
            this.loyer4M = loyer4M;
            this.loyerH = loyerH;
            this.nbM = nbM;
            this.nbH= nbH;
            this.couleur = couleur;
            
        }
        equals(T)
        {
            
            return(super.equals(T)&&(this.loyerNu==T.get_loyerNu())&&(this.loyer1M==T.get_loyer1M())&&(this.loyer2M==T.get_loyer2M())
            &&(this.get_loyer3M==T.get_loyer3M())&&(this.loyer4M==T.get_loyer4M())&&(this.loyerH==T.get_loyerH())&&
            (this.nbM==T.get_nbM())&&(this.nbH==T.get_nbH()));
           
        }
        set_nbH(nb){
            this.nbH = nb;
        }
        set_nbM(nb){
            this.nbM = nb;
        }
        get_couleur()
        {
            return this.couleur;
        }
        get_loyerNu(){
            return this.loyerNu;
        }
        get_loyer1M(){
            return this.loyer1M;
        }
        get_loyer2M(){
            return this.loyer2M;
        }
        get_loyer3M(){
            return this.loyer3M;
        }
        get_loyer4M(){
            return this.loyer4M;
        }
        get_loyerH(){
            return this.loyerH;
        }
        get_nbM(){
            return this.nbM;
        }
        get_nbH(){
            return this.nbH;
        }
      
    }
    
 class Companie extends propriete
    {
constructor(nomcase,prixB) {
    super(nomcase,prixB);
}
equals(case1)
{
    return super.equals(case1);
} 
    }
    
 class gare extends propriete {
            
        constructor(nomcase,prixBase,loyerG)
        {
            super(nomcase,prixBase);
            this.loyerGare = loyerG;
    
        }
        
        get_loyer(){
            return this.loyerGare;
        }
        equals(G)
        {
            super.equals(G);
            if(this.loyerGare == G.loyerGare)return true;
            else return false;
        }
    } 

 class Cartes extends Case {
        constructor(nom,type,txtCarte){
            super(nom);
        this.texte = txtCarte;
        this.type = type;
        }
        get_texte(){return this.texte;}
      
        }      
        
 class Banque {
        constructor(){
        this.nbmaisons = 32;
        this.nbhotels = 12;
        }
        acheterM(){
            this.nbmaisons--;
        }
        
        acheterH(){
            this.nbhotels--;
        }
       
        
        }
        
  class Couleur {
            constructor(couleurT, prixM, prixH)
            {
               this.couleur = couleurT;
               this.prixmaison = prixM;
               this.prixhotel = prixH;
        
            }
            get_prixmaison(){
                return this.prixmaison;
            }
            get_prixhotel(){
                return this.prixhotel;
            }
        
        }
       
  class Joueur {
	constructor( nom,couleur,pion ){
		
		this.nom = nom;
		this.couleur = couleur;
		this.enPrison = false;
		this.pion = pion ;
		// Nombre de tour en prison
		this.nbDouble = 0;
		// Indique que le joueur est bloque. Il doit se debloquer pour que le jeu continue
		this.bloque = false;
        this.nbtoursP = 0;
		this.defaite = false;
		this.cartesSortiePrison = []; // Cartes sortie de prison
		this.montant = 1500;	// Montant sur la case depart
        this.proprietes = [] ;
      
	}
    choisir_pion(){
        this.pion.case = 0;
    }
    get_nbC(){
        return this.nbC;
    }
	lancerjeu(){

    }
   ajouter_carte_sortieprison(carte){
   this.cartesSortiePrison.push(carte);
   }

    quitterjeu(){

    }

    utiliseCarteSortiePrison() {
		if (this.cartesSortiePrison.length === 0) {
			throw "Impossible d'utiliser cette carte";
		}
		this.cartesSortiePrison.splice(this.cartesSortiePrison.length - 1, 1);
	   this.enPrison = false;
       this.bloque = false;
    }

	acheter(propriete) {
		
		/* Verifie si le joueur peut payer */
		if (this.montant - propriete.get_prixB() < 0) {
			throw "Solde insuffisant";
		} else {
			this.setArgent(this.montant - propriete.get_prixB());
            this.proprietes.push(propriete);
            
		}
	}
afficher_prop()
{let i = 0;
    console.log(this.proprietes.length);
    if (this.proprietes.length>0)
   console.log(this.proprietes[0].loyerNu);
   console.log(this.montant);
   console.log(this.proprietes[0].nbM);
   console.log(this.proprietes[0].nbH);
}
    acheter_maison(propriete){
       if(this.verif(propriete)==true){
         if(propriete instanceof Terrain)
         {
             if ((propriete.get_nbM()<4)&&(propriete.get_nbH()==0)){
                 if(this.montant-propriete.get_couleur().get_prixmaison()){
                 this.montant=this.montant-propriete.get_couleur().get_prixmaison();
                 propriete.set_nbM(propriete.get_nbM()+1);
                 }else throw"Solde insuffisant";
             }
             else {
                 throw "Nombre de maisons maximum atteint";
             }
         }
       }
    }
    
    vendre_propriete(propriete,prix)
    {
       if(this.verif(propriete)==true){
          this.montant= this.montant +prix;
          let index = this.proprietes.findIndex(m=>m.equals(prop));
          this.proprietes.splice(index,1);
       }
       else throw "Ce terrain ne vous appartient pas"
    }
    acheter_hotel(propriete)
    {
        if(this.verif(propriete)==true){
            if(propriete instanceof Terrain)
            {
                if(propriete.get_nbM() == 4){
                    if(this.montant-propriete.get_couleur().get_prixhotel()){
                    this.montant=this.montant-propriete.get_couleur().get_prixhotel();
                 
                    propriete.set_nbH(1);
                    propriete.set_nbM(0);
                    }else throw "Solde insuffisant";
                } else {
                    throw "nombre de maisons insuffisant";
                }
            }
        }
    }
    verif_nbDouble(){
        if (this.nbDouble== 3){
            this.nbDouble = 0;
            this.aller_Prison();
        }
    }
    payer(montant)
    {
        this.montant = this.montant - montant;
    }
		verif(prop){
        let index = this.proprietes.findIndex(m=>m.equals(prop));
        
		if(index != -1) return true;
        return false;

        }

afficher_prison()
{
    console.log(this.enPrison);
    console.log("bloque "+this.bloque);
    
}
	aller_Prison() {
		
        this.enPrison = true;
		this.bloque = true;
	}

	sortir_Prison(payer, carte) {
        
	  if (payer == true){
          if (this.montant > 50){
          this.montant = this.montant - 50 ;
          this.enPrison = false;
          this.bloque = false;
          }
          else throw "Solde insuffisant";
      }
      else{
     if (carte == true){
         this.utiliseCarteSortiePrison();
     }
     else {
       this.bloque = true;
       this.nbtoursP ++ ;
       if(this.nbtoursP == 3){
           this.enPrison = false;
           this.nbtoursP = 0 ;
           this.bloque=false;
       }
     }
    }
	}

    Est_EnPrison() {
		return this.enPrison;
	}

	setArgent(montant) {
		this.montant = montant;
	}
    
     
	gagner(montant) {
		this.montant = this.montant + montant;
	}

	Perdre() {
      if((this.montant == 0)&& ( this.proprietes.length == 0)){
		this.defaite = true;
        return true;	
      }else return false;
	}
    
    modifierNom (nom){
    this.nom = nom;
    }
    afficher_joueur(){
        console.log("le joueur du nom "+this.nom+" de couleur "+this.couleur+" a un montant de "+this.montant+" et des proprietes ");
        let k = 0;
        while(k < this.proprietes.length)
        {
            console.log(this.proprietes[k].nomcase);
            k++;
        }
    }

    modifierCouleur(couleur){
    this.couleur= couleur;
    }

    payertaxe (){
        if(this.montant * 0.1 > 200)this.montant = this.montant - 200;
        else {
            this.montant = this.montant - this.montant * 0.1;  
            if(this.montant<0)this.Perdre();  
        }
    }
}

class pion{
    constructor (caseactuelle) {
        this.caseactuelle = caseactuelle;
        }    
        set_case(casee)
        {
            this.caseactuelle = casee;
        }  
        get_case(){
            return this.caseactuelle;
        }
}


class monopoly {
constructor () {
this.listeCases = [];
this.listejoueur = [];
this.listeCartes_caissecommunaute = [];
this.listeCartes_chance = [];
this.DéLancé = false;
this.De1 = 0;
this.De2 = 0;
}

lancerDé(joueur){
    
this.De1 = Math.floor(Math.random() * 6) + 1;
this.De2 = Math.floor(Math.random() * 6) + 1;
if (this.De1 == this.De2)joueur.nbDouble++;
this.Délancé = true;
}




reinitialiser_dé ()
{
    this.Délancé = false;
}
getdé(n){
    if(n==1)return this.De1;
    else return this.De2; 
}
bouger_pion(joueur){
    if(this.Délancé == true){
 let index = this.listeCases.findIndex(m=>m.equals(joueur.pion.get_case()));
     let k =index + this.De1 + this.De2;
     console.log(k);
     if(k > 41) {
         k = k - 41;
         joueur.pion.set_case(this.listeCases[k]);
         joueur.gagner(200);
     }else{
     if(k==41) joueur.pion.set_case(this.listeCases[0]);
     else joueur.pion.set_case(this.listeCases[k]);
     }
     this.bonusmaluscase(joueur);
     this.Délancé = false;
    }
}
bonusmaluscase(joueur)
{console.log(joueur.pion.get_case().nomcase);
    if(joueur.pion.get_case() instanceof Depart){let i=200;joueur.gagner(i);}
      
    if(joueur.pion.get_case().nomcase ==="chance"){console.log("chance");this.tirerCarte(joueur,"chance");}

    if(joueur.pion.get_case().nomcase ==="caisse communauté"){console.log("caisse communaute");this.tirerCarte(joueur,"caisse communauté"); 
    }
    if(joueur.pion.get_case().nomcase ==="taxe de luxe"){console.log("taxe");joueur.Payer(75);}

    if(joueur.pion.get_case().nomcase=== "taxe") joueur.payertaxe();

    if(joueur.pion.get_case().nomcase==="Aller prison") joueur.aller_Prison();

    if (joueur.pion.get_case() instanceof propriete){console.log("propriete"); this.traitement_propriete(joueur,joueur.pion.get_case());
}
}



traitement_propriete(joueur,prop)
{
   if(joueur.verif(prop)==true)return 0;
   else{
      let j=1;let i = 0;
      while((j==1)&&(i<this.listejoueur.length))
      {
          if(this.listejoueur[i].verif(prop)==true)
          {
              j=0;
              if(prop instanceof gare)joueur.payer(this.Calculer_loyerG(prop));
              else
              if(prop instanceof Terrain)joueur.payer(this.Calculer_loyerT(prop));
              else
              if(prop instanceof Companie)joueur.payer(this.Calculer_loyerC(this.listejoueur[i]));
              return 1;
          }
          else i++;
      }
      if(j==1){console.log("terrain libre");
      return 2;
      }
   }
    
}

insertion_carte_chance(){
let cartec = new Cartes("chance","chance","Reculer de 3 cases");
this.listeCartes_chance.push(cartec);
cartec = new Cartes("chance","chance","Gagner 100$");
this.listeCartes_chance.push(cartec);
cartec = new Cartes("chance","chance","Avancer de 4 cases");
this.listeCartes_chance.push(cartec);
cartec = new Cartes("chance","chance","Perdre 50$");
this.listeCartes_chance.push(cartec);
cartec = new Cartes("chance","chance","Sortie de prison");
this.listeCartes_chance.push(cartec);
cartec = new Cartes("chance","chance","Avancer de 6 cases");
this.listeCartes_chance.push(cartec);
cartec = new Cartes("chance","chance","Sortie de prison");
this.listeCartes_chance.push(cartec);
cartec = new Cartes("chance","chance","Gagner 60$");
this.listeCartes_chance.push(cartec);
}


bonusmaluscarte_chance(joueur,carte){
console.log(carte.texte);    
if(carte.texte==="Reculer de 3 cases") {
    let index = this.listeCases.findIndex(m=>m.equals(joueur.pion.get_case()));
     joueur.pion.set_case(this.listeCases[index - 3]) ;  console.log(index - 3);
} 
if(carte.texte==="Avancer de 4 cases") {
    let index = this.listeCases.findIndex(m=>m.equals(joueur.pion.get_case()));
     joueur.pion.set_case(this.listeCases[index +4]) ;  console.log(index +4);
} 
if(carte.texte==="Avancer de 6 cases") {
    let index = this.listeCases.findIndex(m=>m.equals(joueur.pion.get_case()));
     joueur.pion.set_case(this.listeCases[index +6]) ;  console.log(index+6);
} 
if(carte.texte==="Gagner 100$"){joueur.gagner(100);console.log(joueur.montant);}
if(carte.texte==="Gagner 60$"){console.log("okk");joueur.gagner(60);console.log(joueur.montant);}
if(carte.texte==="Perdre 50$"){joueur.payer(50);console.log(joueur.montant);}
if(carte.texte==="Sortie de prison"){joueur.ajouter_carte_sortieprison();console.log(joueur.cartesSortiePrison.length);}
}

insertion_carte_caisse_communaute(){
    let cartec = new Cartes("caisse communaute","caisse communaute","Vous etes liberer de prison");
    this.listeCartes_chance.push(cartec);
    cartec = new Cartes("caisse communaute","caisse communaute","Recevez 200$");
    this.listeCartes_chance.push(cartec);
    cartec = new Cartes("caisse communaute","caisse communaute","Retournez à la case de départ");
    this.listeCartes_chance.push(cartec);
    cartec = new Cartes("caisse communaute","caisse communaute","Retournez à Mediterranean Avenue");
    this.listeCartes_chance.push(cartec);
    cartec = new Cartes("caisse communaute","caisse communaute","Chaque joueur doit vous donnez 20$");
    this.listeCartes_chance.push(cartec);
    cartec = new Cartes("caisse communaute","caisse communaute","Payer une amande de 50$");
    this.listeCartes_chance.push(cartec);
    cartec = new Cartes("caisse communaute","caisse communaute","Tirer une carte chance");
    this.listeCartes_chance.push(cartec);
    cartec = new Cartes("caisse communaute","caisse communaute","Aller en prison");
    this.listeCartes_chance.push(cartec);
    
}

bonusmaluscarte_CC(joueur,carte){
    if(carte.texte==="Vous etes liberer de prison")joueur.ajouter_carte_sortieprison();
    if(carte.texte==="Tirer une carte chance")this.tirerCarte("chance",joueur);
    if(carte.texte==="Payer une amande de 50$")joueur.payer(50);
    if(carte.texte==="Recevez 200$")joueur.gagner(200);
    if(carte.texte==="Aller en prison")joueur.aller_Prison();
    if(carte.texte==="Retournez à la case de départ")joueur.pion.set_case(this.listeCases[0]);
    if(carte.texte==="Retournez à Mediterranean Avenue")joueur.pion.set_case(this.listeCases[1]);
    if(carte.texte==="Chaque joueur doit vous donnez 20$"){
        let index = this.listejoueur.findIndex(m=>m.equals(joueur));
        let i = 0;
        while(i<this.listejoueur.length)
        {
            if(i != index){
                this.listejoueur[i].payer(20);
                joueur.gagner(20);
            }
            i++;
        }
    }


}

tirerCarte(joueur,type){
    if(type==="caisse communauté") {
       let carte = this.listeCartes_caissecommunaute.pop();
       console.log(carte.texte);
       this.bonusmaluscarte_CC(joueur,carte);
    }
    if(type==="chance") {
      let  carte = this.listeCartes_chance.pop();
      console.log(carte.texte);
      this.bonusmaluscarte_chance(joueur,carte);    
    }
}

Calculer_loyerC(joueur){
this.lancerDé();
let i = this.De1 + this.De2;
if(joueur.get_nbC()==1)return i *4 ;
if(joueur.get_nbC()==2)return i*10;

}

Calculer_loyerT(terrain){
if((terrain.get_nbM()==0)&&(terrain.get_nbH()==0))return terrain.get_loyerNu();
if((terrain.get_nbM() ==1)&&(terrain.get_nbH()==0))return terrain.get_loyer1M();
if((terrain.get_nbM() ==2)&&(terrain.get_nbH()==0))return terrain.get_loyer2M();
if((terrain.get_nbM() ==3)&&(terrain.get_nbH()==0))return terrain.get_loyer3M();
if((terrain.get_nbM() ==4)&&(terrain.get_nbH()==0))return terrain.get_loyer4M();
if(terrain.get_nbH()>0)return terrain.get_loyerH();

}

Calculer_loyerG(gare)
{
     return gare.get_loyer();

}


construire_plateau()
{
    
    let case1 = new Depart("Depart");
    this.listeCases.push(case1);
    let couleur1= new Couleur("violet",50,50);
    let caseP = new Terrain("Mediterranean Avenue",60,4,20,50,100,200,300,0,0,couleur1);
    this.listeCases.push(caseP);
    let casec = new Case("caisse communaute");
    this.listeCases.push(casec);
    caseP = new Terrain("Baltic Avenue",60,5,10,40,100,150,300,0,0,couleur1);
    this.listeCases.push(caseP);
    let caseT = new Case("taxe");
    this.listeCases.push(caseT);
    let caseG = new gare("Reading Railroad",200,50);
    this.listeCases.push(caseG);
    let couleur2= new Couleur("Bleu ciel",70,70);
    caseP = new Terrain("Oriental Avenue",100,8,15,50,130,170,350,0,0,couleur2);
    this.listeCases.push(caseP);
    let casech = new Case("chance");
    this.listeCases.push(casech);
    caseP = new Terrain("Vermont Avenue",100,10,18,60,140,160,330,0,0,couleur2);
    this.listeCases.push(caseP);
    caseP = new Terrain("Connecticut Avenue",120,15,20,70,150,170,350,0,0,couleur2);
    this.listeCases.push(caseP);
    let prison = new Case("Prison");
    this.listeCases.push(prison);
    let couleur3 = new Couleur("rose",90,90);
    caseP = new Terrain("St. Charles Place",140,20,40,80,160,200,340,0,0,couleur3);
    this.listeCases.push(caseP);
    let case_comp = new Companie("Electricite",150); 
    this.listeCases.push(case_comp);
    caseP = new Terrain("States Avenue",140,30,40,90,150,200,350,0,0,couleur3);
    this.listeCases.push(caseP);
    caseP = new Terrain("Virginia Avenue",160,40,50,100,150,200,400,0,0,couleur3);
    this.listeCases.push(caseP);
    caseG = new gare("Pennsylvania Railroad",200,50);
    this.listeCases.push(caseG);
    let couleur4 = new Couleur("orange",100,100);
    caseP = new Terrain("St. James Place",180,40,60,110,190,240,380,0,0,couleur4);
    this.listeCases.push(caseP);
    this.listeCases.push(casec);
    caseP = new Terrain("Tennessee Avenue",180,40,60,110,190,240,380,0,0,couleur4);
    this.listeCases.push(caseP);
    caseP = new Terrain("New York Avenue",200,50,100,150,200,300,400,0,0,couleur4);
    this.listeCases.push(caseP);
    let casePark = new Case("Free Parking");
    this.listeCases.push(casePark);

    let couleur5 = new Couleur("rouge",130,130);
    caseP = new Terrain("Kentucky Avenue",220,50,100,150,200,250,350,0,0,couleur5);
    this.listeCases.push(caseP);
    this.listeCases.push(casech);
    caseP = new Terrain("Indiana Avenue",220,50,100,150,200,250,350,0,0,couleur5);
    this.listeCases.push(caseP);
    caseP = new Terrain("Illinois Avenue",240,80,160,240,280,340,420,0,0,couleur5);
    this.listeCases.push(caseP);
    caseG = new gare("B.& O. Railroad",200,50);
    this.listeCases.push(caseG);
    let couleur6 = new Couleur("jaune",90,90);
    caseP = new Terrain("Atlantic Avenue",260,40,60,80,200,250,350,0,0,couleur6);
    this.listeCases.push(caseP);
    let case_compe = new Companie("Eau",150); 
    this.listeCases.push(case_compe);
    caseP = new Terrain("Ventnor Avenue",260,40,60,80,200,250,350,0,0,couleur6);
    this.listeCases.push(caseP);
    caseP = new Terrain("Marvin Gardens",280,50,100,150,200,300,400,0,0,couleur6);
    this.listeCases.push(caseP);
    let caseap = new Case ("Aller prison");
    this.listeCases.push(caseap);
    let couleur7 = new Couleur("vert",60,60);
    caseP = new Terrain("Pacific Avenue",300,50,60,120,170,250,400,0,0,couleur7);
    this.listeCases.push(caseP);
    this.listeCases.push(casec);
    caseP = new Terrain("North Carolina Avenue",300,50,60,110,190,250,400,0,0,couleur7);
    this.listeCases.push(caseP);
    caseP = new Terrain("Pennsylvania Avenue",320,50,100,150,200,300,400,0,0,couleur7);
    this.listeCases.push(caseP);
    this.listeCases.push(casech);
    let couleur8 = new Couleur("bleu",100,100);
    caseP = new Terrain("Park Place",350,50,100,150,200,300,400,0,0,couleur8);
    this.listeCases.push(caseP);
    let case_tax = new Case ("taxe de luxe");
    this.listeCases.push(case_tax);
    caseP = new Terrain("Boardwalk",400,50,100,150,200,300,400,0,0,couleur8);
    this.listeCases.push(caseP);


}
jouer (){
    let s = 0;
   
   //while(this.listejoueur.length > 1){
    while(s<this.listejoueur.length){
     this.listejoueur[s].afficher_joueur();
        if(this.listejoueur[s].Perdre() == false){
            console.log(" joueur non perdu");
console.log(" Tour du joueur "+s);
this.lancerDé(this.listejoueur[s]);
console.log("Dé lancé");
console.log(this.De1);
console.log(this.De2);
this.listejoueur[s].verif_nbDouble();
console.log(this.listejoueur[s].nbDouble);

if(this.listejoueur[s].enPrison == true){
    console.log("voulez vous utiliser une carte sortie prison");
    console.log("voulez vous payer pour sortir de prison");
    let carte, payer;
    this.listejoueur[s].sortir_Prison(payer,carte);
}
    this.bouger_pion(this.listejoueur[s]);
    console.log ("pion bouger ");
    if(this.listejoueur[s].pion.caseactuelle instanceof propriete){
    if (this.listejoueur[s].verif(this.listejoueur[s].pion.caseactuelle)==false)
    {let k = 0;let j = true;
        while((k < this.listejoueur.length)&&(j==true))
        {
            if(this.listejoueur[k].verif(this.listejoueur[s].pion.caseactuelle)==true)
            j = false;
           else k++; 
        }
        if(j==true){
            console.log("Voulez vous acheter cette propriete");
            this.listejoueur[s].acheter(this.listejoueur[s].pion.caseactuelle);
        }
        else{
            console.log("voulez vous vendre cette propriete");
            console.log("proposer un prix");
            this.listejoueur[s].acheter(this.listejoueur[s].pion.caseactuelle);
            let prix_prop;
            this.listejoueur[k].vendre_propriete(this.listejoueur[s].pion.caseactuelle,prix_prop);
        }
    }
    else{
         if(this.listejoueur[s].pion.caseactuelle.get_nbM()<4)
         {
             console.log("Voulez vous acheter une maison");
             this.listejoueur[s].acheter_maison(this.listejoueur[s].pion.caseactuelle);
         }
         else{
             console.log("Voulez vous acheter un hotel");
             this.listejoueur[s].acheter_hotel(this.listejoueur[s].pion.caseactuelle);
    
         }
    }
    s++;
}
else this.listejoueur.splice(s,1);
 }
 
 s=0;
    }
    
 //}
}


}
//************* Case1 */
/*
let rue1 = "la chapelle";
let prix1 = 410;
let c1 = "Bleu";
let prixm1 = 50;
let prixh1= 90;
let couleur1 = new Couleur(c1,prixm1,prixh1);
let case1 = new Case(rue1);
let prop1 = new propriete(rue1,prix1);
let terrain1 =new Terrain(rue1,prix1,20,30,40,50,60,70,0,0,couleur1);
let joueur1 = new Joueur("Kami");
/*joueur1.acheter(terrain1);
joueur1.afficher_prop();
joueur1.acheter_maison(terrain1);
joueur1.afficher_prop();
joueur1.acheter_maison(terrain1);
joueur1.afficher_prop();
joueur1.acheter_maison(terrain1);
joueur1.afficher_prop();
joueur1.acheter_maison(terrain1);
joueur1.afficher_prop();
joueur1.acheter_hotel(terrain1);
joueur1.afficher_prop();
let carte = new Cartes(rue1,"50","sortie prison");
joueur1.ajouter_carte_sortieprison(carte);
joueur1.aller_Prison();
Jeu = new monopoly();
console.log("De1 : "+Jeu.De1+" De2 : "+Jeu.De2);
Jeu.lancerDé();
console.log("De1 : "+Jeu.De1+" De2 : "+Jeu.De2);
joueur1.choisir_pion();
Jeu.bouger_pion(joueur1);
*/
let jeu = new monopoly();
let prixm1 = 50;
let prixh1= 90;
let couleur1 = new Couleur("bleu",prixm1,prixh1);
jeu.insertion_carte_caisse_communaute();
jeu.insertion_carte_chance();
jeu.construire_plateau();
let case1 = new Depart("Depart");
let pion1 = new pion(case1);
let joueur1 = new Joueur("moi",couleur1,pion1);
jeu.listejoueur.push(joueur1);
jeu.jouer();
