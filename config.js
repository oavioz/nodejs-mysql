var config = {
	database: {
		host:	  'testmysqlwebapp-mysqldbserver.mysql.database.azure.com', 	// database host
		user: 	  'mysqldbuser@testmysqlwebapp-mysqldbserver', 		//  database username
		password: '1q2w#E$R5t6y', 		//  database password
		port: 	  3306, 		// default MySQL port
		db: 	  'test' 		//  database name
	},
	server: {
		host: '127.0.0.1',
		port: '3000'
	}
}

module.exports = config
