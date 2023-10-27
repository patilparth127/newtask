import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
  
      // Check if username and password are valid (e.g., username=admin, password=admin123)
      if (username === 'admin' && password === 'admin123') {
        // Generate a dummy token (you can use a more secure approach in a real application)
        const dummyToken = 'your_dummy_token_here';
        alert('Sucess')
        // Store the token in localStorage
        localStorage.setItem('token', dummyToken);
  
        // Redirect to another component (e.g., HomeComponent)
        this.router.navigate(['/home']);
      } else {
        // Handle invalid login (show an error message or other actions)
        console.log('Invalid username or password');
      }
    }
  }
}
