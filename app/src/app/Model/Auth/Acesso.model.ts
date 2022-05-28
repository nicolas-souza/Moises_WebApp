export class Acesso {

  apiKey: string;
  nivelDeAcesso: string;

  constructor (apiKey: string, nivelDeAcesso: string){
    this.apiKey = apiKey;
    this.nivelDeAcesso = nivelDeAcesso;
  }
}
