CREATE OR REPLACE PACKAGE AccountOperations AS

    PROCEDURE OpenAccount(
        p_accountid IN NUMBER,
        p_customerid IN NUMBER,
        p_accounttype IN VARCHAR2,
        p_balance IN NUMBER
    );

    PROCEDURE CloseAccount(
        p_accountid IN NUMBER
    );

    FUNCTION GetTotalBalance(
        p_customerid IN NUMBER
    ) RETURN NUMBER;

END AccountOperations;
/
CREATE OR REPLACE PACKAGE BODY AccountOperations AS

    PROCEDURE OpenAccount(
        p_accountid IN NUMBER,
        p_customerid IN NUMBER,
        p_accounttype IN VARCHAR2,
        p_balance IN NUMBER
    )
    IS
    BEGIN
        INSERT INTO Accounts
        (
            AccountID,
            CustomerID,
            AccountType,
            Balance,
            LastModified
        )
        VALUES
        (
            p_accountid,
            p_customerid,
            p_accounttype,
            p_balance,
            SYSDATE
        );
    END OpenAccount;

    PROCEDURE CloseAccount(
        p_accountid IN NUMBER
    )
    IS
    BEGIN
        DELETE FROM Accounts
        WHERE AccountID = p_accountid;
    END CloseAccount;

    FUNCTION GetTotalBalance(
        p_customerid IN NUMBER
    )
    RETURN NUMBER
    IS
        v_total NUMBER;
    BEGIN

        SELECT NVL(SUM(Balance),0)
        INTO v_total
        FROM Accounts
        WHERE CustomerID = p_customerid;

        RETURN v_total;

    END GetTotalBalance;

END AccountOperations;
/

BEGIN
    AccountOperations.OpenAccount(
        100,
        1,
        'Savings',
        2500
    );
END;
/
SELECT AccountOperations.GetTotalBalance(1)
FROM dual;