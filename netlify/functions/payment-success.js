const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    // Configurar CORS
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Content-Type': 'text/html'
    };

    // Manejar preflight requests
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers,
        body: ''
      };
    }

    // Leer el archivo HTML
    const filePath = path.join(process.cwd(), 'public', 'payment-success.html');
    const content = fs.readFileSync(filePath, 'utf8');

    return {
      statusCode: 200,
      headers,
      body: content
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'text/plain'
      },
      body: 'Internal Server Error'
    };
  }
}; 