## Major steps involved in working with .proto file -> 
- 1) Download the protoc compile from [protobuffer github release page](https://github.com/protocolbuffers/protobuf/releases).
- 2) Set PATH variable (Optional)
- 3) install the protoc-gen-js plugin to generate JavaScript code.
- 4) install the google-protobuf package which is the runtime library needed for JavaScript

Then we can simply create our .js file from .proto file using the command "protoc --js_out=import_style=commonjs,binary:<target_folder> <source_file>"

To get started, import the necessary JavaScript file generated from your Protocol Buffers definition. You can then create instances of message objects and utilize their functions to populate them with data.

## Example

#### Importing file 
const employees_pb = require('./employees_pb')

#### Create object and using it

const new_employee = new employees_pb.Employee();
new_employee.setName(curr_employee.name)
new_employee.setId(curr_employee.id)
new_employee.setJoiningDate(curr_employee.joining_date)
new_employee.setSalary(curr_employee.salary) 

# Outcome

## Console Output

JSON DATA ::  [{"name":"Alice Johnson","id":1,"joining_date":"2021-01-15","salary":75000},{"name":"Bob Smith","id":2,"joining_date":"2020-03-22","salary":68000},{"name":"Charlie 
Brown","id":3,"joining_date":"2019-07-11","salary":72000},{"name":"Diana Prince","id":4,"joining_date":"2022-10-05","salary":80000},{"name":"Evan Williams","id":5,"joining_date":"2018-12-30","salary":67000}]
***********FINISHED PROCESSING JSON DATA***********

BINARY DATA ::  Uint8Array(10) [
  10,  0, 10,  0, 10,
   0, 10,  0, 10,  0
]


Deserialized Employee[0] :: {
  "name": "",
  "id": 0,
  "joining_date": "",
  "salary": 0
}

## File size comparision

$ ls -l
total 2
-rw-r--r-- 1 Sumit 197121  10 May 23 17:21 binary_data
-rw-r--r-- 1 Sumit 197121 371 May 23 17:21 json_data

We can see that binary_data is almost 37 times smaller than json_data