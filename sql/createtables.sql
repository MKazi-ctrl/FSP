CREATE TABLE USERS (
    userID INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    firstName VARCHAR(100) NOT NULL,
	lastName VARCHAR(100) NOT NULL,
    phoneNumber VARCHAR(10) UNIQUE NOT NULL,
	address VARCHAR(255),
	city VARCHAR(100),
    country VARCHAR(50),
	postalCode VARCHAR(10),
	pointsBalance INT,
    createdAt DATETIME,
    updatedAt DATETIME,
    CONSTRAINT customerPK PRIMARY KEY(userID)
);


CREATE TABLE Products (
    productID INT PRIMARY KEY AUTO_INCREMENT,
    productName VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    exclusive TINYINT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT exclusiveValues CHECK (exclusive IN (0, 1))
);



CREATE TABLE Purchases (
    purchaseID INT PRIMARY KEY AUTO_INCREMENT,
    userID_id INT,
    purchaseDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userID_id) REFERENCES Users(userID) ON DELETE SET NULL
);



CREATE TABLE PurchaseDetails (
	
    purchaseDetailID INT PRIMARY KEY AUTO_INCREMENT,
    purchaseID_id INT,
    productID_id INT,
    pointsEarned INT DEFAULT 0,
    FOREIGN KEY (purchaseID_id) REFERENCES Purchases(purchaseID) ON DELETE CASCADE,
    FOREIGN KEY (productID_id) REFERENCES Products(productID) ON DELETE SET NULL
);





CREATE TABLE LoyaltyTransactions (
    transactionID INT PRIMARY KEY AUTO_INCREMENT,
    userID_id INT NOT NULL,
    points INT NOT NULL,
    transactionType ENUM('earn', 'redeem') NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userID_id) REFERENCES Users(userID) ON DELETE CASCADE
);





CREATE TABLE SupportTickets (
    ticketID INT PRIMARY KEY,
    userID_id INT,
    subject VARCHAR(100) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    status ENUM('Open', 'In_progress', 'Resolved', 'Pending') DEFAULT 'Open',
    priority ENUM('Low', 'Medium', 'High') NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    FOREIGN KEY (userID_id) REFERENCES Users(userID)
);



