CREATE OR REPLACE PACKAGE EmployeeManagement AS

    PROCEDURE HireEmployee(
        p_employeeid IN NUMBER,
        p_name IN VARCHAR2,
        p_position IN VARCHAR2,
        p_salary IN NUMBER,
        p_department IN VARCHAR2
    );

    PROCEDURE UpdateEmployee(
        p_employeeid IN NUMBER,
        p_salary IN NUMBER
    );

    FUNCTION CalculateAnnualSalary(
        p_employeeid IN NUMBER
    ) RETURN NUMBER;

END EmployeeManagement;
/

CREATE OR REPLACE PACKAGE BODY EmployeeManagement AS

    PROCEDURE HireEmployee(
        p_employeeid IN NUMBER,
        p_name IN VARCHAR2,
        p_position IN VARCHAR2,
        p_salary IN NUMBER,
        p_department IN VARCHAR2
    )
    IS
    BEGIN
        INSERT INTO Employees
        (
            EmployeeID,
            Name,
            Position,
            Salary,
            Department,
            HireDate
        )
        VALUES
        (
            p_employeeid,
            p_name,
            p_position,
            p_salary,
            p_department,
            SYSDATE
        );
    END HireEmployee;

    PROCEDURE UpdateEmployee(
        p_employeeid IN NUMBER,
        p_salary IN NUMBER
    )
    IS
    BEGIN
        UPDATE Employees
        SET Salary = p_salary
        WHERE EmployeeID = p_employeeid;
    END UpdateEmployee;

    FUNCTION CalculateAnnualSalary(
        p_employeeid IN NUMBER
    )
    RETURN NUMBER
    IS
        v_salary NUMBER;
    BEGIN

        SELECT Salary
        INTO v_salary
        FROM Employees
        WHERE EmployeeID = p_employeeid;

        RETURN v_salary * 12;

    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RETURN 0;
    END CalculateAnnualSalary;

END EmployeeManagement;
/
BEGIN
    EmployeeManagement.HireEmployee(
        10,
        'Charlie Davis',
        'Analyst',
        50000,
        'Finance'
    );
END;
/
SELECT EmployeeManagement.CalculateAnnualSalary(10)
FROM dual;