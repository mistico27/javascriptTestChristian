const conexion =require('../database/db');
exports.save=(req,res)=>{
   const nombre=req.body.nombre;
   const apellido=req.body.apellido;
   conexion.query('INSERT INTO Persons set ?',{FirstName:nombre, LastName:apellido},(error,results)=>{
    if(error){
        throw error;
    }else{
        res.redirect('/');
    }

   })

}

///update
exports.update=(req,res)=>{
    const id = req.body.PersonID;
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    conexion.query('UPDATE Persons SET ? WHERE PersonId=?',[{FirstName:nombre, LastName:apellido}, id],(error,results)=>{
     if(error){
         throw error;
     }else{
         res.redirect('/');
     }
 
    })
 
 }