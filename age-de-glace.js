// function check(){
    //     let nbr;
    //     nbr = document.getElementById("age").value;
    //     console.log("nbr = " + nbr);
    //     if(nbr < 18)
    //     {
    //        alert("Vous n'êtes pas majeur");
    //     }
    //     else
    //     {
    //        alert("Vous êtes majeur");
    //     }
        
    // }
    
    
    function age (){
    
        var j1 = document.getElementById('jour').value;        
        var m1 = document.getElementById('mois').value;
        var a1 = document.getElementById('année').value;
    
        // CHECK  DES CARACTERES
        var j3 = document.getElementById('jour').value;
            if(j3 == "")
            {
                alert("Erreur de saisie");
                return false;
            }
            var m3 = document.getElementById('mois').value;
            if(m3 == "")
            {
                alert("Erreur de saisie");
                return false;
            }
            var a3 = document.getElementById('année').value;
            if(a3 == "")
            {
                alert("Erreur de saisie");
                return false;
            }
    
    
    
    
        // DATE
        var date =  new Date();
        var j2 = date.getDate();
        var m2 = 1 + date.getMonth();
        var a2 = date.getFullYear();
        var mois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
// CALCULS MATHEMATIQUES DE NIVEAU DIVIN 
    if (j1> j2){
    j2 = j2 + mois[m2 - 1];
    m2 = m2 - 1;
    }
    if (m1> m2){
        m2 = m2 + 12;
        a2 = a2 - 1;
        }
    
        var j= j2 - j1;
        var m= m2 - m1;
        var a= a2 - a1;
    
        document.getElementById("age").innerHTML = 'Votre age est ' +a+ ' ans ' +m+ ' mois ' +j+ ' jours';
    
    
    
        // CONDITION
        if(a < 18)
        {
           alert("Vous n'êtes pas majeur");
        }
        else
        {
           alert("Bravo! Tu peux accéder à notre site de campagne!");
        }
    }
    
    
    
    document.addEventListener('keydown', (event) => {
        var code = event.code;
       
        // Alert the key name and key code on keydown
        if (code === 'Enter') { age();
                }
      }, false);
    