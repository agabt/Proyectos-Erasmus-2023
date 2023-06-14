public class GetOsInfo {
    static void getOsInfo() {
        String OSDetails = System.getProperty("os.name") + " ";
        OSDetails += System.getProperty("os.version") + " ";
        OSDetails += System.getProperty("os.arch");

        System.out.println(OSDetails);
    }
    public static void main(String[] args) {
        getOsInfo();
    }
}
