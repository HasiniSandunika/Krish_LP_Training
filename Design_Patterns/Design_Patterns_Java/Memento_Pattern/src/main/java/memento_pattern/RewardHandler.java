package memento_pattern;

import java.util.ArrayList;

public class RewardHandler {

    private ArrayList<EmployeeReward> employeeRewards=new ArrayList<>();

    protected void addReward(EmployeeReward employeeReward){
        if(employeeReward.getIP()<=Constants.getIP2() && employeeReward.getLevel()<=Constants.getLEVEL2()){
            employeeRewards.add(employeeReward);
        }
        else{
            System.out.println("Sorry, Employee with name: "+employeeReward.getName()+" and ID: "
                    +employeeReward.getId()
                    +" cannot get rewards");
        }
    }

    protected ArrayList<EmployeeReward> getRewards(){
        return (ArrayList<EmployeeReward>) employeeRewards.clone();
    }

    protected RewardHandlerMemento saveReward(){
        return new RewardHandlerMemento(getRewards());
    }

    protected void revertReward(RewardHandlerMemento rewardHandlerMemento){
        employeeRewards= rewardHandlerMemento.getRewards();
    }

    @Override
    public String toString() {
        StringBuilder str= new StringBuilder();
        if(!employeeRewards.isEmpty()){
            for (EmployeeReward employeeReward : employeeRewards) {
                str.append("Employee ID: ").append(employeeReward.getId()).append("\n").
                        append("Employee Name: ").append(employeeReward.getName()).append("\n").
                        append("Employee's Performance Index: ").append(employeeReward.getIP()).
                        append("\n").append("Employee's Level: ").append(employeeReward.getLevel()).
                        append("\n").append("Employee's Reward Type: ").append(employeeReward.getType())
                        .append("\n").
                        append("Place: ").append(employeeReward.getPlace()).append("\n\n");
            }
            str.append("_____________________________\n");
        }
        return str.toString();
    }

    static class RewardHandlerMemento {

        ArrayList<EmployeeReward> rewards;

        protected RewardHandlerMemento(ArrayList<EmployeeReward> rewards){
            this.rewards=rewards;
        }

        protected ArrayList<EmployeeReward> getRewards(){
            return rewards;
        }

    }

}
