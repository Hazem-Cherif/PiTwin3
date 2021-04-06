const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
    
    idUser: String,
    title: String,
    description: String,
    CourseImg: String,
    introduction:
        {
        text1:String,
        text2:String,
        text3:String,
        text4:String
        },
        conclusion:
        {
        text1:String,
        text2:String,
        text3:String,
        text4:String
        }
           
     
}
)

module.exports = mongoose.model('Courses', courseSchema);
