package bank;
class Account{
    public String name;
    int age;
    protected String email;
    private String password;
    //getters and setters
    public String getPassWord(){
        return this.password;
    }
    public void setPassword(String pass){
        this.password=pass;
    }
}
public class Bank {
    public static void main(String[] args){
    Account account1=new Account();
    account1.name ="Siva Sindhuja";
    account1.age=15;
    account1.email="sindhuja@gmail.com";
        account1.setPassword("sindhuja");
        System.out.println(account1.getPassWord());
}
}
