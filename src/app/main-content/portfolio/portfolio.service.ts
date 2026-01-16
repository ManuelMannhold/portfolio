import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private projects: Project[] = [
    {
      id: 'join',
      title: 'Join',
      tech: 'HTML | CSS | JavaScript | Firebase',
      descriptionKey: 'portfolio.join',
      image: 'assets/img/join.png',
      liveUrl: 'https://join.manuel-mannhold.de/index.html',
      githubUrl: 'https://github.com/ManuelMannhold/join',
      type: 'javascript',
    },
    {
      id: 'pollo',
      title: 'El Pollo Locco',
      tech: 'HTML | CSS | JavaScript',
      descriptionKey: 'portfolio.pollo',
      image: 'assets/img/pollo-locco.png',
      liveUrl: 'https://el-pollo-loco.manuel-mannhold.de/index.html',
      githubUrl: 'https://github.com/ManuelMannhold/el-pollo-loco',
      type: 'javascript',
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      tech: 'HTML | CSS | TypeScript | Angular',
      descriptionKey: 'portfolio.portfolio',
      image: 'assets/img/portfolio.PNG',
      githubUrl: 'https://github.com/ManuelMannhold/portfolio',
      type: 'angular',
    },
    {
      id: 'pokedex',
      title: 'Pokedex',
      tech: 'HTML | CSS | JavaScript | API',
      descriptionKey: 'portfolio.pokedex',
      image: 'assets/img/pokedex-portfolio.PNG',
      liveUrl: 'https://pokedex.manuel-mannhold.de/index.html',
      githubUrl: 'https://github.com/ManuelMannhold/pokedex-new-design.git',
      type: 'javascript',
    },
    {
      id: 'ng-chat',
      title: 'NG-Chat',
      tech: 'HTML | CSS | TypeScript | Angular',
      descriptionKey: 'portfolio.ng-chat',
      image: 'assets/img/ng-chat.PNG',
      liveUrl: 'https://ng-chat.manuel-mannhold.de',
      githubUrl: 'https://github.com/ManuelMannhold/ng-chat',
      type: 'angular',
    },
    {
      id: 'echo-note',
      title: 'Echo Note',
      tech: 'HTML | CSS | TypeScript | Angular',
      descriptionKey: 'portfolio.echo-note',
      image: 'assets/img/echo-note.PNG',
      liveUrl: 'https://echo-note.manuel-mannhold.de',
      githubUrl: 'https://github.com/ManuelMannhold/echo-note',
      type: 'angular',
    },
  ];

  getProjects(): Project[] {
    return this.projects.slice();
  }
}
