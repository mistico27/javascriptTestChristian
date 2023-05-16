const express= require('express');
const router=express.Router();

const conexion = require('./database/db');
router.get('/',(req,res)=>{
 conexion.query('SELECT * FROM Persons',(error,results)=>{
    if(error){
        throw error;
    }else{
        res.render('index',{results:results});
    }
  })
})


///crear registros
router.get('/create',(req,res)=>{
  res.render('create');
});

///ruta ára editar registros
router.get('/edit/:id', (req,res)=>{
  const id= req.params.id;
  conexion.query('SELECT * FROM Persons WHERE PersonID=?',[id],(error,results)=>{
    if(error){
      throw error;
    }else{
      res.render('edit',{user:results[0]});
    }

  });

})


///eliminar registro
router.get('/delete/:id',(req,res)=>{
  const id= req.params.id;
  conexion.query('DELETE FROM Persons WHERE PersonID=?',[id],(error,results)=>{
    if(error){
      throw error;
    }else{
      res.redirect('/');
    }
  });
})



const crud =require('./controllers/crud');
router.post('/save',crud.save);
router.post('/update',crud.update);
module.exports=router;