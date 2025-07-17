import express from 'express';
import { loginAdmin } from "../controller/authController.js";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from "../controller/employeeController.js";
import {getDepartments,createDepartment,updateDepartment, deleteDepartment} from "../controller/departmentController.js";
import {getSalaries,createSalary,updateSalary,deleteSalary} from "../controller/salaryController.js"

const router = express.Router();

router.post("/login", loginAdmin);
router.get("/get-employees", getEmployees);
router.post("/create-employees", createEmployee);
router.put("/update-employees/:id", updateEmployee);
router.delete("/delete-employees/:id", deleteEmployee);
router.get("/get-departments", getDepartments);
router.post("/create-departments", createDepartment);
router.put("/update-departments/:id", updateDepartment);
router.delete("/delete-departments/:id", deleteDepartment);

router.get('/get-salary', getSalaries);
router.post('/create-salary', createSalary);
router.put('/update-salary/:id', updateSalary);
router.delete('/delete-salary/:id', deleteSalary);



export default router;
