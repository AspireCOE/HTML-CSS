import { CanDeactivateFn } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
export const deActivateGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {    
    
  if(component && component?.regdata && component?.regdata?.dirty  ){
    const confirmation=confirm("Are you sure? Do you want to navigate?. You details will not be saved");

    if(confirmation){
      return true;
    }
    else{
      return false;
    }
  }
  return true;
};
