SELECT COUNT(PRICE) AS 'TOTAL BOOKS' FROM BOOKS

SELECT SUM(PRICE) AS 'TOTAL PRICE' FROM BOOKS

SELECT MAX(PRICE) FROM BOOKS

SELECT MIN(PRICE) FROM BOOKS

SELECT AVG(PRICE) FROM BOOKS

alter FUNCTION price(
    @book_price INT,
    @discount INT
)
RETURNS INT
AS 
BEGIN
    RETURN @book_price * @discount / 100;
END;

SELECT dbo.price(100, 10) as 'Discount';


BEGIN TRANSACTION
	INSERT INTO Authors
	VALUES
	(4,'A4')

	DELETE FROM BOOKS
	WHERE NAME = 'BOOK5'

-- by rollback transaction the database revert back to the state before begin transaction 
ROLLBACK TRANSACTION
-- once we commit the transaction we cannot use rollback 
COMMIT TRANSACTION

SELECT * FROM Authors
SELECT * FROM BOOKS