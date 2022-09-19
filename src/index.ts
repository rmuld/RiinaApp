import express, { Request, Response, Express } from "express";

const app: Express = express();
const PORT: number = 3000;

app.use(express.json());

interface INewStudent {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    personalNumber: string
}
interface IStudent extends INewStudent {
    id: number
}
interface INewInstructor {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    personalNumber: string
}
interface IInstructor extends INewInstructor {
    id: number
}
interface INewDepartment {
    printName: string,
    shortName: string
}
interface IDepartment extends INewDepartment {
    id: number
}
const students: IStudent[] = [
    {id: 1, firstName: "Kaja", lastName: "Kraps", email: "kaja@kraps.ee", password: "kaja", personalNumber: "48811220011" },
    {id: 2, firstName: "Kersti", lastName: "Kenake", email: "kersti@kenake.ee", password: "kersti", personalNumber: "47711221100" }
]
const instructors: IInstructor[] = [
    {id: 1, firstName: "Mati", lastName: "Matemaatika", email: "mati@mata.ee", password: "mati", personalNumber: "38811220011" },
    {id: 2, firstName: "Pille", lastName: "Proge", email: "pille@proge.ee", password: "pille", personalNumber: "47711221100" }
]
const departments: IDepartment[] = [
    {id: 1, printName: "Haapsalu Kolledž", shortName: "rakendusinformaatika"},
    {id: 2, printName:"Balti Filmi ja Meedia Kool", shortName: "audivisuaalne meedia"}
]

app.get("/api/v1/health", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Hello Riina App!"
    });
});

// STUDENTS API
app.get("/api/v1/students", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Get all Students!",
        students
    });
});


app.post("/api/v1/students", (req: Request, res: Response) => {
    console.log(req.body)
    const { firstName, lastName, email, password, personalNumber } = req.body;
    const id = students.length + 1;
    const newStudent: IStudent = {
        id,
        firstName,
        lastName,
        email,
        password,
        personalNumber
    }
    students.push(newStudent)

    res.status(201).json({
        success: true,
        message:  `Student withe email ${newStudent.email} was created`
    });
});

app.delete("/api/v1/students/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(element => element.id === id);
    console.log(index)
    if (!index) {
        return res.status(404).json({
            success: false,
            message: "Student not found!"
        })
    }
    return res.status(200).json({
        success: true,
        message: "Delete Student!"
    });
});

// INSTRUCTORS API
app.get("/api/v1/instructors", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Get all Instructors!",
        instructors
    });
});


app.post("/api/v1/instructors", (req: Request, res: Response) => {
    const { firstName, lastName, email, password, personalNumber } = req.body;
    const id = instructors.length + 1;
    const newInstructor: IInstructor = {
        id,
        firstName,
        lastName,
        email,
        password,
        personalNumber
    }
    instructors.push(newInstructor)

    res.status(201).json({
        success: true,
        message:  `Instructor with email ${newInstructor.email} was created`
    });
});

app.delete("/api/v1/instructors/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const index = instructors.findIndex(element => element.id === id);
    if (!index) {
        return res.status(404).json({
            success: false,
            message: "Instructor was not found!"
        })
    }
    return res.status(200).json({
        success: true,
        message: "Delete Instructor!"
    });
});

//DEPARTMENTS API
app.get("/api/v1/departments", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Get all Departments!",
        departments
    });
});


app.post("/api/v1/departments", (req: Request, res: Response) => {
    const { printName, shortName } = req.body;
    const id = departments.length + 1;
    const newDepartment: IDepartment = {
        id,
        printName,
        shortName
    }
    departments.push(newDepartment)

    res.status(201).json({
        success: true,
        message:  `Department withe name ${newDepartment.printName} was created`
    });
});

app.delete("/api/v1/departments/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const index = departments.findIndex(element => element.id === id);
    if (!index) {
        return res.status(404).json({
            success: false,
            message: "Department not found!"
        })
    }
    return res.status(200).json({
        success: true,
        message: "Delete Department!"
    });
});

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App is running on port ${PORT}`);
});