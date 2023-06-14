public class Rectangle {
    public static void main(String[] args) {

        int width = Integer.parseInt(args[1]);
        int length = Integer.parseInt(args[2]);

        int i = 1;
        int j = 1;
        
        String rectangle = args[0];

        while (width > j) {
            rectangle += args[0];
            j++;
        }

        while (length >= i) {
            System.out.println(rectangle);
            i++;
        }
    }
}
