package ECommercePlatformSearchFunction;
import java.util.Scanner;

public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Fashion")
        };

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Product ID to search: ");
        int targetId = sc.nextInt();

        // Linear Search
        Product result1 =
                SearchOperations.linearSearch(products, targetId);

        if (result1 != null) {
            System.out.println("Linear Search Found: "
                    + result1.productName);
        } else {
            System.out.println("Product not found using Linear Search");
        }

        // Binary Search
        Product result2 =
                SearchOperations.binarySearch(products, targetId);

        if (result2 != null) {
            System.out.println("Binary Search Found: "
                    + result2.productName);
        } else {
            System.out.println("Product not found using Binary Search");
        }

        sc.close();
    }
}