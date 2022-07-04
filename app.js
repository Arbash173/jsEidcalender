// For days
var eid = new Date("july 10,2022")
var today = new Date()

var eid_day = eid.getTime()
var now = today.getTime()

 var diff = eid_day - today
 var eidday1 = diff/(1000*60*60*24)
 eidday1 = Math.ceil(eidday1)
 console.log(eidday1)

//  For hours
var eid = new Date("july 10,2022")
var today = new Date()

var eid_day = eid.getTime()
var now = today.getTime()

 var diff = eid_day - today
 var eidhour = diff/(1000*60*60)
 eidhour = Math.ceil(eidhour)
 console.log(eidhour)

//  for min
var eid = new Date("july 10,2022")
var today = new Date()

var eid_day = eid.getTime()
var now = today.getTime()

 var diff = eid_day - today
 var eidmin = diff/(1000*60)
 eidmin = Math.ceil(eidmin)
 console.log(eidmin)

//  for sec
var eid = new Date("july 10,2022")
var today = new Date()

var eid_day = eid.getTime()
var now = today.getTime()

 var diff = eid_day - today
 var eidsec = diff/(1000)
 eidsec = Math.ceil(eidsec)
 console.log(eidsec)