import java.util.InputMismatchException;
import java.util.Scanner;

public class Calculate {

	private int hopCount;
	private int timeTaken;
	private float distance;

	public void calculateHopsTime() {
		float temp = 0;
		float difference = 0;
		float completed = 0;
		while (temp <= distance){
			temp = temp + 5;
			if (temp == distance){
				hopCount = hopCount + 1;
				difference = 0;
				completed = temp;
				break;
			}
			else if (temp > distance){
				difference = distance-(temp-5);
				completed = temp-5;
				if (distance > 5)
					timeTaken = timeTaken -5;
				break;
			}
			else{
				timeTaken = timeTaken + 1;
				hopCount = hopCount + 1;
			}
			temp = temp + 3;
			if (temp == distance){
				hopCount = hopCount + 1;
				difference = 0;
				completed = temp;
				break;
			}
			else if (temp > distance){
				difference = distance-(temp-3);
				completed = temp-3;
				timeTaken = timeTaken -1;
				break;
			}
			else{
				timeTaken = timeTaken + 2;
				hopCount = hopCount + 1;
			}
			temp = temp + 1;
			if (temp == distance){
				hopCount = hopCount + 1;
				difference = 0;
				completed = temp;
				break;
			}
			else if (temp > distance){
				difference = distance-(temp-1);
				completed = temp-1;
				timeTaken = timeTaken -2;
				break;
			}
			else{
				timeTaken = timeTaken + 5;
				hopCount = hopCount + 1;
			}
		}
		System.out.println("Completed distance: "+ completed +"m");
		System.out.println("Remaining distance: "+ difference + "m");
	}

	public void readData() throws InputMismatchException{
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter the distance: ");
		distance = scanner.nextFloat();
	}

	public void printData(){
		try {
			readData();
			if(distance >= 0){
				calculateHopsTime();
				System.out.println("No. of hops: " +hopCount);
				System.out.println("Time taken to travel: "+timeTaken+"s");
			}
			else
				System.out.println("Invalid distance");
		}
		catch (InputMismatchException ex){
			System.out.println("Invalid distance");
		}
	}

}
