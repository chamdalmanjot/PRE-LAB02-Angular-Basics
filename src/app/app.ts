import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Manjot Chamdal';
  location = 'Angeles City, Pampanga';
  email = 'chamdalmanjot@gmail.com';
  phone = '09457009924';

  profile = 'Hello, I am a third-year BSIT student at Holy Angel University, specializing in Web Development. I always strive to learn about technology and life. My goal for now is to graduate and find a well-paid job as a web developer, where I can build clean, responsive websites and grow my skills in Angular and TypeScript. I want to earn enough to support myself and my family. In my free time I play video games, badminton and volleyball, work out once in a while, and drive around the city. I aim to be the best I can be.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'PHP',
    'Vue',
    'MongoDB',
    'Graphic Design'
  ];

  techGroups = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Vue'] },
    { category: 'Backend & Database', items: ['PHP', 'MongoDB'] },
    { category: 'Tools & Design', items: ['Git', 'GitHub', 'VS Code', 'Graphic Design'] }
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
