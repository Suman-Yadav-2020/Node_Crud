const service=require('./service');

module.exports={
    create:(req,res)=>{
        service.create(req.body).then((result,err)=>{

            if(result){
                res.json({
                    
                    success:1,
                    message:"data inserted sucessfully",
                     data:result});
        
            }
            else{
                res.json({
                    
                    success:0,
                    message:"Failed to insert",
                     });
        
            }
              
        



    })
},

list:(req,res)=>{
    service.list().then((result,err)=>{

        if(result){
            res.json({
                
                success:1,
                message:"data fetched sucessfully",
                 data:result});
    
        }
        else{
            res.json({
                
                success:0,
                message:"Failed to fetch",
                 });
    
        }
          
    



})
},



delete:(req,res)=>{
    service.list(req.params.id).then((result,err)=>{

        if(result){
            res.json({
                
                success:1,
                message:"data deleted sucessflly",
                 data:result});
    
        }
        else{
            res.json({
                
                success:0,
                message:"Failed to delete user ",
                 });
    
        }
          
    



})
}
}