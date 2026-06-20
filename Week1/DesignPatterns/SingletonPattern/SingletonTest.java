package SingletonPatternExample;
public class SingletonTest {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        if (logger1 == logger2) {
            System.out.println("Only one instance exists.");
        } else {
            System.out.println("Multiple instances created.");
        }
    }
}
