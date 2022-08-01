import { RequestMethod } from '../constants/api';

export default abstract class API {
  private static HEADERS = { 'Content-Type': 'application/json' };

  private static async sendRequest(url: string, method = RequestMethod.GET, data?: unknown) {
    const config: RequestInit = {
      method,
      headers: API.HEADERS
    }

    if (method ===  RequestMethod.POST || method === RequestMethod.PATCH) config.body = JSON.stringify(data);

    const response = await fetch(url, config);
    return await response.json();
  }

  public static async get(url: string) {
    try {
      return await this.sendRequest(url);
    } catch (e) {
      console.log(e);
    }
  }

  public static async post(url: string, data: unknown) {
    try {
      return await this.sendRequest(url, RequestMethod.POST, data);
    } catch (e) {
      console.log(e);
    }
  }

  public static async patch(url: string, data: unknown) {
    try {
      return await this.sendRequest(url, RequestMethod.PATCH, data);
    } catch (e) {
      console.log(e);
    }
  }

  public static async delete(url: string) {
    try {
      return await this.sendRequest(url, RequestMethod.DELETE);
    } catch (e) {
      console.log(e);
    }
  }
}
