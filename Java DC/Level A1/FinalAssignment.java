import java.util.ArrayList;

public class FinalAssignment {

    // Generate random number
    static int randNumGen() {

        int randomNum = (int) (Math.random() * 101);
        return randomNum;
    }

    // Create the rows with the numbers given
    static ArrayList<Integer> createRow(Integer args) {

        ArrayList<Integer> width = new ArrayList<>();
        int i = 0;

        while (args > i) {
            int generatedNumber = randNumGen();
            width.add(generatedNumber);
            i++;
        }

        return width;
    }

    // Calculate the average of every row
    static int avrgCalc(ArrayList<Integer> numbers, Integer funcUsrArgs1) {

        int calc = 0;

        for (Integer integerNum : numbers) {
            calc += integerNum;
        }

        calc = calc / funcUsrArgs1;

        return calc;
    }

    // Calculate the highest number of every column
    static ArrayList<Integer> calcMax(ArrayList<ArrayList<Integer>> funcAllNumbers) {

        int numMax = 0;

        ArrayList<Integer> x = new ArrayList<>();

        int selectArray = 0;
        int selectNumber = 0;

        while (funcAllNumbers.size() > selectNumber) {
            while (funcAllNumbers.size() > selectArray) {
                numMax = Math.max(numMax, funcAllNumbers.get(selectArray).get(selectNumber));
                selectArray++;
            }

            if (x.size() < funcAllNumbers.size()) {
                selectArray = 0;
            }

            x.add(numMax);
            numMax = 0;
            selectNumber++;
        }

        return x;
    }

    // Calculate the lowest number of every column
    static ArrayList<Integer> calcMin(ArrayList<ArrayList<Integer>> funcAllNumbers) {

        int numMin = 100;

        ArrayList<Integer> y = new ArrayList<>();

        int selectArray = 0;
        int selectNumber = 0;

        while (funcAllNumbers.size() > selectNumber) {
            while (funcAllNumbers.size() > selectArray) {
                numMin = Math.min(numMin, funcAllNumbers.get(selectArray).get(selectNumber));
                selectArray++;
            }

            if (y.size() < funcAllNumbers.size()) {
                selectArray = 0;
            }

            y.add(numMin);
            numMin = 100;
            selectNumber++;
        }

        return y;
    }

    // Calculate the standard deviation of the avarages of every row
    static double stdDeviation(ArrayList<Integer> avrgAvrg, int funcAvrgAvrgNum, int funcUsrArg2) {

        ArrayList<Double> arrayCalc = new ArrayList<>();
        double calc = 0;

        for (Integer integer : avrgAvrg) {
            calc = Math.abs(integer - funcAvrgAvrgNum);
            arrayCalc.add(calc);
        }

        calc = 0;

        for (Double integer : arrayCalc) {
            calc += integer;
        }

        calc /= funcUsrArg2;

        return calc;
    }

    // Beginning of the code
    public static void main(String[] args) {
        // Declare the arguments as an integer
        int usrArg1 = Integer.parseInt(args[0]);
        int usrArg2 = Integer.parseInt(args[1]);

        // Declare the numbers for the loop
        int j = 0;
        int x = 0;

        String shownRow = "";

        // Create the numbers of every column and the "avrg" text (with its tabs)
        while (x < usrArg2) {
            shownRow += "\t" + x;
            x++;
        }

        shownRow += "\t avrg";

        System.out.println(shownRow);

        shownRow = ""; // Reset

        // Create the array to store for calculation all the numbers generated
        ArrayList<ArrayList<Integer>> allNumbers = new ArrayList<>();

        // Store in the array the avarage numbers of every row for calculation
        ArrayList<Integer> avrgAvrg = new ArrayList<Integer>();

        // Starting point of the loop of creating the rows
        while (usrArg2 > j) {

            ArrayList<Integer> createdRow = new ArrayList<Integer>(createRow(usrArg1));

            allNumbers.add(createdRow);

            x = 0;

            shownRow = j + "";

            while (createdRow.size() > x) {
                shownRow += "\t" + createdRow.get(x);
                x++;
            }

            shownRow += "\t" + avrgCalc(createdRow, usrArg1);

            avrgAvrg.add(avrgCalc(createdRow, usrArg1));

            System.out.println(shownRow);

            j++;
        }

        System.out.println(); // Blank space
        
        // Array to store all the lowest numbers of every column in a row
        ArrayList<Integer> createdRow = new ArrayList<Integer>(calcMin(allNumbers));

        // Store the avarage of the avarage of every row in a number
        int avrgAvrgNum = avrgCalc(avrgAvrg, usrArg2);

        shownRow = "min:";

        // Create the "min" row
        for (Integer integer : createdRow) {
            shownRow += "\t" + integer;
        }

        shownRow += "\t" + avrgAvrgNum;

        System.out.println(shownRow);

        // Array to store all the highest numbers of every column in a row
        createdRow = new ArrayList<Integer>(calcMax(allNumbers));

        // Store the standard deviation number calculated
        double stdDeviationNum = stdDeviation(avrgAvrg, avrgAvrgNum, usrArg2);

        shownRow = "max:";

        // Create the "max" row
        for (Integer integer : createdRow) {
            shownRow += "\t" + integer;
        }

        shownRow += "\t" + stdDeviationNum;

        System.out.println(shownRow);

    }
}
