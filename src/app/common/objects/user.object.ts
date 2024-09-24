 export class User {
  id!: number;
  email!: string;
  firstName!:string;
  lastName!:string;
  passwordEnc!:string;
  username!:string;
  role!:number;
  dateCreated!:Date;
  validated!: boolean;
}
