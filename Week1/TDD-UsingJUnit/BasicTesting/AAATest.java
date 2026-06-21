import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class AAATest {
    //Arrange-Act-Assert
    private int number;

    @Before
    public void setUp() {
        System.out.println("Setting up test data...");
        number = 10;
    }

    @After
    public void tearDown() {
        System.out.println("Cleaning up after test...");
    }

    @Test
    public void testAddition() {

        // Arrange
        int valueToAdd = 5;

        // Act
        int result = number + valueToAdd;

        // Assert
        assertEquals(15, result);
    }
}