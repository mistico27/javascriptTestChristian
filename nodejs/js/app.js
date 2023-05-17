
import{saveTask,getTasks} from "/js/firebase.js";

const modal=document.getElementById('modal');
const openModal=document.getElementById('openRegisterModal');
const closeModal =document.getElementById('closeregisterModal');

const taskForm = document.getElementById('registerForm');

window.addEventListener('DOMContentLoaded',async()=>{
    const querySnapShot = await getTasks();
    querySnapShot.forEach(doc=>{
        console.log(doc.data());
    })
});

taskForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nombre = taskForm['nombre'].value;
    const apellidoPat = taskForm['apellidoPat'].value;
    const apellidoMat = taskForm['apellidoMat'].value;
    const phone = taskForm['cel'].value;
    const email = taskForm['email'].value;
    const description = taskForm['desc'].value;

    saveTask(nombre,apellidoPat,apellidoMat,phone,email,description);

    taskForm.reset();

    showRegisterModal();
});

const showRegisterModal = ()=>{
    modal.classList.toggle('is-active')
}

openModal.addEventListener('click',(showRegisterModal));
closeModal.addEventListener('click',(showRegisterModal));

