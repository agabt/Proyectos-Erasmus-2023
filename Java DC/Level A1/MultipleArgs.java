public class MultipleArgs {
    public static void main(String[] args) {

        Double num1 = Double.parseDouble(args[1]);
        Double num2 = Double.parseDouble(args[2]);

        switch(args[0]) {
            case "+":
                Double operationSum = num1 + num2;
                System.out.println(operationSum);
                break;

            case "-":
                Double operationSub = num1 - num2;
                System.out.println(operationSub);
                break;

            case "X":
                Double operationMul = num1 * num2;
                System.out.println(operationMul);
                break;

            case "/":
                Double operationDiv = num1 / num2;
                System.out.println(operationDiv);
                break;
        }
    }
}
