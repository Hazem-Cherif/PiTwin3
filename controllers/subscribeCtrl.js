const subscribeModel = require('../models/subscribeModel');



const subcribeCtrl = {
    addSubscribe : async (req, res) => {
   
      
     
    const { idUser,idCourse} = req.body;
   
    const subscribeModel = new CourseModel({ idUser,idCourse })

    try {
       console.log('sub',subscribeModel);   
        await subscribeModel.save();

        res.status(201).json(subscribeModel );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
},

     getAllSubscribe : async (req, res) => { 
        try {
            const subscribeModel = await subscribeModel.find();
                  
            res.status(200).json(subscribeModel);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    deleteSubscribe: async (req, res) => {
        try {
         
         await subscribeModel.findByIdAndDelete(req.params.id)
             res.json({msg: "Deleted Success!"})
        
        }   catch (err) {
        return res.status(500).json({msg: err.message})
      }
    }
}

module.exports = subcribeCtrl