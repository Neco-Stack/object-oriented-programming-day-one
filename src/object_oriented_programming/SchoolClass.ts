class Schoolclass {
    _id: number;
    _name: string; 
    _endDate?: Date; 

    constructor(id: number, name: string){
        this._id = id; 
        this._name = name; 
        console.log("School class creation successful");
    }        
    }
const class1 = new Schoolclass(21027589, "objectOrientedProgramming");
const class2 = new Schoolclass(48998765, "Blockchain Development For Experts"); 
console.log("class 1", class1);
console.log("class2", class2);

class1._name = "AdvancedObjectProgrammingByFarid&Marco"
class2._name = "Blockchain and CryptographyByNeco"
console.log("class1:", class1);
console.log("class2", class2);





