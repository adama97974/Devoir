 
var tabNumeros = ["770000001","770000002", "770000003", "770000004","770000005"];
var tabSoldes = [5000000, 1000000, 20000,3000000, 5000000];
var tabCodes = ["0001","0002","0003","0004","0005"];
var numCourant;

 function menu() {
   var textMenu = ""+
    "1 : Solde du compte\n"+
    "2 : Transfert d'arent\n"+
    "3 : Paiement facture\n"+
    "4 : Option";
    
    var rep = window.prompt(textMenu);
    return rep;

 }

 function etapeSuivante(msg){
   var textEtape = ""+msg+"\n"+
    "Retourner au menu principal ?\n"+
    "1: OUI\n"
    var rep2 = window.prompt(textEtape);
        if(rep2 == "1"){
            main();
        } 
            
        else{
            confirm("Au revoir")
        }
   
}


 function afficheSolde(num) {
    var indice = tabNumeros.indexOf(num);
    if(indice != -1){
        var code = window.prompt("Donnez votre code: ");
        if(code==tabCodes[indice]){
            let msg = "Votre solde est de : "+tabSoldes[indice];
            etapeSuivante(msg);
        }
    }else{
         let msg = "Votre numéro est n'existe pas!";
         etapeSuivante(msg);

    }
   
 }
 function TransfertArgent(num) {
    var indice = tabNumeros.indexOf(num);
    if(indice != -2){
        
            main();
       
    }else{
         let msg = "Votre numéro est n'existe pas!";
         etapeSuivante(msg);

    }
   
 }



 function main(){
     var rep = menu();
     var numCourant = document.getElementById("num").value;
     switch(rep){
        case "1":
            afficheSolde(numCourant);
            break;
            case "2":
                menu();
            break;
     }
 }


