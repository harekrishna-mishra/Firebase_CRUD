import {db} from "../firebase/FirebaseConfig"
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore"


const EmployeeCollectionRef= collection( db, "employee")
class EmployeeServices {
    addEmployee = (newEmp)=>{
        console.log(newEmp)
        return addDoc(EmployeeCollectionRef, newEmp)
    };

    updateEmployee = (id, updatedEmp)=>{
        const existEmp = doc(db, "employee", id);
        return updateDoc(existEmp, updatedEmp) 
    };

    deleteEmployee = (id)=>{
        const existEmp = doc(db, "employee", id);
        return deleteDoc(existEmp)
    };

    getAllEmployee = ()=>{
        return getDocs(EmployeeCollectionRef)
    };

    getSpecificEmployee = (id)=>{
        const existEmp = doc(db, "employee", id)
        return getDoc(existEmp)
    };
}

export default new EmployeeServices()
