import java.util.ArrayList;

public class FinalAssignament2Clean {
    public String stringCleaner(String usrString){
        String usrCleanedString = "";
        ArrayList<String> unwantCharacters = new ArrayList<>();
        unwantCharacters.add("\"");
        unwantCharacters.add("?");
        unwantCharacters.add("*");
        unwantCharacters.add("®");
        ArrayList<String> cleaner = new ArrayList<>();

        for (int i = 0; i < usrString.length(); i++) {
            cleaner.add(usrString.substring(i, i + 1));
        }

        cleaner.removeAll(unwantCharacters);

        for (String letters : cleaner) {
            usrCleanedString += letters;
        }

        return usrCleanedString;
    }
}
