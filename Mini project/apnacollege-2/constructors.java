class Students{
    String name;
    int age;
    //public constructor not allowed?

    public Students(){
        System.out.println(" default Constructor called");
    }
    //parameterised constructors
    Students(String name,int age){
        this.name=name;
        this.age=age;
    }
    //copy constructors
    Students(Students s2){
        this.name=s2.name;
        this.age=s2.age;
    }
    public void printInfo(){
        System.out.println(this.name);
        System.out.println(this.age);
    }
}
public class constructors {
    public static void main(String[] args){
        Students s1=new Students();
        s1.age=19;
        s1.name="sindhuja";
        s1.printInfo();
        Students s2=new Students("vandana",25);
        s2.printInfo();
        Students s3=new Students(s2);
        s3.printInfo();
    }
}
