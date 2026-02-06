package oopslabpractise;
class A extends Thread{
    public void run(){
        for(int i=0;i<=10;i++){
            System.out.println("hello");
        }
    }
}
class B extends Thread{
    public void run(){
        for(int i=0;i<=10;i++){
        System.out.println("hii");
    }
}
}
public class threads {
    public static void main(String[] args){
        A obj1=new A();
        B obj2=new B();
        System.out.println(obj1.getPriority());
        obj1.run();
        obj2.run();
    }
}
