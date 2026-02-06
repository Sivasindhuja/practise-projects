
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
public class multilevelinheritance {
    public static void main(String[] args){
        EquilateralTriangle e1=new EquilateralTriangle();
        e1.area(2,3);
    }
}
