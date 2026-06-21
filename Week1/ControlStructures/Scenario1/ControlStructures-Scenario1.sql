CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP CHAR(1)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    FOREIGN KEY (CustomerID)
        REFERENCES Customers(CustomerID)
);

INSERT INTO Customers VALUES
(1,'John',65,15000,'N');

INSERT INTO Customers VALUES
(2,'Mary',45,8000,'N');

INSERT INTO Customers VALUES
(3,'David',70,12000,'N');

INSERT INTO Loans VALUES
(101,1,10,SYSDATE+20);

INSERT INTO Loans VALUES
(102,2,12,SYSDATE+40);

INSERT INTO Loans VALUES
(103,3,11,SYSDATE+10);

COMMIT;

SELECT * FROM Customers;

SELECT * FROM Loans;

BEGIN
    FOR cust IN (
        SELECT CustomerID
        FROM Customers
        WHERE Age > 60
    )
    LOOP

        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = cust.CustomerID;

    END LOOP;

    COMMIT;
END;
/
SELECT * FROM Loans;