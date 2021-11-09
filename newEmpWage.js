//UC1
{
    const IS_ABSENT=0

let empCheck=Math.floor(Math.random()*10)%2;

if(empCheck==IS_ABSENT)
{
    //console.log("UC1-employee is absent");
}
else{
    //console.log("UC1-employee is present");
}
}

//UC2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOUR=4;
const FULL_TIME_HOUR=8;
const WAGE_PER_HOUR=20;

let empHrs=0;
let empCheck=Math.floor(Math.random()*10)%3;

function getWorkingHours(empCheck){
switch(empCheck){
    case 1:
        return PART_TIME_HOUR;
       
    case 2:
        return FULL_TIME_HOUR;
       
    default:
        return 0;
}
}

let empWage=empHrs*WAGE_PER_HOUR;
//console.log("UC2- Emp Wage:"+empWage);

//UC6
function calDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

const MAX_HRS_IN_MONTH=160;
const NUM_OF_wORKING_DAYS=20;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr=new Array();
let empDailyHrsMap = new Map();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_wORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
   // console.log(empCheck);
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays,empHrs);
}

let empWageOfTotal=calDailyWage(totalEmpHrs);
//console.log("UC6  - Total Days:" + totalWorkingDays + " Total hrs:" + totalEmpHrs + " Emp Wage:" + empWageOfTotal );
 


//UC9 Arrow function

const findTotal=(totalVal,dailyVal)=>{
    return totalVal+dailyVal;
}

let count=0;

//console.log(empDailyHrsMap.values());
//console.log(empDailyWageArr);
let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary=empDailyWageArr.filter(dailyWage=>dailyWage>0).reduce(findTotal,0);

console.log("UC9A - Emp Wage with Arrow:"+"Total Hours "+totalHours+"Total Wages:"+totalSalary);


let nonWorkingDays= new Array();
let partWorkingDays=new Array();
let fullWorkingDays=new Array();
//console.log(empDailyHrsMap.values());
empDailyHrsMap.forEach((value,key,map) =>{
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full working Days:"+ fullWorkingDays);
console.log("part working Days:"+ partWorkingDays);
console.log("NO working Days:"+ nonWorkingDays);

