class Parent{
    constructor(){
        this.fatherName="Hossain";

    }
}
class Child extends Parent{
    constructor(name){
        super()
        this.name=name;
    }
}

const baby= new Child("Noor");
const baby2 =new Child("Abu");

console.log(baby);