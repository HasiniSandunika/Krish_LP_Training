package memento_pattern;

import java.util.Stack;

public class RewardHistory {

    private final Stack<RewardHandler.RewardHandlerMemento> rewardHandlerMementos=new Stack<>();

    protected void saveReward(RewardHandler rewardHandler){
        rewardHandlerMementos.push(rewardHandler.saveReward());
    }

    protected void revertReward(RewardHandler rewardHandler){
        if(!rewardHandlerMementos.isEmpty())
            rewardHandler.revertReward(rewardHandlerMementos.pop());
        else
            System.out.println("Nothing to Revert");
    }
}
