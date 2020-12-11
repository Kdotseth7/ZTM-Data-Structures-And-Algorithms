import java.util.HashMap;

public class demo {
    public static void main(String args[]) {
        System.out.println(solution("geeksforgeeks"));
    }

    public static String solution(String A) {
        String[] a = A.split("");
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        for (int i=0; i<a.length; i++) {
            if (map.containsKey(a[i])) {
                map.put(a[i], map.get(a[i]) + 1);
                if (map.get(a[i]) > 1)
                    return a[i];
            }
            else
                map.put(a[i], 1);
        }
        return null;
    } 
}
