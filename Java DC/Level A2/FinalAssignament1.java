public class FinalAssignament1 {
    public static void main(String[] args) {
        // Formula 1
        String formula = "2/4*3/2/4";

        Double result = new FinalAssignament1Calc().formulaCalc(formula.strip());

        System.out.println(formula.strip() + " = " + result);

        // Formula 2

        formula = "3+2";

        result = new FinalAssignament1Calc().formulaCalc(formula.strip());

        System.out.println(formula.strip() + " = " + result);

        // Formula 3
        formula = "(6+3)*4/2";

        result = new FinalAssignament1Calc().formulaCalc(formula.strip());

        System.out.println(formula.strip() + " = " + result);

    }
}
