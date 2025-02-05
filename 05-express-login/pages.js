function generateLoginPage() {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chat Login</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div class="container">
          <h1>Chat Login</h1>
          <form action="/login" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username">
            <button type="submit">Log In</button>
          </form>
          
        </div>
      </body>
      </html>
    `;
  }
  
  function generateDataPage(username, word) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chat Data</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div class="container">
          <h1>Welcome, ${username}!</h1>
          <p>The current stored word for ${username} is: ${word ? word : '""'}</p>
          <form action="/update" method="POST">
            <label for="word">Update stored word:</label>
            <input type="text" id="word" name="word" value="${word}">
            <button type="submit">Update</button>
          </form>
          <form action="/logout" method="POST">
            <button type="submit">Log Out</button>
          </form>
        </div>
      </body>
      </html>
    `;
  }

  function generateErrorPage(message, status) {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error ${status}</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div class="container">
          <h1>Error: ${status}</h1>
          <p>${message}</p>
          <a href="/">Return to Login Page</a>
        </div>
      </body>
      </html>
    `;
}
 
  
  module.exports = { generateLoginPage, generateDataPage, generateErrorPage };
  