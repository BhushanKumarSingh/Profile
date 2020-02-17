export class Profile {
    firstName: string;
    lastName: string;
    email: string;
    mobile_no: string;
    location: string;
    linkedin: string;
    education: string;
    programing: string;
    webTech: string;
    dbs: string;
    title: string;
    description: string;

    public get getFirstName() {
        return this.firstName;
    }

    public set setFirstName(firstName: string) {
        this.firstName = firstName;
    }

    public get getLastName() {
        return this.lastName;
    }

    public set setLastName(lastName: string) {
        this.lastName = lastName;
    }

    public get getEmail() {
        return this.email;
    }

    public set setEmail(email: string) {
        this.email = email;
    }

    public get getMobile_no() {
        return this.mobile_no;
    }

    public set setMobile_no(mobile_no: string) {
        this.mobile_no = mobile_no;
    }

    public get getLocation() {
        return this.location;
    }

    public set setLocation(location: string) {
        this.location = location;
    }

    public get getLinkedin() {
        return this.linkedin;
    }

    public set setLinkedin(linkedin: string) {
        this.linkedin = linkedin;
    }

    public get getEducation() {
        return this.education;
    }

    public set setEducation(education: string) {
        this.education = education;
    }

    public get getPrograming() {
        return this.programing;
    }

    public set setPrograming(programing: string) {
        this.programing = programing;
    }
    public get getWebTech() {
        return this.webTech;
    }

    public set setWebTech(webTech: string) {
        this.webTech = webTech;
    }

    public get getDbs() {
        return this.dbs;
    }

    public set setDbs(dbs: string) {
        this.dbs = dbs;
    }

    public get getTitle() {
        return this.title;
    }

    public set setTitle(title: string) {
        this.title = title;
    }

    public get getDescription() {
        return this.description;
    }

    public set setDescription(description: string) {
        this.description = description;
    }

}
