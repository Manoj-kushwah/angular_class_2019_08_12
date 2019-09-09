export class User{
    private userId: string;
    private email: string;
    private firstName: string;
    private lastName: string;
    private gender: string;
    private dob: string;
    private role: string;

    public valueOf(obj: any): void {
        for(let key in obj){
            this[key] = obj[key];
        }
    }

}
//{"userId":"1","email":"admin@gmail.com","firstName":"admin","lastName":null,"gender":"male","dob":"678306659000","role":"1"}