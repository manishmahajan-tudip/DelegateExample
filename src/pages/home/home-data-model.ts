
//This is data model to store data.
export class HomeDataModel {

  emp_firstname: string;
  emp_lastname: string;

  constructor(data) {
    this.emp_firstname = data.emp_firstname;
    this.emp_lastname = data.emp_lastname;
  }
}
