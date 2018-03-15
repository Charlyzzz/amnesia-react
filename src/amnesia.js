import * as axios from 'axios';

const AMNESIA_URL = 'http://localhost:4000/api/tasks';

export default class Amnesia {

  static allTasks() {
    return axios.get(AMNESIA_URL)
      .then(response => response.data.tasks);
  }

  static update(task){

  }
}