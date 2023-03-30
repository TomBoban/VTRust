import instance from "../axios";
const username = 'vtrust';
const password = 'virad0807';
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
class ApiBase {
  get(url) {
    return instance.get(url);
  }
  post(url, data) {
    return instance.post(url, data, {
      headers: {
        'Authorization': `Basic ${token}`
      },
    });
  }
  patch(url, data) {
    return instance.patch(url, data);
  }
  delete(url, data) {
    return instance.delete(url, data);
  }
}
export const Api = new ApiBase();
