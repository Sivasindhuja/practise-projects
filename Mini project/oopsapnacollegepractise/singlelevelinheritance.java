package oopsapnacollegepractise;
class Shape{
    String color;
    public void area(){
        System.out.println("displays area");
    }
}
class Triangle extends Shape{
    public void area(int l,int h){
        System.out.println(0.5*l*h);
    }

}

public class singlelevelinheritance {
    public static void main(String[] args){
        Triangle t1=new Triangle();
        t1.color="blue";
        
        t1.area();
    }
}
//types
//single
//
