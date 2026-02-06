package oopslabpractise;
//multilevel polymorphism is implemented using interfaces in java
 interface Animal {
    void walk(); 
}
interface Herbivore{

}
class Horse implements Animal,Herbivore{
    public void walk(){
        System.out.println("horse can walk");
    }
}
public class interfaces {
    public static void main(String[] args){
        Horse h1=new Horse();
        h1.walk();
    }
    
}
// The error occurs because in Java, when a class implements an interface, the method(s) defined in the interface must be declared public in the implementing class. This is because all methods in an interface are implicitly public and abstract, so the implementation in the class cannot have a more restrictive access modifier.

// In your Horse class, the method walk() is implicitly given package-private visibility since no access modifier is specified. This reduces the visibility of the walk() method compared to its declaration in the Animal interface, which causes the compilation error.
