import{saveTask,getTasks,onGetTasks,DeleteTask,getTask,updateTask} from "/js/firebase.js";

const modal=document.getElementById('modal');
const openModal=document.getElementById('openRegisterModal');
const closeModal =document.getElementById('closeregisterModal');
const tasksContainer =document.getElementById('tasks-container');
const taskForm = document.getElementById('registerForm');
let editStatus = false;
let id='';


window.addEventListener('DOMContentLoaded',async()=>{
   onGetTasks((querySnapShot)=>{
        let html='';
        querySnapShot.forEach(doc=>{
            const task = doc.data();
           html+=`<center>
           <div class="card card-body mt2 border-primary">${task.nombre}
                    <p class="h5">${task.email}</p>
                    <div>
                    <button class='btn btn-primary btn-delete' data-id="${doc.id}">delete</button>
                    <button class='btn btn-secondary btn-edit' data-id="${doc.id}">edit</button>
                    </div>
                    <div>
                    <center>
                    `;
    
    
        });
    
        tasksContainer.innerHTML=html;
       const btnDelete = tasksContainer.querySelectorAll('.btn-delete');
        btnDelete.forEach(btn =>{
            btn.addEventListener('click',({target:{dataset}})=>{
                DeleteTask(dataset.id);

            })
        })

        const btnEdit = tasksContainer.querySelectorAll('.btn-edit');
        btnEdit.forEach(btn=>{
            btn.addEventListener('click',async ({target:{dataset}})=>{
                 const doc = await getTask(dataset.id);
                 const lastTask = doc.data();

                 taskForm['nombre'].value = lastTask.nombre;
                 taskForm['apellidoPat'].value=lastTask.apellidoPat;
                 taskForm['apellidoMat'].value=lastTask.apellidoMat;
                taskForm['cel'].value=lastTask.cel;
                taskForm['email'].value=lastTask.email;
                taskForm['desc'].value=lastTask.desc;
                editStatus=true;
                id=doc.id;
                showRegisterModal();

            })
        })

    });
});
    

taskForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nombre = taskForm['nombre'].value;
    const apellidoPat = taskForm['apellidoPat'].value;
    const apellidoMat = taskForm['apellidoMat'].value;
    const phone = taskForm['cel'].value;
    const email = taskForm['email'].value;
    const description = taskForm['desc'].value;


    if(!editStatus){
        saveTask(nombre,apellidoPat,apellidoMat,phone,email,description);
    }else{
        updateTask(id,{nombre,apellidoPat,apellidoMat,phone,email,description});
        editStatus=false;
    }

    taskForm.reset();



    showRegisterModal();
});

const showRegisterModal = ()=>{
    modal.classList.toggle('is-active')
}

openModal.addEventListener('click',(showRegisterModal));
closeModal.addEventListener('click',(showRegisterModal));

