import java.time.LocalDate;

public class EvenDay {
    static void evenDay() {
        LocalDate execDate = LocalDate.now();
        String day = execDate.toString();

        day = day.substring(8, 10);
        int dayNumber = Integer.parseInt(day);

        boolean evenDayOrNot = false;

        if (dayNumber % 2 == 0) {
            evenDayOrNot = true;
        }

        System.out.println(evenDayOrNot);
    }
    public static void main(String[] args) {
        evenDay();
    }
}
