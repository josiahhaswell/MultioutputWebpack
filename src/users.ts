import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@autoinject
export class Users {    
  public heading: string = 'Github Users';
  public users: any[] = [];
  
  constructor(private http: HttpClient) {    
    if (http == null) {
      throw new Error('http was null');
    }
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
  }

  async activate(): Promise<void> {
    const response = await this.http.fetch('users');
    this.users = await response.json();
  }
}
