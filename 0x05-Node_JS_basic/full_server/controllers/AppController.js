class AppController {
  // static method
  static getHomepage(request, response) {
    response.status(200);
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Holberton School!');
  }
}

module.exports = AppController;
