package projects;
import java.util.Scanner;

public class calculator {

 public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("Choose an operation:");
            System.out.println("1: Add");
            System.out.println("2: Subtract");
            System.out.println("3: Multiply");
            System.out.println("4: Divide");
            System.out.println("5: Exit");

            int operator = sc.nextInt();

            if (operator == 5) {
                System.out.println("Exiting the program.");
                break;
            }

            System.out.println("Enter the first number:");
            int n1 = sc.nextInt();
            System.out.println("Enter the second number:");
            int n2 = sc.nextInt();

            switch (operator) {
                case 1:
                    System.out.println("Result is: " + (n1 + n2));
                    break;
                case 2:
                    System.out.println("Result is: " + (n1 - n2));
                    break;
                case 3:
                    System.out.println("Result is: " + (n1 * n2));
                    break;
                case 4:
                    if (n2 != 0) {
                        System.out.println("Result is: " + ((double) n1 / n2));
                    } else {
                        System.out.println("Error: Division by zero is not allowed.");
                    }
                    break;
                default:
                    System.out.println("Invalid operator chosen.");
            }
        }
        sc.close();
    }
}
