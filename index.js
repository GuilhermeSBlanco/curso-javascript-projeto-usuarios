const form = document.getElementById('form-user-create')
const fields = document.querySelectorAll('#form-user-create [name]')
var user = {}

function addLine(user) {
    console.log(user)
    
    let tbUsers = document.getElementById('tb-users')

    tbUsers.innerHTML += `                  
            <tr>
                <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.admin}</td>
                <td>${user.birth}</td>
                <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            </tr>`
}

form.addEventListener('submit', e => { 
    e.preventDefault()
   
    fields.forEach((field) => {
        user[field.name] = field.value
    }) 

    let userData = new User(
        user.name, 
        user.gender, 
        user.data, 
        user.country, 
        user.email, 
        user.password, 
        user.photo, 
        user.admin)

    addLine(userData)
})





