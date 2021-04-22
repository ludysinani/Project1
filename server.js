
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});


let studyPermit = {
    requirements: "Understanding the basic requirements, and planning at least one year in advance.",
    languageProficienty: "215+ score on TOEFL.",
    validPassport: "Minimum 6 months before expiration.",
    courseChoice: "Select courses within the department of your choice.",
    collegeChoice: "Select institution where you would want to apply to.",
    acceptanceLetter: "Insitution acceptance letter is a mandatory requirement for a visa application."
}
let workPermit = {
    lmia: "You must have a positive Labor Market Impact Assessment before you can apply for a work permit",
    jobOffer: "Once you receive a positive LMIA, you require a Job Offer to be able to apply for a work visa",
    visaApplication: "After arival to Canada at the entry point an officer will go through the Work Permit process, including duration of the permit"
}


app.get('/immprocess', (req, res) => {
    console.log("Welcome to Canadian Immigration Services")

    let applicantChoice = req.query.choice
    switch (applicantChoice) {
        case 'student':
            res.json(studyPermit)
            //res.send("You will need a Study Permit")
            break
        case 'worker':

            res.json(workPermit)
            //res.send("You will need a Work Permit")
            break
        //TODO: to add more cases 
        default:

            res.send('Please make sure to chose from one of the above options')

    }




})
app.get('/', (req, res) => {
    console.log(req)
    res.send('Hello please use  /play to play a game!')

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
