public class Search {
    public static void main(String[] args) {
        String arguments = args[0];
        boolean found = false;
        String[] colors = { "yellow", "orange", "green", "white", "blue" };
        String[] fruits = { "banana", "orange", "apple", "coconut", "grape" };

        for (int i = 0; i < colors.length; i++) {
            if (arguments.contains(colors[i])) {
                found = true;
                System.out.println(fruits[i]);
            }
        }

        if (found != true) {
            System.out.println("Not found");
        }
    }
}
