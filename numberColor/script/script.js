
$("#bt").on("click",function(){
    selecionaNegativos();
})


function selecionaNegativos(){
    var tr = document.querySelectorAll("tbody>tr");
    for(i=0;i<tr.length;i++){
        console.log(tr[i]);
        p1 = parseInt(tr[i].querySelector(":nth-child(1)").textContent);
        p2 = parseInt(tr[i].querySelector(":nth-child(2)").textContent);
        p3 = parseInt(tr[i].querySelector(":nth-child(3)").textContent);
        p4= parseInt(tr[i].querySelector(":nth-child(4)").textContent);
        
        console.log(p1)
        if(p1<0){
            tr[i].querySelector(":nth-child(1)").classList.add("text-danger");
            if(p2<0){
                tr[i].querySelector(":nth-child(2)").classList.add("text-danger");
                if(p3<0){
                    tr[i].querySelector(":nth-child(3)").classList.add("text-danger");
                    if(p4<0){
                        tr[i].querySelector(":nth-child(4)").classList.add("text-danger");
                        
                    }
                }
            }

        }else if(p2<0){
            tr[i].querySelector(":nth-child(2)").classList.add("text-danger");
            if(p3<0){
                tr[i].querySelector(":nth-child(3)").classList.add("text-danger");
                if(p4<0){
                    tr[i].querySelector(":nth-child(4)").classList.add("text-danger");
                    
                }
            }


        }else if(p3<0){
            tr[i].querySelector(":nth-child(3)").classList.add("text-danger");
            if(p4<0){
                tr[i].querySelector(":nth-child(4)").classList.add("text-danger");
                
            }

        }else if(p4<0){
            tr[i].querySelector(":nth-child(4)").classList.add("text-danger");
            
        }
}
}