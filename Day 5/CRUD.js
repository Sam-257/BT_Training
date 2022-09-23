let apiurl = 'https://jsonplaceholder.typicode.com/users'

let xhr = new XMLHttpRequest()


//  GET REQUEST
let users;
xhr.open('GET',apiurl,true)

xhr.onload = function(){
      users = JSON.parse(xhr.responseText)
      if(xhr.status ==200){
         formatData(users)
      }
      else{
         console.log(users)
      }
}
xhr.send()

function createElementByTag(tagname){
    return document.createElement(tagname)
}

function formatData(users){
   
  for( let i in users){
       let trNode = createElementByTag('tr')
       let tdNode1 = createElementByTag('td')
       let tdNode2= createElementByTag('td')
       let tdNode3 = createElementByTag('td')
       let tdNode4 = createElementByTag('td')
       let tdNode5 = createElementByTag('td')

       let btnEdit = createElementByTag('button')
       btnEdit.innerHTML = 'Edit'
       let btnDelete = createElementByTag('button')
       btnDelete.innerHTML = 'Delete'
    
       btnEdit.onclick = editRecord(users[i]);
       tdNode5.appendChild(btnEdit)
       tdNode5.appendChild(btnDelete)
       


       tdNode1.innerHTML = users[i]['id']
       tdNode2.innerHTML = users[i]['name']
       tdNode3.innerHTML = users[i]['username']
       tdNode4.innerHTML = users[i]['email']
       trNode.appendChild(tdNode1)
       trNode.appendChild(tdNode2)
       trNode.appendChild(tdNode3)
       trNode.appendChild(tdNode4)
       trNode.appendChild(tdNode5)
       document.getElementById('tableData').appendChild(trNode)
  }

}

function editRecord(user){
    return () => {
        let input1 = createElementByTag('input')
        let input2 = createElementByTag('input')
        let input3 = createElementByTag('input')
        let btnUpdate = createElementByTag('button')
        btnUpdate.innerHTML = 'Update'
        input1.value = user.name;
        input2.value = user.username;
        input3.value = user.email;
        document.body.appendChild(input1)
        document.body.appendChild(input2)
        document.body.appendChild(input3)
        document.body.appendChild(btnUpdate)

    }
    
}

