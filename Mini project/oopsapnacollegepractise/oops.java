package oopsapnacollegepractise;
class Pen{
    String color;
    String type;
    public void write(){
        System.out.println("Writing ssomething");
    }
    public void printColor(){
        System.out.println(this.color);
    }
}
 class Student{
    String name;
    int age;
    public void printName(){
        System.out.println(this.name);
    }
    public void printInfo(){
        System.out.print(this.name+" "+this.age);
    }
}
public class oops {
    public static void main(String[] args){
        Pen p1=new Pen();
        p1.color="blue";
        p1.type="ball";
        p1.write();
        Pen p2=new Pen();
        p2.color="black";
        p1.printColor();
        p2.printColor();


        Student s1=new Student();
        s1.name="sindhuja";
        s1.age=19;
        s1.printName();
        s1.printInfo();


    }
}
