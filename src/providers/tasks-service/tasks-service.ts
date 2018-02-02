import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
@Injectable()
export class TasksServiceProvider {
  db: SQLiteObject = null;

  constructor(public http: HttpClient) {
  }
  setDatabase(db: SQLiteObject) {
    if (this.db === null) {
      this.db = db;
    }
  }
}
