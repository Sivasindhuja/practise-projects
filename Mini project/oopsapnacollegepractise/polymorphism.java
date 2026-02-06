package oopsapnacollegepractise;
class Person{
    String name;
    int age;
    public void printInfo(String name){
        System.out.println(name);
    }
    public void printInfo(int age){
        System.out.println(age);
    }
    public void printInfo(String name,int age){
        System.out.println(age);
        System.out.println(name);
    }
}
public class polymorphism {
    public static void main(String[] args){
        Person p1=new Person();
        p1.name="sindhuja";
        p1.age=19;
        
        p1.printInfo("sindhuja");
        p1.printInfo(19);
        p1.printInfo("sindhuja",19);

    }
}
