var users=[
    {
        "name":"John Doe",
        "gender":"male",
        "image":"/images/card.png"
    },
    {
        "name":"Jane Doe",
        "gender":"female",
        "image":"/images/toggle.png"
    }
]
var curId=0;
function toggle(){
    //toggle curId from 0 to 1 and 1 to 0
    curId = (curId+1) % 2;
    //toggle the rendered user details

    //image
    var user=users[curId];
    document.getElementById("user-img").src=user.image;
    //to do: update name and gender
    //name
    document.getElementById("user-name").innerText=user.name;
    //gender
    document.getElementById("user-gender").innerText=user.gender;
}