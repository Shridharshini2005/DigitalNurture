CREATE OR REPLACE PACKAGE CustomerManagement AS

    PROCEDURE AddCustomer(
        p_customerid IN NUMBER,
        p_name IN VARCHAR2,
        p_dob IN DATE,
        p_balance IN NUMBER
    );

    PROCEDURE UpdateCustomer(
        p_customerid IN NUMBER,
        p_balance IN NUMBER
    );

    FUNCTION GetCustomerBalance(
        p_customerid IN NUMBER
    ) RETURN NUMBER;

END CustomerManagement;
/

CREATE OR REPLACE PACKAGE BODY CustomerManagement AS

    PROCEDURE AddCustomer(
        p_customerid IN NUMBER,
        p_name IN VARCHAR2,
        p_dob IN DATE,
        p_balance IN NUMBER
    )
    IS
    BEGIN
        INSERT INTO Customers
        (
            CustomerID,
            Name,
            DOB,
            Balance,
            LastModified
        )
        VALUES
        (
            p_customerid,
            p_name,
            p_dob,
            p_balance,
            SYSDATE
        );
    END AddCustomer;

    PROCEDURE UpdateCustomer(
        p_customerid IN NUMBER,
        p_balance IN NUMBER
    )
    IS
    BEGIN
        UPDATE Customers
        SET Balance = p_balance,
            LastModified = SYSDATE
        WHERE CustomerID = p_customerid;
    END UpdateCustomer;

    FUNCTION GetCustomerBalance(
        p_customerid IN NUMBER
    )
    RETURN NUMBER
    IS
        v_balance NUMBER;
    BEGIN

        SELECT Balance
        INTO v_balance
        FROM Customers
        WHERE CustomerID = p_customerid;

        RETURN v_balance;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RETURN 0;
    END GetCustomerBalance;

END CustomerManagement;
/
BEGIN
    CustomerManagement.AddCustomer(
        10,
        'Sam Wilson',
        TO_DATE('1988-04-10','YYYY-MM-DD'),
        5000
    );
END;
/
SELECT CustomerManagement.GetCustomerBalance(10)
FROM dual;