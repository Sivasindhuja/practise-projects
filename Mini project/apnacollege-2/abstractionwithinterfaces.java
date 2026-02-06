interface Animal{
    void walk();
}
interface Herbivore{
    
}
//this is called multiple inheritance
class Horse implements Animal,Herbivore{
    public void walk(){
        System.out.println("walks with four legs ");
    }
}
public class abstractionwithinterfaces {
    public static void main(String[] args){

    }
}
