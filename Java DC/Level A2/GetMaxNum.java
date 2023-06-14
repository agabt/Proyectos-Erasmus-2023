import java.util.ArrayList;

public class GetMaxNum {
    static void getMaxNumber() {
        ArrayList<Integer> randomNumbers = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            int randomNum = (int) (Math.random() * 101);
            randomNumbers.add(randomNum);
        }

        int maxNumber = 0;

        for (Integer integer : randomNumbers) {
            maxNumber = Math.max(maxNumber, integer);
        }

        System.out.println(randomNumbers);
        System.out.println(maxNumber);
    }
    public static void main(String[] args) {
        getMaxNumber();
    }
}
