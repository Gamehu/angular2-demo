import {Routes} from '@angular/router';
import {About} from './about/about';
import {Home} from './home/home';
import {HeroFormComponent} from './hero/hero-form';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {TodoApp} from "./todos/todo-app";
import {AddDeveloper} from "./developers/add-dev/add-developer";

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', terminal: true},
  {path: 'home', component: Home},
  {path: 'about', component: About},
  {path:'hero',component:HeroFormComponent},
  {path:'todos',component:TodoApp},
  {path:'dev' ,component:AddDeveloper},
  {path: 'github', component: RepoBrowser,
    children: [
      {path: '', component: RepoList},
      {path: ':org', component: RepoList,
        children: [
          {path: '', component: RepoDetail},
          {path: ':repo', component: RepoDetail}
        ]
      }]
  }
];

