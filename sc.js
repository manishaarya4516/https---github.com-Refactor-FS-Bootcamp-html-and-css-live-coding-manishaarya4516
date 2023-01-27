// assignment 2   object

let person={};
console.log(person);
let person1={
	firstName:"manish",
	lastName:"chaudhary"
}
console.log(person1);
person1['firstName']="himanshu";
console.log(person1);
person1.firstName='amit';
console.log(person1);
delete person1.firstName;
console.log(person1);
let person2={};
person2['hii']="hello";
if (person2={})  {
	console.log(true);
}
else{
console.log(false)
}

// question
let salaries={
    John:100,
    Ann:160,
    Pete:130,
}
let sum=0;
let value=Object.values(salaries);
for(i=0;i<value.length;i++)
sum+=value[i];
salaries.sum=sum;
console.log(salaries);

// question

let menu={
    width:200,
    height:300,
    title:"My menu",
}
function multiplyNumeric(obj){
    keys=Object.keys(obj);
    for(let i=0;i<keys.length;i++){
        if(typeof obj[keys[i]]=="number"){
            obj[keys[i]]=obj[keys[i]]*2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);