public class FinalAssignament1Calc {
    public Double formulaCalc(String usrFormula) {
        Double result = 0.0;

        if (usrFormula.contains("(")) {
            System.out.println("Contiene parentesis");
            System.out.println(usrFormula.lastIndexOf("("));
            System.out.println(usrFormula.indexOf(")"));

            String prueba = usrFormula.substring(usrFormula.lastIndexOf("(") + 1, usrFormula.indexOf(")"));

            String pruebaGirada = "";
            for (int i = 0; i < prueba.length(); i++) {
                pruebaGirada = prueba.charAt(i) + pruebaGirada;
            }

            result = formulaCalc(pruebaGirada);

        } else if (usrFormula.contains("*") || usrFormula.contains("/")) {
            System.out.println("Contiene multiplicacion o division");
            int i = 0;
            String number1 = "";
            String operator = "";

            while (!(usrFormula.substring(i, i + 1).equals("*")
                    || usrFormula.substring(i, i + 1).equals("/"))) {
                number1 += usrFormula.substring(i, i + 1);
                i++;
            }

            operator = usrFormula.substring(i, i + 1);

            usrFormula = usrFormula.replaceFirst(number1, "");
            usrFormula = usrFormula.substring(1);

            switch (operator) {
                case "*":
                    System.out.println("Paso por aqui");
                    System.out.println(number1);
                    System.out.println(usrFormula);
                    result = Double.parseDouble(number1) * formulaCalc(usrFormula);
                    break;

                case "/":
                    System.out.println("Ahora paso por aqui");
                    System.out.println(number1);
                    System.out.println(usrFormula);
                    result = formulaCalc(usrFormula) / Double.parseDouble(number1);
                    break;
            }

        } else if (usrFormula.contains("+") || usrFormula.contains("-")) {
            System.out.println("Contiene suma o resta");

            int i = 0;
            String number1 = "";
            String operator = "";

            while (!(usrFormula.substring(i, i + 1).equals("+")
                    || usrFormula.substring(i, i + 1).equals("-"))) {
                number1 += usrFormula.substring(i, i + 1);
                i++;
            }

            operator = usrFormula.substring(i, i + 1);

            usrFormula = usrFormula.replaceFirst(number1, "");
            usrFormula = usrFormula.substring(1);

            switch (operator) {
                case "+":
                    System.out.println("Paso por aqui a sumar");
                    System.out.println(number1);
                    System.out.println(usrFormula);
                    result = Double.parseDouble(number1) + formulaCalc(usrFormula);
                    break;

                case "-":
                    System.out.println("Ahora paso por aqui a restar");
                    System.out.println(number1);
                    System.out.println(usrFormula);
                    result = Double.parseDouble(number1) - formulaCalc(usrFormula);
                    break;
            }

        } else {
            result = Double.parseDouble(usrFormula);
        }

        return result;
    }
}
