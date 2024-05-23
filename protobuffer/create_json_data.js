const fs = require('fs')
const path = require('path')

const create_json_data = () => {
    const employees = [
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


    const employees_data = JSON.stringify(employees);
    console.log("JSON DATA :: ", employees_data);
    fs.writeFileSync(path.join(__dirname + '/output/json_data'),employees_data);

    console.log("***********FINISHED PROCESSING JSON DATA***********")
}

module.exports = create_json_data