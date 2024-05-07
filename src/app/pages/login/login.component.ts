import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ErrorDialogComponent } from '../modal/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  error: boolean = false;
  
  username: string = '';
  password: string = '';


  constructor(private http: HttpClient,private router:Router,public dialog: MatDialog) { }

  logar() {
    const data = {
      login: this.username,
      password: this.password
      
    };

    const errorMessage = 'Senha Incorreta !!';
    this.openErrorDialog(errorMessage);
    
    console.log(data)

    this.http.post('http://localhost:3000/login', data)
      .subscribe(
        (response:any) => {
          console.log('Logado com sucesso:', response); 
          
          console.log(response)
          if (response.status === 200){
            this.router.navigate(['/perfil'])
            console.log('Logado com sucesso ')

          }
        },

        (error) => {
          if (error.status === 401){
            this.error = true

          }
        },

        () => console.log('complete')
        
      );
  
  }
  

  openErrorDialog(errorMessage: string): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
    
      data: { message: errorMessage }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('fechou ake ');
    });
  }

  saveEmail(evento:any){
    this.username = evento.target.value;

      
  }
}
