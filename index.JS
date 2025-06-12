       //Evénementau clic sur lr button
        
        document.getElementById('calculateButton').addEventListener('click' ,()=>{
            const prixunitaire=1700;
            let quantité=prompt ("veuillez mettre la quantité? ");
           
       
            let tariftotal=2000;
            if(quantité<=0){
                alert("veuillez entrer une quantité valide");
            }
            else if(quantité >=1 && quantité <= 5){
             tariftotal=quantité*prixunitaire;
                alert("tariftotal : "+ tariftotal);
            }
            if(quantité >5){
                tariftotal=(quantité*prixunitaire)*0,90;
                alert("le tarif total est:[2000]");
            }

        })