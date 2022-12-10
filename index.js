/* Your Code Here */
const createEmployeeRecord = function([firstName, familyName, title, payPerHour]) {
    return{
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
       
        }
    }
 

function createEmployeeRecords(arr){
    return arr.map(createEmployeeRecord)
}
function createTimeInEvent(dateTime) {

    const punchDay = dateTime.split('').slice(0,10).join('')
    const punchTime = dateTime.split('').slice(11).join('')
    
            let timeInObj ={
            type: "TimeIn",
            date:punchDay ,
            hour: parseInt(punchTime),
        }
        this.timeInEvents.push(timeInObj)
        return this
    }

function createTimeOutEvent(dateTime) {

    const punchDay = dateTime.split('').slice(0,10).join('')
    const punchTime = dateTime.split('').slice(11).join('')
 
     let timeOutObj={
         type: "TimeOut",
         date:punchDay,
         hour: parseInt(punchTime)
     }
     this.timeOutEvents.push(timeOutObj)
        return this
 }
 
 function hoursWorkedOnDate(date) {
     const TimeIn = this.timeInEvents.filter(Element =>(Element.date === date))
     const TimeOut = this.timeOutEvents.filter(Element =>(Element.date === date))
 
     for (let i=0; i< TimeIn.length; i++) {
         return (TimeOut[i].hour - TimeIn[i].hour)/100
     }
 }
 
 function wagesEarnedOnDate(date) {
     return hoursWorkedOnDate.call(this, date) * this.payPerHour;
 }
 
//  function allWagesFor(obj) {
//      const dateArr = []
//      console.log('test 1')
//      console.log(obj)
//      const dates = obj.timeInEvents.filter(Element =>{
//          return Element.date
//      })
//      for(const Element of dates) {
//          dateArr.push(wagesEarnedOnDate(obj, Element.date))
//      }
//      return dateArr.reduce((acc,next) => acc + next)
//  }
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
 
 function calculatePayroll(arr) {
     const employeeArr = arr.reduce((acc, next)=> {
        return acc + allWagesFor.call(next)
     },0)
     return employeeArr
    } 
 
function findEmployeeByFirstName(srcArray, firstName) {
    const employee = srcArray.find(record => record.firstName === firstName)
    return employee
}



