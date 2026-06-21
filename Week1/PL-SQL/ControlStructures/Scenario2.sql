ALTER TABLE Customers
ADD IsVIP CHAR(1) DEFAULT 'N';

BEGIN
    FOR cust IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP = 'Y'
        WHERE CustomerID = cust.CustomerID;
    END LOOP;

    COMMIT;
END;
/
UPDATE Customers
SET IsVIP = 'N'
WHERE IsVIP IS NULL;

COMMIT;

SELECT CustomerID,
       Name,
       Balance,
       IsVIP
FROM Customers;