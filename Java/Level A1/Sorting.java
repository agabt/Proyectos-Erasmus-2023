import java.io.Console;
import java.util.ArrayList;
import java.util.Collections;

public class Sorting {
    public static void main(String[] args) {

        Console with = System.console();
        String text = with.readLine();
        ArrayList<String> phrase = new ArrayList<String>();
        phrase.add(text);

        while (text.isEmpty() != true && phrase.size() <= 25) {
            with = System.console();
            text = with.readLine();
            phrase.add(text);
        }

        Collections.sort(phrase);

        for (String i : phrase) {
            System.out.println(i);
        }
    }
}
