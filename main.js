/*
Name: Dan Duc Vu
Date: 2021/12/13
Purpose: Final Exam
*/

//var customerArray = [];

function Customer (First, Last, City, Province, Age, Gender) {
    this.First = First;
    this.Last = Last;
    this.City = City;
    this.Province = Province;
    this.Age = Age;
    this.Gender = Gender;
  }
  function toString() {
    return `${this.First} ${this.Last} is a ${this.Age} year old ${this.Gender} from ${this.City}, ${this.Province}`;
  }

document.addEventListener("DOMContentLoaded", function (event) {
  const customerArray = [];
  //Handle event click
  document.querySelector("#btnSubmit").onclick = registerCustomer;
  document.querySelector("#btnQuery").onclick = queryData;
  //Add Customer default to customerArray
  function customer() {
    customerArray.push(
      new Customer("Jeff", "Smith", "London", "ON", 17, "Male")
    );
    customerArray.push(
      new Customer("Pauline", "MacIntyre", "Sydney", "NS", 25, "Female")
    );
    customerArray.push(
      new Customer("Kevin", "Firth", "London", "ON", 41, "Male")
    );
    customerArray.push(
      new Customer("Carol", "Green", "London", "ON", 23, "Female")
    );
    customerArray.push(
      new Customer("Lynda", "Reynolds", "Winnipeg", "MB", 37, "Female")
    );
  }

  //Show Customer
  function displayCustomers() {
    var customers = "";
    customerArray.map((item) => (customers += `<p>${item.toString()}</p>`));
    document.querySelector("#divCustomerOutput").innerHTML = customers;
  }

  //Create Customers
  function registerCustomer() {
    let frist = document.querySelector("#tbFirstName").value;
    let last = document.querySelector("#tbLastName").value;
    let city = document.querySelector("#tbCity").value;
    let province = document.querySelector("#ddProvince").value;
    let age = document.querySelector("#tbAge").value;
    let gender = document.querySelector("#ddGender").value;
    if (frist == "" || last == "" || city == "" || age <= 0) {
      alert(
        `field ${frist == "" ? "frist," : ""}${last == "" ? "last," : ""} ${
          city == "" ? "city," : ""
        } is Empty ${age <= 0 ? ", age < 1" : ""}`
      );
      return;
    }
    customerArray.push(new Customer(frist, last, city, province, age, gender));
	displayCustomers();
    document.querySelector("#tbFirstName").value = "";
    document.querySelector("#tbLastName").value = "";
    city = document.querySelector("#tbCity").value = "";
  }

  //Filter Customers
  function queryData() {
    var filterCustomer = "";
    let province = document.querySelector("#ddQueryProvince").value;

    let age = document.querySelector("#tbQueryAge").value;
    let gender = document.querySelector("#ddQueryGender").value;
    let filterProvinceCustomer = customerArray.filter((item) => {
      return item.Province == province;
    });
    let filterProvinceAge = customerArray.filter((item) => {
      return item.Age <= age;
    });
    let filterProvinceGender = customerArray.filter((item) => {
      return item.Gender == gender;
    });

    filterCustomer = `
    <p>Total number of customers: ${customerArray.length}</p>
    <p>Number of customers living in ${province}: ${filterProvinceCustomer.length}</p>
    <p>Number of ${gender} customers:  ${filterProvinceGender.length}</p>
    <p>Number of customers aged ${age} or older: ${filterProvinceAge.length} </p>
    `;
    document.querySelector("#divQueryOutput").innerHTML = filterCustomer;
  }
  customer();
  displayCustomers();
});
