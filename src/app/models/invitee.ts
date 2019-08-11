export class Invitee {
    public id: number;
    public invitationId: number;
    public invitationTo: string;
    public status: string;
    constructor() {
        this.invitationTo="";
        this.status="";
    }
}
