import {Injectable} from '@angular/core';

export class Category {
  constructor(public id : number,
              public title : string,
              public rating : number,
              public description : string,
              public img : string
            ){}
}
@Injectable()
export class CategoryService {
  getCategories() : Category[] {
    return categories.map(c => new Category(c.id, c.title, c.rating, c.description, c.img));
  }
};

var categories = [
  {
    "id" : 0,
    "title" : "Hot spot",
    "rating" : 9999,
    "description" : "do you want to go to Hot spot in korea? tap this.",
    "img" : "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiIksnIt_3XAhWLVbwKHZ3fCeUQjRwIBw&url=http%3A%2F%2Fhwan7a.tistory.com%2Fentry%2F%25EC%2584%259C%25EC%259A%25B8%25EC%259D%2598-%25EB%25B0%25A4&psig=AOvVaw0-YmIMGNyT1cu-SElsQQ2b&ust=1512926230173397"
  },
  {
    "id" : 1,
    "title" : "Healing",
    "rating" : 9998,
    "description" : "do you want to go to Healing in korea? tap this.",
    "img" : "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiIksnIt_3XAhWLVbwKHZ3fCeUQjRwIBw&url=http%3A%2F%2Fhwan7a.tistory.com%2Fentry%2F%25EC%2584%259C%25EC%259A%25B8%25EC%259D%2598-%25EB%25B0%25A4&psig=AOvVaw0-YmIMGNyT1cu-SElsQQ2b&ust=1512926230173397"
  },
  {
    "id" : 2,
    "title" : "Tracking",
    "rating" : 9997,
    "description" : "do you want to go to Tracking in korea? tap this.",
    "img" : "https://www.google.co.kr/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiIksnIt_3XAhWLVbwKHZ3fCeUQjRwIBw&url=http%3A%2F%2Fhwan7a.tistory.com%2Fentry%2F%25EC%2584%259C%25EC%259A%25B8%25EC%259D%2598-%25EB%25B0%25A4&psig=AOvVaw0-YmIMGNyT1cu-SElsQQ2b&ust=1512926230173397"
  }

];
