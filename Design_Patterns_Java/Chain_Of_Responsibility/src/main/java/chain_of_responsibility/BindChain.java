package chain_of_responsibility;

public class BindChain {

    private static EmployeeSalaryHandler initialLevel;

    protected static void buildChain(){
        if(initialLevel==null){
            EmployeeSalaryHandler level1=new Level1();
            EmployeeSalaryHandler level2=new Level2();
            EmployeeSalaryHandler level3=new Level3();

            level1.setSuccessor(level2);
            level2.setSuccessor(level3);
            initialLevel= level1;
        }
    }

    protected static EmployeeSalaryHandler InitialLevel(){
        return initialLevel;
    }

}
