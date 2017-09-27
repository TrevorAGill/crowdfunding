import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectsService]
})

export class AdminComponent implements OnInit {

  constructor(private projectsService : ProjectsService) { }

  ngOnInit() {
  }

  submitForm(name: string, description: string, totalGoal: number, totalCollected: number, image: string, rewards: string) {
    var newProject : Project = new Project(name, description, totalGoal, totalCollected, image, rewards);
    this.projectsService.addProject(newProject);
  }

}
