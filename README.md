# TodoApp
A simple app which can add todos to a database and delete todos. 
The app uses natural language processing techniques to remove stop words and lemmatize the input text. 
The MERN stack was used for the development of this application. 

The application has used MERN stack which stands for MongoDB, Express, React.js and Node.js. In addition to MERN stack, I have used Stanford NLP library, Node Stopwords Filter, Babel and Webpack. For this application to be run, 3 servers need to be initialized.
1.	MongoDB server
2.	Stanford NLP Server
3.	Express Server
Given below are the steps to start each of the servers. Please consider that the given instructions are for a Windows operating system. I would recommend to use ‘Sublime Text 3’ if there is any need to modify the code. 

# INSTALLATION
1.	MongoDB server
•	Install the latest version of MongoDB from https://www.mongodb.com/
•	Go to the installation directory and configure the paths for data and log path as given here. https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
•	Start Mongo server by running “mongod” on the command line. Server will be in “mongodb://localhost:27017”
•	Type “mongo” and start editing the content in the database by creating a collection called “todos”. 

2.	Stanford NLP Server
•	Download the Stanford NLP server (CoreNLP 3.8.0) from
 https://stanfordnlp.github.io/CoreNLP/download.html
•	Extract the zip file and go to the root folder and start the server according to instructions given in the following link. StanfordNLP server will be in http://localhost:9000
https://stanfordnlp.github.io/CoreNLP/corenlp-server.html

3.	Express Server
•	Go to the root folder of the project using command line. 
•	Consider that the following dependencies have been installed using the given commands. There is no need for reinstalling. 
	React – npm install react
	Babel – npm install babel
	Node Stopwords Filter – npm install node-stopwords-filter
	Stanford NodeJS api – npm install corenlp-client
	Mongoose – npm install mongoose
	Express – npm install express
	Webpack – npm install webpack
•	Run the command “npm run webpack” – This will create the bundle.js file which contains all the required content for the client side.
•	After succesfull completion of the above command, run “node bin/www” to start the express server. 
•	Then the application can be accessed at http://localhost:8000 using a web browser. (preferably Google Chrome)


# USAGE

Initially the app will show an input field where users can type in a sentence to be included as a Todo. Then the inserted Todo would be processed using natural language processing engines and displayed in the “Latest Todos” section. Users can delete todos in this section by clicking the cross which is in front of the todo. 

# IMPORTANT

In this project Lemmatization is taken care of using Stanford NLP library. But to remove stop words, Stanford Core library doesn’t provide any functionality. Hence there were two options available. 
1.	To write a stop word removing algorithm by using a dataset of stop words which should be removed. If this option was used, sentences such as “John needs to complete his homework” can be converted to “John needs complete homework” because we define which stop words to be removed.
2.	Use a standard stop word removal library such as “node-stopwords-filter” which is available as a npm package. The library defines which stop word to be removed. Hence a sentence such as “John needs to complete his homework” will be converted to “John complete homework”. 
In creating this application, I have used the methodology defined by section 2 above. Hence the following screen shows the results we get, when the example given in the task email is typed. If needed, we can create our own stop word removal algorithm to give the desired results. 

