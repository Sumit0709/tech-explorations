const fs = require('fs')
const path = require('path')
const Schema = require('./employees_pb')

const create_binary_data = () => {
    const EMPLOYEES = [
        {
            name: "Alice Johnson",
            id: 1,
            joining_date: "2021-01-15",
            salary: 75000
        },
        {
            name: "Bob Smith",
            id: 2,
            joining_date: "2020-03-22",
            salary: 68000
        },
        {
            name: "Charlie Brown",
            id: 3,
            joining_date: "2019-07-11",
            salary: 72000
        },
        {
            name: "Diana Prince",
            id: 4,
            joining_date: "2022-10-05",
            salary: 80000
        },
        {
            name: "Evan Williams",
            id: 5,
            joining_date: "2018-12-30",
            salary: 67000
        }
    ];

    // creating array of employees
    const employee_list = new Schema.EmployeeList();


    for (let curr_employee in EMPLOYEES) {
        // processing each employee 
        const new_employee = new Schema.Employee();
        new_employee.setName(curr_employee.name)
        new_employee.setId(curr_employee.id)
        new_employee.setJoiningDate(curr_employee.joining_date)
        new_employee.setSalary(curr_employee.salary)

        // storing employee into employees list
        employee_list.addEmployees(new_employee)
    }

    // serializing data before wiring or storing them  
    const employees_binary_data = employee_list.serializeBinary()
    console.log("BINARY DATA :: ", employees_binary_data);

    // saving data into binary file
    fs.writeFileSync(path.join(__dirname + '/output/binary_data'), employees_binary_data);

    // extracting data from binary file
    const BINARY_DATA = fs.readFileSync(path.join(__dirname + '/output/binary_data'))
    
    // deserializing data
    const deserialized_data = Schema.EmployeeList.deserializeBinary(BINARY_DATA);

    // converting to human readable format
    const deserialized_employees = deserialized_data.getEmployeesList().map(employee => ({
        name: employee.getName(),
        id: employee.getId(),
        joining_date: employee.getJoiningDate(),
        salary: employee.getSalary()
    }));

    // print the human-readable employee[0] data
    console.log('Deserialized Employee[0] ::', JSON.stringify(deserialized_employees[0], null, 2));
}

module.exports = create_binary_data