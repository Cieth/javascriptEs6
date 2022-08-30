const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
  ]
  
  const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
  ]
  
  const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
  ]
  /*
- JavaScript I
  * Pedro Perez
- HTML y CSS I
  * Pedro Perez
  * Maria Gomez
   */

const results = (enrollments,students,courses) => {
    courses.map((course) =>{
        console.log("- "+course.title)
        students.map((student) => {
            enrollments.map((enrollment) => {
                if(enrollment.course_id === course._id && student._id === enrollment.student_id){
                    console.log("* "+student.name)
                }
            })
        })
    })
} 

const results2 = (enrollments,students,courses) => {
    students.map((student) =>{
        console.log("- "+student.name)
        courses.map((course) => {
            enrollments.map((enrollment) => {
                if(enrollment.course_id === course._id && student._id === enrollment.student_id){
                    console.log("  * "+course.title)
                }
            })
        })
    })
} 

