public class Weekdays {
    public static void main(String[] args) {
        String[] weekdays = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};
        int userInput = Integer.parseInt(args[0]);
        System.out.println(weekdays[userInput - 1]);
    }
}