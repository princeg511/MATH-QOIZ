p1_name=localStorage.getItem("player1_name")
p2_name=localStorage.getItem("player2_name")
p1_score=0
p2_score=0
document.getElementById("player1_name").innerHTML=p1_name
document.getElementById("player2_name").innerHTML=p2_name
document.getElementById("player1_score").innerHTML=p1_score
document.getElementById("player2_score").innerHTML=p2_score
document.getElementById("player_question").innerHTML=p1_name
document.getElementById("player_answer").innerHTML=p2_name
function send(){
    get_word=document.getElementById("word").value
    word=get_word.toLowerCase()
    at1=word.charAt(1) 
    at2=word.charAt(word.length/2)        
    at3=word.charAt(word.length-1)
    rat1=word.replace(at1,"_")     
    rat2=rat1.replace(at2,"_")     
    rat3=rat2.replace(at3,"_")
    question_word="<h4 id='word_display'>q."+rat3+"</h4>";
    input_box="<br>answer:<input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    


}
player_answer=p2_name
player_question=p1_name
function check(){
get_answer=document.getElementById("input_check_box").value
    answer=get_answer.toLowerCase()    
if(word==answer){
    if(player_answer==p1_name){
        p1_score++
        document.getElementById("player1_score").innerHTML=p1_score
        player_question=p1_name
        player_answer=p2_name
       document.getElementById("player_question").innerHTML=p1_name
document.getElementById("player_answer").innerHTML=p2_name 
    }
    if(player_answer==p2_name){
        p2_score++
        document.getElementById("player2_score").innerHTML=p2_score
        player_question=p2_name
        player_answer=p1_name
       document.getElementById("player_question").innerHTML=p2_name
document.getElementById("player_answer").innerHTML=p1_name 
    }
}
else{
    if(player_answer==p1_name){
        p1_score--
        document.getElementById("player1_score").innerHTML=p1_score
        player_question=p1_name
        player_answer=p2_name
       document.getElementById("player_question").innerHTML=p1_name
document.getElementById("player_answer").innerHTML=p2_name 
    }
    if(player_answer==p2_name){
        p2_score--
        document.getElementById("player2_score").innerHTML=p2_score
        player_question=p2_name
        player_answer=p1_name
       document.getElementById("player_question").innerHTML=p2_name
document.getElementById("player_answer").innerHTML=p1_name 
    }
}
}