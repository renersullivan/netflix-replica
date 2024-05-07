import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient,private router:Router) { }

  logar() {
    const data = {
      login: this.username,
      password: this.password
    };

    
    console.log(data)

    this.http.post('http://localhost:3000/login', data)
      .subscribe(
        (response) => {
          console.log('Logado com sucesso:', response); 
          this.router.navigate(['/perfil'])
          console.log(response)
          // if (response.status === 200)
        },
        (error) => {
          console.error('Erro ao fazer login:', error,);
        },
        () => console.log('complete')
        
      );
  }
  saveEmail(evento:any){
    this.username = evento.target.value;

      
  }
}
