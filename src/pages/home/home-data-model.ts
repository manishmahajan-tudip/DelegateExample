
//This is data model to store data.
export class HomeDataModel {

  body: string = null;
  title: string = null;
  id: number = null;
  userId: number = null;

  constructor(data) {
    this.body = data.body;
    this.id = data.id;
    this.title = data.title;
    this.userId = data.userId;
  }
}
