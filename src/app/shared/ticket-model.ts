
export class TicketModel {
    id: number;
    eventId: number;
    event: string;
    time: string;
    seller: string;
    pcs: number;
    link: string;

    constructor(param?: TicketModel) {
        if (param) {
            // noinspection TypeScriptValidateTypes
            Object.assign(this, param);
        }
    }
}
