package memento_pattern;

public class MainApplication {

    public static void main(String[] args) {
        RewardHandler rewardHandler=new RewardHandler();
        RewardHistory rewardHistory=new RewardHistory();

        rewardHandler.addReward(new EmployeeReward("001","Hasini", 2, 2,
                "Dinner", "Marina Bay"));
        rewardHandler.addReward(new EmployeeReward("002","Sandunika", 1, 2,
                "Tour", "India"));
        rewardHandler.addReward(new EmployeeReward("003","Hasini", 1, 3,
                "Tour", "India"));

        rewardHistory.saveReward(rewardHandler);

        rewardHandler.addReward(new EmployeeReward("004","Hasini", 1, 1,
                "Tour", "UK"));
        System.out.println(rewardHandler);
        rewardHistory.revertReward(rewardHandler);
        System.out.println(rewardHandler);

    }
}