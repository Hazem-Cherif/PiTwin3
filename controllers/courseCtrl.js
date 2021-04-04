const CourseModel = require('../models/courseModel')
const Users = require('../models/userModel')


const courseCtrl = {
      addCourse : async (req, res) => {
          const idUser=req.user.id;
         
         
        const {title, description,introduction,conclusion } = req.body;
       
        const courseModel = new CourseModel({ idUser,title, description,introduction,conclusion })
    
        try {
            await courseModel.save();
    
            res.status(201).json(courseModel );
        } catch (error) {
            res.status(409).json({ message: error.message });
        }
    },
    getAllCourses : async (req, res) => { 
        try {
            const coursesModel = await CourseModel.find();
                   console.log('testcontroler') ;
            res.status(200).json(coursesModel);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    getAllCoursesByUser : async (req, res) => { 
        try {
            const coursesModel = await CourseModel.find({idUser: req.user.id});
                    
            res.status(200).json(coursesModel);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },
    
    updateCourse: async (req, res) => {
        try {
         const {idUser,title, description} = req.body
         console.log('hjhhh',req.body);
         await CourseModel.findOneAndReplace({_id: req.body._id}, {
             idUser,title,description
         })
         console.log('teshhhhh',req.body);
         res.json({msg: "update Success!"})
        }   catch (err) {
        return res.status(500).json({msg: err.message})
    }
       },
       deleteCourse: async (req, res) => {
        try {
         
         await CourseModel.findByIdAndDelete(req.params.id)
             res.json({msg: "Deleted Success!"})
        
        }   catch (err) {
        return res.status(500).json({msg: err.message})
      }
       }

  
 
}





module.exports = courseCtrl