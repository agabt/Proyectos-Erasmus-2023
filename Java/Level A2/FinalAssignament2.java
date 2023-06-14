public class FinalAssignament2 {
    public static void main(String[] args) {
        String stringToClean = "This is a text with \" and ** and ?? "
                + "and all sorts of other undesirable signs like ® etc.";

        String cleanedString = new FinalAssignament2Clean().stringCleaner(stringToClean);

        System.out.println(cleanedString);

    }
}
