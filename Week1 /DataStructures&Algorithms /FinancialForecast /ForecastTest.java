package FinancialForecasting;

import java.util.Scanner;

public class ForecastTest {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Current Value: ");
        double currentValue = sc.nextDouble();

        System.out.print("Enter Growth Rate (%): ");
        double growthRate = sc.nextDouble();

        System.out.print("Enter Number of Years: ");
        int years = sc.nextInt();

        double futureValue =
                FinancialForecast.predictFutureValue(
                        currentValue,
                        growthRate / 100,
                        years);

        System.out.println(
                "Predicted Future Value: "
                        + futureValue);

        sc.close();
    }
}
