/*Inserting into tables*/

/*Inserting into Register Master*/
INSERT INTO RegisterMaster(Name,Email,Username,Password,Cpassword,ClientID) VALUES ("Rahul Shah","rahul_31@gmail.com","rahul_31","Rahul@123","Rahul@123","123");
INSERT INTO RegisterMaster(Name,Email,Username,Password,Cpassword,ClientID) VALUES ("Falguni Pathak","falguni_12@gmail.com","falguni_12","Falguni@12","Falguni@12","12");
INSERT INTO RegisterMaster(Name,Email,Username,Password,Cpassword,ClientID) VALUES ("Ramesh Jain","ramesh_11@gmail.com","ramesh_11","Ramesh@11","Ramesh@11","11");
INSERT INTO RegisterMaster(Name,Email,Username,Password,Cpassword,ClientID) VALUES ("Renuka Save","renuka_45@gmail.com","renuka_45","Renuka@45","Renuka@45","45");
INSERT INTO RegisterMaster(Name,Email,Username,Password,Cpassword,ClientID) VALUES ("Kabir Singh","kabir_98@gmail.com","kabir_98","Kabir@98","Kabir@98","98");



/*Inserting into Sector*/
INSERT INTO Sector(Sname) VALUES ('Financials');
INSERT INTO Sector(Sname) VALUES ('Automobile');
INSERT INTO Sector(Sname) VALUES ('Ecommerce');
INSERT INTO Sector(Sname) VALUES ('Textile');
INSERT INTO Sector(Sname) VALUES ('Chemicals');

/*Inserting into Company*/
INSERT INTO Company(Cname,SID) VALUES ('Credit Suisse',1);
INSERT INTO Company(Cname,SID) VALUES ('Goldman Sachs',1);
INSERT INTO Company(Cname,SID) VALUES ('Tata Motors',2);
INSERT INTO Company(Cname,SID) VALUES ('Mahindra',2);
INSERT INTO Company(Cname,SID) VALUES ('Walmart',3);
INSERT INTO Company(Cname,SID) VALUES ('Flipkart',3);
INSERT INTO Company(Cname,SID) VALUES ('Bombay Dyeing',4);
INSERT INTO Company(Cname,SID) VALUES ('Aigle',4);
INSERT INTO Company(Cname,SID) VALUES ('Mitsubishi',5);
INSERT INTO Company(Cname,SID) VALUES ('DuPont',5);


/*Inserting into Transaction Master*/
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (1,1,1,20,500,10000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (1,2,1,30,600,18000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (2,3,1,40,700,28000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (2,4,1,50,800,40000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (3,5,1,60,900,54000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (3,6,2,70,1000,70000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (4,7,2,80,1100,88000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (4,8,2,90,1200,108000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (5,9,2,100,1300,130000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (5,10,2,110,1400,154000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (3,6,3,70,1000,70000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (4,7,3,80,1100,88000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (4,8,3,90,1200,108000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (5,9,3,100,1300,130000);
INSERT INTO TransactionMaster(SID,CID,RID,Nshares,Rate,NetAmt) VALUES (5,10,3,110,1400,154000);



/*Retreiving all the data*/

SELECT * FROM RegisterMaster;
SELECT * FROM Sector;
SELECT * FROM Company;
SELECT * FROM TransactionMaster;


/*Conditional Queries*/

