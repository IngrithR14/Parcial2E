function loadData(){
    return new Promise((resolve,reject)=>{
      fetch('https://api-dishes.vercel.app/')
      .then( result => result.json( ) )
      .then( result => resolve(result) ) 
      .catch( err  => reject(err) )
    })
  }
  
  const loadFields = ()=>{
    const idDish= document.getElementById('id').value
  
    const name = document.getElementById('name').value
  
    const calories = parseInt(document.getElementById('calories').value)
    const value = parseInt(document.getElementById('value').value)
    const comments = document.getElementById('comments').value
    const s1 = document.getElementById('vegetarian').value
    const code=s1.value==='true';
    
    const data = {"idDish":idDish,"name":name,"calories":calories,"isVegetarian":code,"value":value,"comments":comments}
  
    return JSON.stringify(data)
  }
  
  document.getElementById('btnSend').addEventListener('click',()=>{
    const URI = "https://api-dishes.vercel.app/"
  
    fetch(URI,
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:loadFields()
      }).then( result => result.json())
        .then( result => {
          if( result.state ){
            alert('Success!!!!')
          }else{
            alert('El id ya existe error 208 ')
          }
        }).catch(err=> console.log(err))
  })
  
    var selecN=document.getElementById('id2');
    var body2 =document.getElementById('datosf');
  
    body2.innerHTML="";
    if(!selecN.selectedIndex===0){
      loadData()
        .then((result) => {
          if( result.state ){
            const tBody = document.getElementById('datost')

            result.data.forEach( dish => {
              const row = document.createElement('tr')

              const colId = document.createElement('td')

              colId.appendChild(document.createTextNode(dish.idDish))

              row.append(colId)

              const colName = document.createElement('td')

              colName.appendChild( document.createTextNode(dish.name))
              row.appendChild(colName)
              const colCalories = document.createElement('td')

              colCalories.appendChild( document.createTextNode(dish.calories))
              row.appendChild(colCalories)
              const colVegetarian= document.createElement('td')

              colVegetarian.appendChild( document.createTextNode(dish.isVegetarian))
              row.appendChild(colVegetarian)
              const colValue = document.createElement('td')

              colValue.appendChild( document.createTextNode(dish.value))
              row.appendChild(colValue)
              const colComments = document.createElement('td')

              colComments.appendChild( document.createTextNode(dish.comments))
              row.appendChild(colComments)

              tBody.appendChild(row)
            })
          }else{
            alert('Ho!! Algo ha salido mal')
          }
        })
        .catch(err=>console.log(err))
    }
  