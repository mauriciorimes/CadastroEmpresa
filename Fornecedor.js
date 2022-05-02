class Fornecedor {
    constructor() {

    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get razaoSocial() {
        return this._razaoSocial;
    }

    set razaoSocial(value) {
        this._razaoSocial = value;
    }

    get email() {
        return this._email;        
    }

    set email(value) {
        this._email = value
    }

    get prazoDeEntrega() {
        return this._prazoDeEntrega;
    }

    set prazoDeEntrega(value) {
        this._prazoDeEntrega = value;
    }

    MargemPrazoEntrega() {
        return parseInt(this._prazoDeEntrega) + parseInt(5);
    }
}