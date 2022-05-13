import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product';
  nav = "this is a navigation !!"
  students = [
    {id:"1",
     name: "Le Vu"
    },
    {id:"2",
      name: "Le Xu"
    }
  ];
  teachers = [
    {id:"1",
     name: "John Sella",
     age: 18,
     gender: 1,
     avatarUrl: 'https://i.picsum.photos/id/408/200/200.jpg?hmac=VJjKULX_XeyV5C9mbWyv6XTsG5EV-ZBsqbiQIi6xTeg',
      status: 0     
  },
  {id:"2",
  name: "John Cella",
  age: 38,
  gender: 0,
  avatarUrl: 'https://i.picsum.photos/id/408/200/200.jpg?hmac=VJjKULX_XeyV5C9mbWyv6XTsG5EV-ZBsqbiQIi6xTeg',
   status: 1   
},
{id:"3",
name: "Sorn Sella",
age: 32,
gender: 1,
avatarUrl: 'https://i.picsum.photos/id/408/200/200.jpg?hmac=VJjKULX_XeyV5C9mbWyv6XTsG5EV-ZBsqbiQIi6xTeg',
 status: 1     
},
{id:"4",
name: "John Xella",
age: 21,
gender: 1,
avatarUrl: 'https://i.picsum.photos/id/408/200/200.jpg?hmac=VJjKULX_XeyV5C9mbWyv6XTsG5EV-ZBsqbiQIi6xTeg',
 status: 1     
},
{id:"6",
name: "John Sttella",
age: 28,
gender: 1,
avatarUrl: 'https://i.picsum.photos/id/408/200/200.jpg?hmac=VJjKULX_XeyV5C9mbWyv6XTsG5EV-ZBsqbiQIi6xTeg',
 status: 0     
},
{id:"7",
name: "Joxxhn Sella",
age: 28,
gender: 1,
avatarUrl: 'https://i.picsum.photos/id/408/200/200.jpg?hmac=VJjKULX_XeyV5C9mbWyv6XTsG5EV-ZBsqbiQIi6xTeg',
 status: 0     
},
  ]
  status = false;
  share() {
    window.alert('The product has been shared!');
  }
}
