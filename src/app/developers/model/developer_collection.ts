import {Developer} from "./developer";
/**
 * Created by zhongzhong on 16/9/4.
 */
export class DeveloperCollection{
  private developers:Developer[] = [];
  getUserByGitHubHandle(username:string){
    return this.developers.filter(u=>u.githubHandler === username)
      .pop();
  }

  getUserById(id:number){
    this.developers.filter(u=>u.id === id).pop();
  }

  addDeveloper(dev:Developer){
    this.developers.push(dev);
  }

  getAll(){
    return this.developers;
  }
}
