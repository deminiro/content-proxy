const server = require('http');

const port = 3011;

const func = (req, res) => {
  res.get('/instagram-photo/:slug', async (req, res) => {
    console.log(slug);
    const data = await axios.get(`https://www.instagram.com/slug/?__a=1`);
    res.send(data);
  });
};

server.createServer(func).listen(port);
