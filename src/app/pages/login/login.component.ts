import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient) { }

  logar() {
    const data = {
      login: this.username,
      password: this.password
    };

    this.http.post('http://localhost:3000/login', data)
      .subscribe(
        (response) => {
          console.log('Resposta do servidor:', response);
          // Aqui você pode lidar com a resposta do servidor, como redirecionar para outra página se o login for bem-sucedido
        },
        (error) => {
          console.error('Erro ao fazer login:', error);
          // Aqui você pode lidar com o erro, como exibir uma mensagem de erro para o usuário
        }
      );
  }
}
