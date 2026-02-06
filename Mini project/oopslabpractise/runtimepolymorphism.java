package oopslabpractise;
class Bike{
    void run(){
        System.out.println("A bike generally is faster than splender");
    }
}
class Splender extends Bike{
    void run(){
        System.out.println("Splender runs at 150kmph");
    }
}

public class runtimepolymorphism {
    public static void main(String[] args){
        Bike s1=new Splender();
        s1.run();
    }
}
