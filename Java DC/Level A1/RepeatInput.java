import java.io.Console;

public class RepeatInput {
    public static void main(String[] args) {

        Console with = System.console();
        String text = with.readLine();
        String phrase = text + " ";

        while (text.isEmpty() != true) {
            with = System.console();
            text = with.readLine();
            phrase = phrase.concat(text + " ");
        }

        System.out.println(phrase);
    }
}
