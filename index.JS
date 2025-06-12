const PU ="1000";//prix unitaire
document.getElementById(calculebutton).addEventListener("click",() =>{
    alert('veillez entrer le nombre de produit');
    let tarifTotal = 100 * PU;//calcul du tarif total
    if(quantité<=0){
        alert("veiller entre la quantité)")
    }
    alert("le tarif total est de " + tarifTotal + "FCFA")

})