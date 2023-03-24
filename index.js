const employee = {
    name: "Elliott",
    streetAddress: "Corbett st"

}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key]= value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee 
}
function deleteFromEmployeeByKey(employee, key){
    const newemployee = {...employee}
    delete newemployee[key]
    return newemployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}  