import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }



  image=""
 
  id=localStorage.getItem("stored_id")
 
  readvalue=()=>{
    let data={
      "userid":localStorage.getItem("stored_id"),
 "image":this.image
    }
    console.log(data)
    this.myapi.addrecipe(data).subscribe(

      (resp)=>{
      console.log(resp)
      }
    )
   
  this.fetchData()
        this.image=""
  }

fetchData=()=>{
  let data={
    "userid":localStorage.getItem("stored_id")
    
  }
  console.log(data)
  this.myapi.myrecipe(data).subscribe(
    (resp)=>{
      this.dataD=resp
    }
  )
}



dataD:any=[]

  ngOnInit(): void {
  }

}
