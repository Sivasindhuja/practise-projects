abstract class Animal{
     abstract void walk();
    public void eat(){
        System.out.println("eats");
    }
}
//the extended class of an abstract class must implement the 
//abstract methods of the parent class
class Horse extends Animal{
    public void walk(){
        System.out.println("walks on four legs");
    }
}
class Chicken extends Animal{
    public void walk(){
        System.out.println("walks on two legs");
    }
}
public class abstraction {
    public static void main(String[] args){
        Horse h1=new Horse();
       h1.walk();
        h1.eat();
    }
}
