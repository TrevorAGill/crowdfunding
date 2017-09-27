import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectsService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
   return this.projects;
  }

  addProject(newProject: Project) {
   this.projects.push(newProject);
  }
 //
 //  getAlbumById(albumId: string){
 //    return this.database.object('albums/' + albumId);
 //  }

}
