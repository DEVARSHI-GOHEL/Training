-- New database 
CREATE DATABASE DEMO

CREATE TABLE Employee 
    (EmpID INT NOT NULL , 
        EmpName VARCHAR(50) NOT NULL, 
	    Designation VARCHAR(50) NULL, 
        Department VARCHAR(50) NULL, 
        JoiningDate DATETIME NULL,
	    CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED (EmpID)
    )
    
INSERT INTO Employee 
	(EmpID, EmpName, Designation, Department, JoiningDate)
VALUES 
	(1, 'CHIN YEN', 'LAB ASSISTANT', 'LAB', GETDATE()),
	(2, 'MIKE PEARL', 'SENIOR ACCOUNTANT', 'ACCOUNTS', GETDATE()),
	(3, 'GREEN FIELD', 'ACCOUNTANT', 'ACCOUNTS', GETDATE()),
	(4, 'DEWANE PAUL', 'PROGRAMMER', 'IT', GETDATE()),
	(5, 'MATTS', 'SR. PROGRAMMER', 'IT', GETDATE()),
	(6, 'PLANK OTO', 'ACCOUNTANT', 'ACCOUNTS', GETDATE())


INSERT INTO Employee (EmpID, EmpName, Designation, Department, JoiningDate)
    SELECT 1, 'CHIN YEN', 'LAB ASSISTANT', 'LAB', GETDATE()
INSERT INTO Employee (EmpID, EmpName, Designation, Department, JoiningDate)
    SELECT 2, 'MIKE PEARL', 'SENIOR ACCOUNTANT', 'ACCOUNTS', GETDATE()
INSERT INTO Employee (EmpID, EmpName, Designation, Department, JoiningDate)
    SELECT 3, 'GREEN FIELD', 'ACCOUNTANT', 'ACCOUNTS', GETDATE()
INSERT INTO Employee (EmpID, EmpName, Designation, Department, JoiningDate)
    SELECT 4, 'DEWANE PAUL', 'PROGRAMMER', 'IT', GETDATE()
INSERT INTO Employee (EmpID, EmpName, Designation, Department, JoiningDate)
    SELECT 5, 'MATTS', 'SR. PROGRAMMER', 'IT', GETDATE()	
INSERT INTO Employee (EmpID, EmpName, Designation, Department, JoiningDate)
    SELECT 6, 'PLANK OTO', 'ACCOUNTANT', 'ACCOUNTS', GETDATE()


SELECT * FROM Employee

-- Procedure to get data of employee name
CREATE PROCEDURE getEmpByName(
	@name varchar(10)
)
as 
SELECT * FROM Employee
WHERE EmpName = @NAME

EXEC getEmpByName 'MATTS'

-- Procedure to output department of employee using his name
create procedure getEmployeeDept(
	@name varchar(10),
	@dept varchar(50) output
)
as
	select @dept = Employee.Department from Employee
	where EmpName = @name

declare @deptOut varchar(50)
exec getEmployeeDept 'MATTS', @deptOut output
print 'MATTS is working with ' + @deptOut

-- Procedure to get details of employee using dept
ALTER PROCEDURE getEmpByDepartment(
	@dept varchar(10)
)
as 
SELECT * FROM Employee
WHERE Department = @dept

exec getEmpByDepartment 'ACCOUNTS'

SELECT * FROM Employee

-- View for only details of employees from IT department
CREATE VIEW ITDeptpartment 
AS
SELECT * FROM Employee
WHERE Department = 'IT'

SELECT * FROM ITDeptpartment
-- View for only details of employees from accounts department
CREATE VIEW AccountsDeptpartment 
AS
SELECT * FROM Employee
WHERE Department = 'ACCOUNTS'

SELECT * FROM AccountsDeptpartment

-- Inserting data into view
INSERT INTO AccountsDeptpartment
VALUES
(7, 'Satoshi Nakamoto', 'LAB ASSISTANT', 'ACCOUNTS', GETDATE())

-- New Database for joins

CREATE DATABASE BookStore

USE BookStore
CREATE TABLE Books
(
Id INT PRIMARY KEY IDENTITY(1,1),
Name VARCHAR (50) NOT NULL,
Price INT,
CategoryId INT, 
AuthorId INT
)

USE BookStore
CREATE TABLE Categories
(
Id INT PRIMARY KEY,
Name VARCHAR (50) NOT NULL,
)
 
USE BookStore
CREATE TABLE Authors
(
Id INT PRIMARY KEY,
Name VARCHAR (50) NOT NULL,
)

INSERT INTO Categories 
VALUES (1, 'Cat-A'),
(2, 'Cat-B'),
(3, 'Cat-C'),
(7, 'Cat-D'),
(8, 'Cat-E'),
(4, 'Cat-F'),
(10,'Cat-G'),
(12,'Cat-H'),
(6, 'Cat-I')

INSERT INTO Authors
VALUES (1, 'Author-A'),
(2, 'Author-B'),
(3, 'Author-C'),
(10, 'Author-D'),
(12, 'Author-E')


INSERT INTO Books 
VALUES ( 'Book-A', 100, 1, 2),
( 'Book-B', 200, 2, 2),
( 'Book-C', 150, 3, 2),
( 'Book-D', 100, 3,1),
( 'Book-E', 200, 3,1),
( 'Book-F', 150, 4,1),
( 'Book-G', 100, 5,5),
( 'Book-H', 200, 5,6),
('Book-I', 150, 7,8)

SELECT * FROM BOOKS
SELECT * FROM Categories
SELECT * FROM Authors

-- Joining three tables with which same similar columns

SELECT Books.NAME AS 'BOOK NAME', Authors.Name AS 'AUTHOR NAME', Categories.NAME 'CATEGORIES NAME' FROM Books
INNER JOIN Authors
ON Books.AuthorId = Authors.Id
INNER JOIN Categories
ON BOOKS.CategoryId = CATEGORIES.ID

-- Left join
SELECT BOOKS.NAME AS 'BOOK NAME', AUTHORS.NAME AS 'AUTHOR NAME' FROM BOOKS
LEFT JOIN AUTHORS
ON Books.AuthorId = Authors.Id

-- Right join
SELECT BOOKS.NAME AS 'BOOK NAME', AUTHORS.NAME AS 'AUTHOR NAME' FROM BOOKS
RIGHT JOIN AUTHORS
ON Books.AuthorId = Authors.Id

-- Full outer join
SELECT BOOKS.NAME AS 'BOOK NAME', AUTHORS.NAME AS 'AUTHOR NAME' FROM BOOKS
FULL OUTER JOIN AUTHORS
ON Books.AuthorId = Authors.Id

SELECT * FROM BOOKS

-- Here the price column has datatype of int and when we try to put string in it we get an error
BEGIN TRY
	UPDATE books
	set price = 'ABCD'
	where name = 'book-a'
END TRY
-- We are catching that error and printing the error massage and error code 
BEGIN CATCH
	SELECT  
        ERROR_NUMBER() AS ErrorNumber, 
        ERROR_MESSAGE() AS ErrorMessage; 
END CATCH

BEGIN TRY
	-- If the statements in transaction block are executed with success the data is modified permanently   
	BEGIN TRANSACTION
		UPDATE Employee
		SET JoiningDate = 'GETDATE()'
		WHERE EmpName = 'MATTS'
	COMMIT TRANSACTION
END try
BEGIN CATCH
	-- It will rollback to the statements before transaction block
	ROLLBACK TRANSACTION 
	SELECT
		ERROR_NUMBER() AS 'ErrorNumber',
		ERROR_MESSAGE() AS 'ErrorMassage'	
END catch