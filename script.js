function game(){
    var random1_final = Math.floor(Math.random() * 6) + 1;

        //Selecting image 01 using DOM
    var image_num = "images/dice"+random1_final+".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", image_num)

    var random2_final = Math.floor(Math.random() * 6) + 1;

    //Selecting image 01 using DOM
    var image_num = "images/dice"+random2_final+".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", image_num)

    //Declaring the results
    var heading = document.getElementById("head");
    if (random1_final === random2_final){
        heading.innerHTML = "Match Drawn";
    }
    else if(random1_final > random2_final){
        heading.innerHTML = "Player 1 wins";
    }
    else{
        heading.innerHTML = "Player 2 wins";
    }
}
game();