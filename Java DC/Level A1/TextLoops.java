public class TextLoops {
    public static void main(String[] args) {

        int repetition = Integer.parseInt(args[0]);
        int i = 0;

        while (i < repetition) {
            System.out.println(args[1]);
            i++;
        }
    }
}
