package oopslabpractise;

public class exceptionhandling {
    public static void main(String[] args){
        try{
            int data=10/0;
        }
        catch(ArithmeticException e){
            System.out.println("exception caught:" +e.getMessage());
        }
        finally{
            System.out.println("finally block execution");
        }
        
    }
}
// public class ExceptionHandlingExample {
//     public static void main(String[] args) {
//         try {
//             int data = 10 / 0; // Risky code
//         } catch (ArithmeticException e) {
//             System.out.println("Exception caught: " + e.getMessage());
//         } finally {
//             System.out.println("Execution of finally block");
//         }

//         System.out.println("Program continues...");
//     }
// }

