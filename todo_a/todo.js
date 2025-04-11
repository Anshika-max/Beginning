let list = [];
let a = prompt("Enter your request");
console.log(a);
while(true)
{
    if(a=="list")
    {
        for(i of list)
        {
            console.log(i);
        }
    }
    else if(a=="add")
    {
        let b=prompt("Enter what you want to add");
        list.push(b);
    }
    else if(a=="delete")
    {
        let c= prompt("Enter the index place you want to delete");
        list.slice(c,1);
    }
    else if(a=="quit")
    {
        console.log("Request is Finished");
        break;
    }
    else{
        console.log("wrong input");
    }
}