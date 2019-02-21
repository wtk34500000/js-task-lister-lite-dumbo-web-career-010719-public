
let taskList=[];
const listli = [];
let listname = "list1"
listadder(listname)
function listadder(name)
{
    listname = name
    taskList=[];
    const ListData = 
    {
        "name": name,
        "list": taskList
    }

    
    listli.push(ListData)
    console.log(listli)
}
function eventHandler(e){
    e.preventDefault()
    const taskDest=e.target.querySelector('#new-task-description').value
    taskList.push(taskDest)
    // console.log(taskDest)
    print(taskDest)

}
function print(name)
{
        const taskUl= document.querySelector('#tasks');
        const taskLi= document.createElement('li');

        const deleteB = document.createElement('button');
        deleteB.innerText="Delete"
        deleteB.addEventListener("click", deleteLi)
        taskLi.innerText = name+" "

        taskLi.append(deleteB)
        taskUl.append(taskLi)
}
function changelist(e){
    e.preventDefault()
    let name = e.target.id
    listname = name
    deleteAll()
    for(let x = 0; x < listli.length; x++)
    {
        if(listli[x].name === name){
        taskList = listli[x].list
        }
    }
    for(let x = 0; x < taskList.length; x++){
        print(taskList[x])
    }
}
function eventHandler2(e){
    e.preventDefault()
    const listDest=e.target.querySelector('#new-list-description').value
    listadder(listDest)
    deleteAll()
    const btt = document.createElement("button")
    btt.id = `${listDest}`
    let butt = document.querySelector("#allist")
    btt.innerText=`${listDest}`;
    btt.addEventListener("click", changelist)
    butt.append(btt)
}
function deleteAll(){
    const curr = document.querySelector("#tasks")
    let all = curr.querySelectorAll("li")
    for(let x = 0; x < all.length; x++){
        all[x].remove();
    }
}
function deleteLi(e){
    for(let x = 0; x < taskList.length; x++)
    {
        
        if(e.target.parentElement.innerText.includes(taskList[x]) === true)
        {
            task = taskList[x]
            newList = taskList.slice(0, x)

            let newlist2 = newList.concat(taskList.slice(x+1, taskList.length))
            console.log(newlist2)
            taskList = newlist2
            console.log(taskList)
            break;
        }
    }
    for (let i=0; i < listli.length; i++){
        if(listli[i].name === listname)
        {
            listli[i].list = taskList
        }
    }
    e.preventDefault();
    e.target.parentElement.remove();

}


const formTask = document.getElementById("create-task-form")
formTask.addEventListener("submit", eventHandler)

const formList = document.getElementById("create-list-form")
formList.addEventListener("submit", eventHandler2)




