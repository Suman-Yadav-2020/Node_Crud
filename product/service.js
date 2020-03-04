const model=require('./model');

module.exports={

    create:(data)=>{
        return model.create(data)
    },
    list:()=>{
        return model.find();
    },
    update:(id,data)=>{
        return model.findByIdAndUpdate(id,data);
    },
    delete:(id)=>{
        return model.deleteOne({_id:id});
    }

}