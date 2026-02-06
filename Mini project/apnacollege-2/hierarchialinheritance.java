class Shapes{
    public void printArea(){
        System.out.println("displays area");
    }
}
class Triangles extends Shapes{
    public void area(int l,int h){
        System.out.println(0.5*l*h);
    }
}
 class EquilateralTriangle extends Triangles{
    public void area(int l,int h){
        System.out.println(0.5*l*h);
    }
 }
 class Circle{
    public void area(int r){
        System.out.println(3.14*r*r);
    }
 }
public class hierarchialinheritance {
    public static void main(String[] args){
        EquilateralTriangle e1=new EquilateralTriangle();
        e1.area(2,3);
        Circle c1=new Circle();
        c1.area(5);
    }
}

