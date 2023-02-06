export class RequestRegistration {
    get(arg0: string) {
      throw new Error('Method not implemented.');
    }
    private firstName! : string;
    private lastName! : string;
    private phoneNumber! : string;
    private email! : string;
    private password! : string;


    public setPhoneNumber(p_phoneNumber: string){
        this.phoneNumber = p_phoneNumber;
    }

    public getPhoneNumber() : string {
        return this.phoneNumber;
    }

    public setFirstName(p_FirstName: string) {
        this.firstName = p_FirstName;
    }

    public getFirstName() : string {
        return this.firstName;
    }

    public setLastName(p_LastName : string) {
        this.lastName = p_LastName;
    }

    public getLastName() : string {
        return this.lastName;
    }

    public setPassword(p_Password : string) {
        this.password = p_Password;
    }

    public getPassword() : string {
        return this.password;
    }

    public setEmail(p_Email : string) {
        this.email = p_Email;
    }

    public getEmail() : string {
        return this.email;
    }
}