import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// export function forbiddenName(name:string):ValidatorFn{
//   return (control: AbstractControl): ValidationErrors | null =>{
//     const val = control.value;
//     return val == name?{forbidden:control.value}:null;
//   }
// }

export function forbiddenName(name:RegExp):ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null =>{
    const val = control.value;
    return name.test(val)?{forbidden:control.value}:null;
  }
}
