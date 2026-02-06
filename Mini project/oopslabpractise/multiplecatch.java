package oopslabpractise;

public class multiplecatch {
    public static void main(String[] args){
        try{
            int arr[]={1,2,3,4};
            int data=arr[0]/0;
        }
        catch(ArithmeticException e){
            System.out.println("exception caught:"+e.getMessage());
        }
        catch(ArrayIndexOutOfBoundsException e1){
            System.out.println("exception caught:"+e1.getMessage());
        }
    }
}
