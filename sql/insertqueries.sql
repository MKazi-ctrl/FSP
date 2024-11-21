INSERT INTO Users (username, email, password, firstName, lastName, phoneNumber, address, city, country, postalCode, pointsBalance, createdAt, updatedAt) VALUES
('AliceJohnson', 'alice@example.com', 'password123', 'Alice', 'Johnson', '123456789', '1 Toronto St.', 'Toronto', 'Canada', 'GC123', 0, '2024-11-01 10:15:00', '2024-11-01 10:15:00'),
('Bob Smith', 'bob@example.com', 'password456', 'Bob', 'Smith', '123456783', '1 Toronto St.', 'Toronto', 'Canada', 'GC456', 0, '2024-11-01 10:15:00', '2024-11-01 10:15:00');

INSERT INTO Products (productName, description, price, exclusive)
VALUES
    ('Solar Panel Kit', 'High-efficiency solar panels for residential use', 1500.00, 1),
    ('Wind Turbine', 'Compact wind turbine for clean energy generation', 3000.00, 1),
    ('Smart Thermostat', 'Energy-saving thermostat with remote control features', 200.00, 0),
    ('Home Battery Storage', 'Battery system for energy storage and backup power', 1200.00, 1),
    ('Electric Vehicle Charger', 'Fast charger for home electric vehicle charging', 500.00, 0);

INSERT INTO Purchases (userID_id)
VALUES 
(1), -- Alice Johnson purchasing Solar Panel Kit
(2), -- Bob Smith purchasing Wind Turbine
(1), -- Alice Johnson purchasing Smart Thermostat
(1), -- Alice Johnson purchasing Home Battery Storage
(2); -- Bob Smith purchasing Electric Vehicle Charger

INSERT INTO PurchaseDetails (purchaseID_id, productID_id, pointsEarned)
VALUES 
(1, 1, 150), -- Alice Johnson purchasing Solar Panel Kit
(2, 5, 50); -- Bob Smith purchasing Electric Vehicle Charger


INSERT INTO LoyaltyTransactions (userID_id, points, transactionType)
VALUES 
(1, 150, 'earn'), -- Alice Johnson earned points from a Solar Panel Kit purchase
(2, 300, 'earn'), -- Bob Smith earned points from a Wind Turbine purchase
(1, 20, 'earn'), -- Alice Johnson earned points from a Smart Thermostat purchase
(1, 50, 'redeem'), -- Alice Johnson redeemed points
(2, 120, 'earn'); -- Bob Smith earned points from a Home Battery Storage purchase

INSERT INTO SupportTickets (ticketID, userID_id, subject, description, category, status, priority, createdAt, updatedAt) VALUES
(1, 1, 'Login Issue', 'Cannot log in to the portal', 'Technical', 'Open', 'High', '2024-11-01 10:15:00', '2024-11-01 10:15:00'),
(2, 2, 'Payment Issue', 'Failed transaction while making a payment', 'Billing', 'In_progress', 'Medium', '2024-11-02 14:30:00', '2024-11-02 15:00:00'),
(3, 1, 'Account Locked', 'Account locked after multiple failed attempts', 'Technical', 'Resolved', 'High', '2024-11-03 09:45:00', '2024-11-03 10:15:00');