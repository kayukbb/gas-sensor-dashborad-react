import express from 'express';
import routes from './routes.js';
import sequelize from './db.config.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', routes);
app.use('/valentine', routes);

// Sync Sequelize models with the database
sequelize.sync()
  .then(() => {
    // Start the server after syncing the models
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log('A user has connected to the server');
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });



/*
If you want your server to be accessible from anywhere, not just your local network, you would need to expose your server to the internet. This typically involves a few steps:

Port Forwarding: You need to set up port forwarding on your router to direct incoming traffic on a specific port to your server. The process for this varies depending on your router model, so you may need to look up instructions specific to your router.
Dynamic DNS: Most internet service providers assign dynamic IP addresses, which can change over time. Dynamic DNS services allow you to associate a domain name with your dynamic IP, and automatically update when your IP changes.
Firewall Rules: Ensure your firewall rules allow incoming connections to your server.
Please note that exposing your server to the internet comes with security risks. Make sure your server is secure and consider using HTTPS to encrypt the communication.

Alternatively, you could deploy your Node.js application to a cloud service provider like AWS, Google Cloud, Heroku, etc. These platforms can give your application a public URL and handle many of the security concerns for you.

Remember, exposing a server to the public internet should be done with care and a full understanding of the potential risks involved. 
*/